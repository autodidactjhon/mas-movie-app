import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../app.models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  private movie = new BehaviorSubject<Movie>(null);
  selectedMovie = this.movie.asObservable();

  constructor() {}

  setMovie(movie: Movie) {
    this.movie.next(movie)
  }
}
