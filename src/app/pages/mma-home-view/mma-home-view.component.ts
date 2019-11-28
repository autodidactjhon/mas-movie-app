import { Component, OnInit, Output } from '@angular/core';
import { Movie } from './../../app.models';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducers';

@Component({
  selector: 'app-mma-home-view',
  templateUrl: './mma-home-view.component.html',
  styleUrls: ['./mma-home-view.component.sass']
})
export class MmaHomeViewComponent implements OnInit {
  
  @Output() movies: Movie[] = [];

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('movies')
      .subscribe( movies  => {
        this.movies = movies;
      });
  }

}
