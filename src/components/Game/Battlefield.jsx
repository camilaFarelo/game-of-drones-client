import React, {Component, Fragment} from 'react';

export default class Battlefield extends Component {
  state = {
    player1: null,
  }

  _getScore = (weapon) => {
    const {player1} = this.state;
    let player2Score;
    let player1Score;
    if (weapon == player1.weapon) {
      player2Score = 0;
      player1Score = 0;
    } else if ((weapon - player1.weapon + 3) % 3 == 1) {
      player2Score = 1;
      player1Score = 0;
    } else {
      player2Score = 0;
      player1Score = 1;
    }
    return {
      player2Score,
      player1Score
    }
  }

  _setRound = (event) => {
    event.preventDefault();
    const {game: {game}, roundTurn} = this.props;
    const weapon = document.querySelector('input[name="weapon"]:checked').value;
    if (roundTurn === 1) {
      this.setState({player1: {
        weapon: weapon,
        fist_player: game.first_player.player[0].player_id
      }});
    } else {
      const scores = this._getScore(weapon);
      const data = {
        id: game.id,
        round: [{
          round: this.props.round,
          fist_player: game.first_player.player[0].player_id,
          second_player: game.second_player.player[0].player_id,
          player_1_score: scores.player1Score,
          player_2_score: scores.player2Score,
        }]
      }
      this.props.handleUpdateGame(data);
    }
    this.props.setUser(roundTurn + 1);
    this.props.setUserName();
  }

  _gameOptions = () => {
    return (
      <form className='form margin--bottom-30' onSubmit={this._setRound}>
        <div className='form__radio-container'>
          <input type='radio' id='rock' name='weapon' value='0' className='form__radio form__input--hidden' />
          <label htmlFor='rock'>
            <img src='./../../images/rock.png' width='50px' />
          </label>
        </div>
        <div className='form__radio-container'>
          <input type='radio' id='paper' name='weapon' value='1' className='form__radio form__input--hidden' />
          <label htmlFor='paper'>
            <img src='./../../images/paper.png' width='50px' />
          </label>
        </div>
        <div className='form__radio-container'>
          <input type='radio' id='scissors' name='weapon' value='2' className='form__radio form__input--hidden' />
          <label htmlFor='scissors'>
            <img src='./../../images/scissors.png' width='50px' />
          </label>
        </div>
        <input 
          className='btn btn--color-secondary margin--top-30 full--width' 
          type='submit' 
          value='Ok'
        />
      </form>
    );
  }
  
  _header = (player) => {
    const {userName, round} = this.props;
    return (
      <div>
        <h1>round {round}</h1>
        <h4>{userName}</h4>
      </div>
    );
  }

  render() {
    return (
      <div className='text--center'>
        {this._header()}
        {this._gameOptions()}
      </div>
    );
  }
}