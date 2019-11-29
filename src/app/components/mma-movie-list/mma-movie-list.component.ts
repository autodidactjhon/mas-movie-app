import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from './../../app.models';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-mma-movie-list',
  templateUrl: './mma-movie-list.component.html',
  styleUrls: ['./mma-movie-list.component.sass']
})
export class MmaMovieListComponent implements OnInit {

  @Input() movies:Movie[];
  idMovieSelected:number;

  constructor( public movieService: MovieService ) {}

  ngOnInit() {
    this.movieService.selectedMovie.subscribe(movie => {
      if(movie){this.idMovieSelected = movie.id}
    });
  }
}
