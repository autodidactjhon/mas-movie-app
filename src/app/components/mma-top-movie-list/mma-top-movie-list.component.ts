import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/app.models';

@Component({
  selector: 'app-mma-top-movie-list',
  templateUrl: './mma-top-movie-list.component.html',
  styleUrls: ['./mma-top-movie-list.component.sass']
})
export class MmaTopMovieListComponent implements OnInit {

  @Input() movie: Movie[];

  constructor() { }

  ngOnInit() {}

}
