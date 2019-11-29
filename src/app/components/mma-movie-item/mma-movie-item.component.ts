import { Component, OnInit, Input, Output } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducers';

import { Movie } from './../../app.models';
import { MovieService } from './../../../app/services/movie.service';
import { DeleteMovieAction } from './../../actions/movie.actions';

@Component({
  selector: 'app-mma-movie-item',
  templateUrl: './mma-movie-item.component.html',
  styleUrls: ['./mma-movie-item.component.sass']
})
export class MmaMovieItemComponent implements OnInit {

  @Input() movie:Movie;
  
  constructor( private store: Store<AppState>, private movieService: MovieService) { }

  ngOnInit() {}

  showMovie(movie:Movie) {
    this.movieService.setMovie(movie);
  }

  deleteMovie(id:number) {
    const action = new DeleteMovieAction(id);
    this.store.dispatch( action );
    this.movieService.setMovie(null);
  }

}
