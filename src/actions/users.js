import axios from 'axios';

var http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';


const setUsers = users => {
  return {
    type: FETCH_USERS,
    users
  };
}

const setUserError = error => {
  return {
    type: CREATE_USER_ERROR,
    error
  };
}

const updateUser = users => {
  return {
    type: UPDATE_USER,
    users
  };
}

const createUser = users => {
  return {
    type: CREATE_USER,
    users
  };
}


export function fetchUsers(data) {
  const params = data;
  return (dispatch) => {
    http.get('/user', {params})
    .then(function (response) {
      dispatch(setUsers(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export function createUsers(users) {
  return (dispatch) => {
    http.post('/user', {users})
    .then(function (response) {
      console.log('dispatch', response);
      dispatch(createUser(response.data));
    })
    .catch(function (error) {
      dispatch(setUserError('User Name Already Exist'));
    });
  }
}