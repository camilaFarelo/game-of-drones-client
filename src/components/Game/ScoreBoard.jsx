import React, {Component} from 'react';

export default class ScoreBoard extends Component {

  _getUserScore = (user) => {
    const {game: {game}} = this.props;
    if (!game) return null;
    const firstPlayer = game.first_player.player[0];
    const secondPlayer = game.second_player.player[0];
    if (firstPlayer.player_id === user.id) return firstPlayer.player_score;
    if (secondPlayer.player_id === user.id) return secondPlayer.player_score;
  }

  _renderScore = (user) => {
    const score = this._getUserScore(user);
    return (
      <div key={user.id}>
        <h3>Player {user.name}</h3>
        <p>{score}</p>
      </div>
    );
  }

  render() {
    const {users} = this.props;
    return (
        <div>
          <div className='scoreboard'>
            <h1>Scoreboard</h1>
            <div className='scoreboard__container'>
              {(users && users.createdUsers.length) && 
                users.createdUsers.map((user) => (
                this._renderScore(user)
                ))
              }
            </div>
          </div>
        </div>
    );
  }
}