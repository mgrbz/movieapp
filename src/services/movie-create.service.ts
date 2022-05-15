import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, pipe, tap, throwError } from "rxjs";
import { IMovie } from "src/types/movie";





@Injectable()
export class MovieCreateService{
  
  url = 'http://localhost:3000/movies';

  constructor(private http: HttpClient){}


  addMovie(movie: IMovie): Observable<any>{
    return this.http.post<any>(this.url, movie).pipe(
      tap(data => console.log('addMovie data : ', data)),
      catchError(this.handleError)
    )
    
  }

  handleError(error: HttpErrorResponse){
    return throwError('Movie Eklenemedi');
  }

}

