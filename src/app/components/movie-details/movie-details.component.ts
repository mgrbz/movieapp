import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/services/movie.service';
import { IMovie } from 'src/types/movie';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieService]
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovie | null = null;
  error: any;
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      let movieId = param["movieId"];

      this.movieService.getMovieById(movieId).subscribe(data => {
        this.movie = data;
        console.log('movieDetails Movie: ', this.movie);
      },
      error=> {
        this.error = error
      })

    })
  }

}
