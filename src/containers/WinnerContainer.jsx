import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getUsersTotals} from './../components/Winner/utils/utils';
import { fetchGame } from '../actions/game';
import { deleteUsers } from '../actions/users';

import Winner from '../components/Winner';

class WinnerContainer extends Component {
  static propTypes = {
    game: PropTypes.object,
    history: PropTypes.object,
  }

  handlerPlayAgainBtn = () => {
    const {game: {game}} = this.props;
    this.props.deleteUsers({
      player_1: game.first_player.player[0].player_id,
      player_2: game.second_player.player[0].player_id,
    });
    this.props.history.push({
      pathname: '/',
    });
  }

  render() {
    const {game: {updatedGame}} = this.props;
    const data = getUsersTotals(updatedGame);
    return (
      <Winner 
        handlerPlayAgainBtn={this.handlerPlayAgainBtn}
        data={data} 
        handlerSumTotalsByUser={this.handlerSumTotalsByUser} 
      />
    );
  }
}

const mapStateToProps = _state => {
  return {
    game: _state.game,
  }
}

const mapDispatchToProps = _dispatch => {
  return {
    deleteUsers: bindActionCreators(deleteUsers, _dispatch),
    fetchGame: bindActionCreators(fetchGame, _dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WinnerContainer));