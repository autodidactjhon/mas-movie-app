import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './../../app.models';
import { MovieService } from './../../../app/services/movie.service';

@Component({
  selector: 'app-mma-movie-item',
  templateUrl: './mma-movie-item.component.html',
  styleUrls: ['./mma-movie-item.component.sass']
})
export class MmaMovieItemComponent implements OnInit {

  @Input() movie:Movie;
  
  constructor( public movieService: MovieService) { }

  ngOnInit() {}

  showMovie(movie:Movie) {
    console.log(movie);
    this.movieService.movieSelected = this.movie;
  }

}
