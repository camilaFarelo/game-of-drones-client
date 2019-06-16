import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


import { fetchUsers, createUsers } from '../actions/users';
import { createGame } from '../actions/game';
import Header from './../components/Welcome/Header';
import ErrorMessage from './../components/shared/ErrorMessage';
import PlayersForm from './../components/Welcome/PlayersForm';

class Welcome extends Component {
  state = {
    errorMessage: false,
    users: null,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users.error) {
      this.setState({
        errorMessage: nextProps.users.error,
      });
    } 
    if (!nextProps.users.error && this.state.users) {
      this.props.history.push({
        pathname: '/game',
        data: this.state.users,
      });
    }
  }

  handleCreateUsers = (users) => {
    this.setState({users});
    this.props.createUsers(users);
  }

  render() {
    return (
      <div className='container container--center'>
        <div>
          <Header />
          <PlayersForm handleCreateUsers={this.handleCreateUsers} />
          {
            this.state.errorMessage && 
              <ErrorMessage message={this.state.errorMessage} />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = _state => {
  return {
    users: _state.users,
    error: _state.users.error,
  }
}

const mapDispatchToProps = _dispatch => {
  return {
    fetchUsers: bindActionCreators(fetchUsers, _dispatch),
    createUsers: bindActionCreators(createUsers, _dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Welcome));