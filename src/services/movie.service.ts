import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IMovie } from "src/types/movie";





@Injectable()
export class MovieService{
  url = "http://localhost:3000/movies";
  constructor(private http: HttpClient){}

  getMovies(categoryId: number | null): Observable<IMovie[]> {

    
    let newUrl = categoryId ? `${this.url}?categoryId=${categoryId}` : this.url;
    console.log('newUrl : ', newUrl);


    return this.http.get<IMovie[]>(newUrl)
    .pipe(
      tap(data => console.log('movies: ', data)),
      catchError(this.handleError)
    );
  }

  getMovieById(movieId: number): Observable<IMovie>{

    let newUrl = `${this.url}/${movieId}`

    return this.http.get<IMovie>(newUrl).pipe(
      tap(data => console.log('movie: ', data)),
      catchError(this.handleError)
    );

  }

  handleError(error: HttpErrorResponse){
    return throwError('Bilinmeyen Bir Hata Oluştu!!!!!!');
  }


}


