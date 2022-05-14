import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IMovie } from "src/types/movie";





@Injectable()
export class MovieService{
  
  constructor(private http: HttpClient){}

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('http://localhost:3000/movie')
    .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse){
    return throwError('Bilinmeyen Bir Hata Oluştu!!!!!!');
  }


}


