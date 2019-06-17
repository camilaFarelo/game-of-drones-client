import React, {Component} from 'react';

export default class ScoreBoard extends Component {

  _getRoundWinner = (round) => {
    if (!round) return null;
    return round.player_1_score > round.player_2_score
      ? round.first_player_name
      : round.second_player_name;
  }

  _renderTableRow = (round, index) => {
    return (
      <tr key={index}>
        <td>{round.round}</td>
        <td>{this._getRoundWinner(round)}</td>
      </tr>
    )
  }

  _renderScoreTable = () => {
    const {rounds} = this.props;
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Round</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          {rounds.length ?
            rounds.map((round, index) => (
              this._renderTableRow(round, index)
            )) : null
          }
        </tbody> 
      </table>
    );
  }

  render() {
    return (
        <div>
          <div className='scoreboard'>
            <h1 className='text--center'>Scoreboard</h1>
            <div className='scoreboard__container'>
              {this._renderScoreTable()}
            </div>
          </div>
        </div>
    );
  }
}