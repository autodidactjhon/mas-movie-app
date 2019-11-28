import { Movie } from './app.models';

export interface AppState {
  movies: Movie[];
  topMovies: Movie[];
}

