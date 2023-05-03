import { Component, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css'],
})
export class MoviecardComponent {
  constructor(private router: Router) {}
  @Input()
  movie!: Movie;

  chooseMovie() {
    this.router.navigate([`movies/${this.movie.id}`]);
  }
}
