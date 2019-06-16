import React, {Component} from 'react';

import ScoreBoard from './ScoreBoard';
import Battlefield from './Battlefield';


export default class Game extends Component {
  state = {
    round: 1,
    roundTurn: 1,
    userName: null,
  }

  componentWillReceiveProps(nextProps) {
    const {game: {game}, users: {createdUsers}} = nextProps;
    if (createdUsers.length && game && game.first_player && game.first_player.player.length) {
      const user = createdUsers.find((user) => (
        user.id === game.first_player.player[0].player_id
      ));
      this.setState({
        userName: user.name
      });
    }
  }

  setUserName = () => {
    const {users: {createdUsers}} = this.props;
    const user = (createdUsers && createdUsers.length) && createdUsers.find((user) => (
      user.name !== this.state.userName
    ));
    this.setState({
      userName: user.name
    });
  }

  setUser = (roundTurn) => {
    this.setState({roundTurn});
  }

  render() {
    const {handleUpdateGame} = this.props
    console.log('userName', this.state.userName);
    return (
      <div className='container container--center container--bg-primary full-height'>
        <div>
          <Battlefield 
            {...this.props} 
            setUserName={this.setUserName}
            setUser={this.setUser}
            handleUpdateGame={handleUpdateGame}
            round={this.state.round}
            userName={this.state.userName}
            roundTurn={this.state.roundTurn}
          />
          <ScoreBoard {...this.props}/>
        </div>
      </div>
    );
  }
}