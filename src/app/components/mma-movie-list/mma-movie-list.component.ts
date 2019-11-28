import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from './../../app.models';

@Component({
  selector: 'app-mma-movie-list',
  templateUrl: './mma-movie-list.component.html',
  styleUrls: ['./mma-movie-list.component.sass']
})
export class MmaMovieListComponent implements OnInit {

  @Input() movies:Movie[];

  constructor() {}

  ngOnInit() {}

}
