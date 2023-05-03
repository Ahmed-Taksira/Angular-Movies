import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = 'b2054fe24a03181c8aed04c31dce209a';
  private baseUrl = 'https://api.themoviedb.org/3';
  public movies: Movie[] = [];

  constructor(private http: HttpClient) {}

  fetchMovies(page: number) {
    return this.http
      .get<any>(
        `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&page=${page}`
      )
      .pipe(
        map((res: any) => {
          let tempMovies: Movie[] = [];
          for (let key in res.results) {
            let currMovie = res.results[key];
            tempMovies.push(
              new Movie(
                currMovie.id as number,
                currMovie.title as string,
                currMovie.overview as string,
                'https://image.tmdb.org/t/p/w500' +
                  (currMovie.poster_path as string),
                currMovie.vote_average as number,
                currMovie.vote_count as number,
                currMovie.release_date as string
              )
            );
          }
          this.movies = tempMovies;

          return { movies: tempMovies, totalPages: res.totalPages };
        })
      );
  }

  getMovieById(id: number): Movie {
    return this.movies.filter((m) => m.id === id)[0];
  }

  searchMovies(input: { query: any; page: any }) {
    return this.http
      .get<any>(
        `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=en-US&query=${input.query}&page=${input.page}`
      )
      .pipe(
        map((res: any) => {
          let tempMovies: Movie[] = [];
          for (let key in res.results) {
            let currMovie = res.results[key];
            tempMovies.push(
              new Movie(
                currMovie.id as number,
                currMovie.title as string,
                currMovie.overview as string,
                'https://image.tmdb.org/t/p/w500' +
                  (currMovie.poster_path as string),
                currMovie.vote_average as number,
                currMovie.vote_count as number,
                currMovie.release_date as string
              )
            );
          }
          this.movies = tempMovies;

          return { movies: tempMovies, totalPages: res.totalPages };
        })
      );
  }
}
