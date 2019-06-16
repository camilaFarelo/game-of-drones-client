import React, {Component, Fragment} from 'react';

export default class players extends Component {
  state = {
    users: [{name: ''}, {name: ''}],
  }

  _handleCreateUsers = (event) => {
    event.preventDefault();
    this.props.handleCreateUsers(this.state.users);
  }

  _onChangeUsers = (event) => {
    event.preventDefault();
    const newUsers = [...this.state.users];
    newUsers[event.target.name].name = event.target.value;
    this.setState({users: newUsers});
  }

  _renderUser = (index) => {
    return (
      <div className='form__group'>
        <input 
          className='form__input' 
          type='text' 
          name={index} 
          onChange={this._onChangeUsers}  
          required
        />
        <span className='highlight'></span>
        <span className='bar'></span>
        <label className='form__label'>Player#{index + 1}:</label>
      </div>
    );
  }

  render() {
    return (
      <form className='form' onSubmit={this._handleCreateUsers}>
        <fieldset className='margin--bottom-30'>
          <legend>Enter your nickname and start to play!!</legend>
          <div className='padding--top-30'>
            {this._renderUser(0)}
            {this._renderUser(1)}
          </div>
        </fieldset>
        <input className='btn btn--color-secondary full--width' type='submit' value='Start'/>
      </form>
    );
  }
}