import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieService } from './movies/movie.service';
import { MoviesComponent } from './movies/movies.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MoviecardComponent } from './movies/moviecard/moviecard.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './movies/not-found/not-found.component';
import { SearchMoviesComponent } from './movies/search-movies/search-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    SearchbarComponent,
    MoviecardComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    NotFoundComponent,
    SearchMoviesComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
