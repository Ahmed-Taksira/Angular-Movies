import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { NotFoundComponent } from './movies/not-found/not-found.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchMoviesComponent } from './movies/search-movies/search-movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent, pathMatch: 'full' },
  { path: ':page', component: MoviesComponent, pathMatch: 'full' },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'search/:query', component: SearchMoviesComponent },
  { path: 'error/message', component: NotFoundComponent },
  { path: '**', redirectTo: 'error/message' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
