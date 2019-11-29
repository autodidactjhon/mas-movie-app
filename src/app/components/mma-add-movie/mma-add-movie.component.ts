import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducers';

import { AddMovieAction } from './../../actions/movie.actions';

@Component({
  selector: 'app-mma-add-movie',
  templateUrl: './mma-add-movie.component.html',
  styleUrls: ['./mma-add-movie.component.sass']
})
export class MmaAddMovieComponent implements OnInit {

  movie:FormGroup;
  currentYear:Date;
  base64textString:string;

  constructor( 
    private store: Store<AppState>,
    private router: Router,
    config: NgbDatepickerConfig
    ) {
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

  //handle image selected
  handleFileSelect(evt){
    const files = evt.target.files;
    const file = files[0];
  
    if (files && file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  //read image and convert it to base64
  handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
   }

  saveMovie() {
    const date = this.movie.value.releaseDate;
    const releaseDate = date.day+'/'+date.month+'/'+date.year;

    const action = new AddMovieAction( this.movie.value.description,
                                       this.base64textString,
                                       this.movie.value.title,
                                       releaseDate );
    this.store.dispatch( action );
    this.router.navigate(['/home'])
  }

}
