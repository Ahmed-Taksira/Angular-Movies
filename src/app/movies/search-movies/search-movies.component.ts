import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css'],
})
export class SearchMoviesComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  page!: number;
  totalPages: number = 0;
  filteredMovies: Movie[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.movieService
        .searchMovies({ query: params['query'], page: params['page'] })
        .subscribe((res) => {
          this.filteredMovies = res.movies;
          this.totalPages = res.totalPages;
          this.page = Number(params['page']);
        });
    });
  }

  newPage(index: number) {
    this.router.navigate([
      `search/${this.route.snapshot.params['query']}/${
        Number(this.route.snapshot.params['page']) + index
      }`,
    ]);
  }
}
