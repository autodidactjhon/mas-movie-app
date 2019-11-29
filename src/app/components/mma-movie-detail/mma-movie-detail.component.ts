import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from 'src/app/app.models';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-mma-movie-detail',
  templateUrl: './mma-movie-detail.component.html',
  styleUrls: ['./mma-movie-detail.component.sass']
})
export class MmaMovieDetailComponent implements OnInit {

  movie:Movie;

  constructor( public movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.movieService.selectedMovie.subscribe(movie => this.movie = movie)
  }

  redirectToAddMovie() {
    this.router.navigate(['/add-movie'])
  }

}
