import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGame, updateGame } from '../actions/game';

import Game from '../components/Game';

class GameField extends Component {

  componentDidMount() {
    const {users} = this.props;
    this.props.fetchGame({
      first_player_id: users.createdUsers[0].id,
      second_player_id: users.createdUsers[1].id
    });
  }

  handleUpdateGame = (game) => {
    this.props.updateGame(game);
  }

  render() {
    console.log('render', this.props);
    return <Game {...this.props} handleUpdateGame={this.handleUpdateGame} />
  }
}

const mapStateToProps = _state => {
  console.log('GAMEFIELD._STATE', _state);
  return {
    users: _state.users,
    game: _state.game,
    error: _state.users.error,
    createdUsers: _state.users.createdUsers,
    updatedGame: _state.game.updatedGame,
  }
}

const mapDispatchToProps = _dispatch => {
  return {
    fetchGame: bindActionCreators(fetchGame, _dispatch),
    updateGame: bindActionCreators(updateGame, _dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameField);