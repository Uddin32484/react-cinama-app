
import { MOVIE_API_URL } from '../../services/Movies.service';
import { MOVIE_LIST, RESPONSE_PAGE, SET_ERROR } from '../types';

export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const movies = await MOVIE_API_URL(type, pageNumber);
    const { results, page, total_pages, total_results } = movies.data;
    const payload = {
      page,
      totalPages: total_pages,
      totalResults: total_results

    };
    dispatch({ type: MOVIE_LIST, payload: results });
    dispatch({ type: RESPONSE_PAGE, payload: payload });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  };
};

/* export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const movies = await MOVIE_API_URL(type, pageNumber);
    const { results, page, total_pages } = movies.data;
    const payload = {
      page,
      totalPages: total_pages

    };
    dispatchMethod(MOVIE_LIST, results, dispatch);
    dispatchMethod(RESPONSE_PAGE, payload, dispatch);
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  };
}; */

/* const dispatchMethod = (type, payload, dispatch) => {
  dispatch({ type, payload });
}; */
