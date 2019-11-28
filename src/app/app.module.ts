import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { moviesReducers } from './reducers/movie.reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MmaHomeViewComponent } from './pages/mma-home-view/mma-home-view.component';
import { MmaAddMovieViewComponent } from './pages/mma-add-movie-view/mma-add-movie-view.component';
import { MmaTopFiveViewComponent } from './pages/mma-top-five-view/mma-top-five-view.component';
import { MmaMovieListComponent } from './components/mma-movie-list/mma-movie-list.component';
import { MmaMovieDetailComponent } from './components/mma-movie-detail/mma-movie-detail.component';
import { MmaMovieItemComponent } from './components/mma-movie-item/mma-movie-item.component';
import { MmaAddMovieComponent } from './components/mma-add-movie/mma-add-movie.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MmaHomeViewComponent,
    MmaAddMovieViewComponent,
    MmaTopFiveViewComponent,
    MmaMovieListComponent,
    MmaMovieDetailComponent,
    MmaMovieItemComponent,
    MmaAddMovieComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ movies: moviesReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
