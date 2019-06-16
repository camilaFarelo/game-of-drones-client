import { 
  FETCH_GAME, FETCH_GAME_ERROR, CREATE_GAME, 
  CREATE_GAME_ERROR, UPDATE_GAME, UPDATE_GAME_ERROR
} from '../actions/game'

const initialState = {
  game: null,
  error: null,
  updatedGame: null,
}

export default (state = initialState, action) => {
  const { game, error } = action;
  switch (action.type) {
    case FETCH_GAME:
      return {
        ...state,
        game,
      }
    case FETCH_GAME_ERROR:
      return {
        ...state,
        error: error,
      }
    case CREATE_GAME:
      return {
        ...state,
        createdGame: game,
      }
    case CREATE_GAME_ERROR:
      return {
        ...state,
        error: error,
      }
    case UPDATE_GAME:
      return {
        ...state,
        updatedGame: game,
      }
    case UPDATE_GAME_ERROR:
        return {
          ...state,
          error: error,
        }
    default:
      return state;
  }
}
