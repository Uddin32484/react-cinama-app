import { LOAD_MORE_RESULT, MOVIE_LIST, MOVIE_TYPE, RESPONSE_PAGE } from '../types';

const initialState = {
  list: [],
  page: 1,
  totalPages: 0,
  totalResults: 0,
  movieType: 'Now Playing'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return {
        ...state,
        list: action.payload
      };
    case RESPONSE_PAGE:
      return {
        ...state,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        totalResults: action.payload.totalResults

      };
    case LOAD_MORE_RESULT:
      return {
        ...state,
        list: [...state.list, ...action.payload]

      };
    case MOVIE_TYPE:
      return {
        ...state,
        movieType: action.payload
      };
    default:
      return state;
  }
};

/* export default (state = initialState, action) =>{
  switch (action.type) {
    case MOVIE_LIST:
      return {
            ...state,
          list: action.payload
       };

    default:
    return state;
  }

} */
