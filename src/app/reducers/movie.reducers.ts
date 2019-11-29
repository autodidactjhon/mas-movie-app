import * as appActions from './../actions/movie.actions';
import { Movie } from './../app.models';

export const initialState: Movie[] = [];

export function moviesReducers( state = initialState, action:appActions.Actions ): Movie[] {
  switch (action.type) {
    case appActions.ADD_MOVIE:
      const movie = new Movie( action.description,
                               action.image,
                               action.title,
                               action.releaseDate);
      return [...state, movie];
    case appActions.DELETE_MOVIE:
      return state.filter(item => item.id !== action.id)
    
    default:
      return state;
  }
}