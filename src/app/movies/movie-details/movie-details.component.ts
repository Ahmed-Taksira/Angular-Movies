import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  movie!: Movie;

  ngOnInit(): void {
    this.movie = this.movieService.getMovieById(
      Number(this.route.snapshot.params['id'])
    );
  }

  downloadExcel() {
    const data = [
      {
        Title: this.movie.title,
        Rating: this.movie.rating,
        Overview: this.movie.overview,
        Votes_Count: this.movie.releaseDate,
        Release_Date: this.movie.releaseDate,
      },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    if ((window.navigator as any).msSaveOrOpenBlob) {
      (window.navigator as any).msSaveOrOpenBlob(blob, 'movies.xlsx');
    } else {
      fileSaver.saveAs(blob, 'movies.xlsx');
    }
  }
}
