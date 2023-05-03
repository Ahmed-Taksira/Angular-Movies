import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css'],
})
export class SearchMoviesComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  filteredMovies: Movie[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.filteredMovies = this.movieService.queryMovies(params['query']);
    });
  }
}
