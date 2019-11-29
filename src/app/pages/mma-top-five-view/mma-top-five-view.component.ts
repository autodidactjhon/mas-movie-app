import { Component, OnInit, Output } from '@angular/core';
import { MoviesApiService } from './../../services/movies-api.service';
import { Movie } from 'src/app/app.models';

@Component({
  selector: 'app-mma-top-five-view',
  templateUrl: './mma-top-five-view.component.html',
  styleUrls: ['./mma-top-five-view.component.sass']
})
export class MmaTopFiveViewComponent implements OnInit {

  @Output() topMovies: Movie[];

  constructor( private moviesApi: MoviesApiService ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesApi.getMovies().subscribe(movies => {
      this.topMovies = movies[Object.keys(movies)[0]];
    });
  }

}
