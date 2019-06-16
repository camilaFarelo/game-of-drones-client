import axios from 'axios';

var http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

export const FETCH_GAME = 'FETCH_GAME';
export const FETCH_GAME_ERROR = 'FETCH_GAME_ERROR';
export const CREATE_GAME = 'CREATE_GAME';
export const CREATE_GAME_ERROR = 'CREATE_GAME_ERROR';
export const UPDATE_GAME = 'UPDATE_GAME';
export const UPDATE_GAME_ERROR = 'UPDATE_GAME_ERROR'

const setGame = game => {
  return {
    type: FETCH_GAME,
    game
  };
}

const setFetchGameError = game => {
  return {
    type: FETCH_GAME_ERROR,
    game
  };
}

const setCreateGame = game => {
  return {
    type: CREATE_GAME,
    game
  };
}

const setGameError = error => {
  return {
    type: CREATE_GAME_ERROR,
    error
  };
}

const setUpdateGame = game => {
  return {
    type: UPDATE_GAME,
    game
  };
}

const setUpdateGameError = error => {
  return {
    type: UPDATE_GAME_ERROR,
    error
  };
}

export function fetchGame(data) {
  const params = data;
  return (dispatch) => {
    http.get('/game', {params})
    .then(function (response) {
      dispatch(setGame(response.data));
    })
    .catch(function (error) {
      dispatch(setFetchGameError('Oops!! something went wrong. try again'));
    });
  }
}

export function createGame(game) {
  return (dispatch) => {
    http.post('/game', {game})
    .then(function (response) {
      dispatch(setCreateGame(response.data));
    })
    .catch(function (error) {
      dispatch(setGameError('Oops!! something went wrong. try again'));
    });
  }
}

export function updateGame(game) {
  return (dispatch) => {
    http.put('/game', {game})
    .then(function (response) {
      dispatch(setUpdateGame(response.data));
    })
    .catch(function (error) {
      dispatch(setUpdateGameError('Oops!! something went wrong. try again'));
    });
  }
}