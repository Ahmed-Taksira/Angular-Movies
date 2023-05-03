import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  movies: Movie[] = [];
  query: string = '';
  page!: number;
  totalPages!: number;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let tempParam = params['page'];
      if (tempParam == undefined) this.page = 1;
      else this.page = Number(tempParam);
      this.movieService.fetchMovies(this.page).subscribe((res) => {
        this.movies = res.movies;
        this.totalPages = res.totalPages;
      });
    });
  }

  newPage(index: number) {
    let tempParam = this.route.snapshot.params['page'];
    if (tempParam == undefined) this.router.navigate([2]);
    else this.router.navigate([Number(tempParam) + index]);
  }
}
