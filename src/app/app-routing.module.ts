import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MmaTopFiveViewComponent } from './pages/mma-top-five-view/mma-top-five-view.component';
import { MmaAddMovieViewComponent } from './pages/mma-add-movie-view/mma-add-movie-view.component';
import { MmaHomeViewComponent } from './pages/mma-home-view/mma-home-view.component';

const routes: Routes = [
  { path: 'add-movie', component: MmaAddMovieViewComponent },
  { path: 'home', component: MmaHomeViewComponent },
  { path: 'top-five', component: MmaTopFiveViewComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
