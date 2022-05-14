import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/services/alertify.service';
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
  filteredMovies: IMovie[];
  title = 'Film Listesi';
  filterText: string = ""

  constructor(private alertify: AlertifyService) {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.filteredMovies = this.movies;
   }

  ngOnInit(): void {
  }

  onInputChange() {
    this.filteredMovies = this.filterText ? 
      this.movies.filter(m => m.title.toLowerCase().indexOf(this.filterText.toLowerCase()) !== -1 || 
                              m.description.toLowerCase().indexOf(this.filterText.toLowerCase()) !== -1 ) : this.movies;
  }

  AddToList($event: any, movie: IMovie){
    console.log('movie : ', $event?.target)
    if($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = "Listeden Çıkar";
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');

      this.alertify.success(movie.title + ' listene eklendi')
    } else if($event.target.classList.contains('btn-danger')){
      $event.target.innerText = "Listeye Ekle";
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      
      this.alertify.error(movie.title + ' listeden çıkarıldı');

    }
  }

  // movies = [
  //   new Movie("1", 'film1', 'film 1 açıklama', '1.jpeg'),
  //   new Movie("2", 'film2', 'film 2 açıklama', '2.jpeg'),
  //   new Movie("3", 'film3', 'film 3 açıklama', '3.jpeg'),
  //   new Movie("4", 'film4', 'film 4 açıklama', '4.jpeg')
  // ];




}
