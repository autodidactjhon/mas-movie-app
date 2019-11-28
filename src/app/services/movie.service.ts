import { Injectable } from '@angular/core';
import { Movie } from '../app.models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieSelected:Movie = {
    description: '',
    id: Math.random(),
    image: '',
    title: '',
    releaseDate: ''
  }

  constructor() { }
}
