import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import * as ExcelJS from 'exceljs';
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
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Movies');
    worksheet.columns = [
      { header: 'Title', key: 'title' },
      { header: 'Rating', key: 'rating' },
      { header: 'Overview', key: 'overview' },
      { header: 'Votes', key: 'votes' },
      { header: 'Release Date', key: 'release_date' },
    ];

    worksheet.addRow({
      title: this.movie.title,
      rating: this.movie.rating,
      overview: this.movie.overview,
      votes: this.movie.votesCount,
      release_date: this.movie.releaseDate,
    });

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: 'application/octet-stream' });
      fileSaver.saveAs(blob, `${this.movie.title}.xlsx`);
    });
  }
}
