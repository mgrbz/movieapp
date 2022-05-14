import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICategory } from "src/types/category";


@Injectable()
export class CategoryService{

  constructor(private http: HttpClient){

  }

  getCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>('http://localhost:3000/categories');
  }

}

