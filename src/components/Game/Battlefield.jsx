import React, {Component} from 'react';

import {getScore, getTotalScore, parsePutData} from './utils/utils';
import GameOptionsForm from './GameOptionsForm';
import BattlefieldHeader from './BattlefieldHeader';
import ScoreBoard from './ScoreBoard';

export default class Battlefield extends Component {
  state = {
    player1: null,
    totalPlayer1Score: 0,
    totalPlayer2Score: 0,
    selectedMove: null,
    roundArray: [],
    options: [
      {name: 'rock', value: 0},
      {name: 'paper', value: 1},
      {name: 'scissors', value: 2},
    ]
  }

  handleSubmitMove = (event) => {
    event.preventDefault();
    const {selectedMove, player1, roundArray} = this.state;
    const {game: {game}, roundTurn, round} = this.props;
    const weapon = selectedMove && selectedMove.value;
    let newRoundArray = roundArray.slice();

    if (roundTurn === 1) {
      // for the first move
      this.props.setUser(roundTurn + 1);
      this.setState({player1: {
        weapon: weapon,
        fist_player: game.first_player.player[0].player_id
      }});
    } else {
      const scores = getScore(weapon, player1);
      const totalScore = getTotalScore(scores, this.state);
      const roundArrayIndex = !newRoundArray.length ? newRoundArray.length : (newRoundArray.length - 1) + 1 ;
      newRoundArray[roundArrayIndex] = parsePutData(game, scores, round);
      this.setState(
        {
          totalPlayer1Score: totalScore.player1Score, 
          totalPlayer2Score: totalScore.player2Score,
          roundArray: newRoundArray
        }, 
        () => {
          this._onPutRoundData(round);
        } 
      );
    }
    this.props.setUserName();
  }

  _onPutRoundData = (round) => {
    this.props.setUser(1);
    this.props.setRound(round + 1);
    this._onUpdateGameRecord(this.state.roundArray);
  }

  handlesSelectMove = (event) => {
    const {target} = event;
    this.setState({selectedMove: {
      id: target.id,
      value: target.value,
    }});
  }
  
  _onResetOption = () => {
    this.setState({selectedMove: null});
  }

  _onUpdateGameRecord = (roundArray) => {
    const {game: {game}} = this.props;
    if (
      this.state.totalPlayer1Score === 3 || 
      this.state.totalPlayer2Score === 3
    ) {
      const data = {id: game.id, round: roundArray}
      this.props.handleUpdateGame(data);
      this._onResetOption();
    }
  }

  render() {
    return (
      <div className='text--center'>
        <BattlefieldHeader
          round={this.props.round}
          userName={this.props.userName}
        />
        <GameOptionsForm
          handleSubmitMove={this.handleSubmitMove}
          handlesSelectMove={this.handlesSelectMove}
          options={this.state.options}
          selectedMove={this.state.selectedMove}
        />
        <ScoreBoard rounds={this.state.roundArray} />
      </div>
    );
  }
}