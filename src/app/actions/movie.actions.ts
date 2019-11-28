import { Action } from '@ngrx/store';

export const ADD_MOVIE = '[MOVIE] Add movie';
export const DELETE_MOVIE = '[MOVIE] Delete movie';

export class AddMovieAction implements Action {
    readonly type = ADD_MOVIE;

    constructor( public description:string,
                 public image:string,
                 public title:string, 
                 public releaseDate:string ) {}
}

export class DeleteMovieAction implements Action {
    readonly type = DELETE_MOVIE;

    constructor( public id:number ) {}
}

export type Actions = AddMovieAction |
                      DeleteMovieAction;
