import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import './App.scss';
import Welcome from './containers/Welcome'
import GameField from './containers/GameField'

//img
import './images/paper.png';
import './images/rock.png';
import './images/scissors.png';

const store = createStore(reducer, compose(
  applyMiddleware(thunk)
));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/game' component={GameField} />
            <Route path='/' component={Welcome} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
