import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducers';

import { AddMovieAction, DeleteMovieAction } from './../../actions/movie.actions';

@Component({
  selector: 'app-mma-add-movie',
  templateUrl: './mma-add-movie.component.html',
  styleUrls: ['./mma-add-movie.component.sass']
})
export class MmaAddMovieComponent implements OnInit {

  movie:FormGroup;
  currentYear:Date;

  constructor( private store: Store<AppState>, config: NgbDatepickerConfig ) {
    //Customize default datapicker values
    this.currentYear = new Date();
    config.minDate = { year: 1900, month: 1, day: 1 };
    config.maxDate = { year: this.currentYear.getUTCFullYear(),
                       month: this.currentYear.getUTCMonth() + 1,
                       day: this.currentYear.getUTCDate() };

    this.movie = new FormGroup({
      'title': new FormControl( '', Validators.required ),
      'releaseDate': new FormControl( '', Validators.required),
      'image': new FormControl( '', Validators.required ),
      'description': new FormControl(),
    });
   }

  ngOnInit() {
  }

  saveMovie() {
    const date = this.movie.value.releaseDate;
    const releaseDate = date.year+'-'+date.month+'-'+date.day;

    const action = new AddMovieAction( this.movie.value.description,
                                       this.movie.value.image,
                                       this.movie.value.title,
                                       releaseDate );
    this.store.dispatch( action );
  }

}
