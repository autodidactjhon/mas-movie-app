import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/app.models';
import { MovieService } from './../../../app/services/movie.service';

@Component({
  selector: 'app-mma-movie-detail',
  templateUrl: './mma-movie-detail.component.html',
  styleUrls: ['./mma-movie-detail.component.sass']
})
export class MmaMovieDetailComponent implements OnInit {

  movie:Movie;

  constructor( public movieService: MovieService) { }

  ngOnInit() {
    this.movie = this.movieService.movieSelected;
    console.log(this.movie);
  }

}
