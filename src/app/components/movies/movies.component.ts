import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/types/movie';
import { MovieRepository } from 'src/types/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];
  movieRepository: MovieRepository;
  popularMovies: IMovie[];
  title = 'Film Listesi';
  filterText: string = ""

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies()
   }

  ngOnInit(): void {
  }

  // movies = [
  //   new Movie("1", 'film1', 'film 1 açıklama', '1.jpeg'),
  //   new Movie("2", 'film2', 'film 2 açıklama', '2.jpeg'),
  //   new Movie("3", 'film3', 'film 3 açıklama', '3.jpeg'),
  //   new Movie("4", 'film4', 'film 4 açıklama', '4.jpeg')
  // ];




}
