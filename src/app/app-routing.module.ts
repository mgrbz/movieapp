import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { CategoryComponent } from './components/category/category.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: 'movies', component: MoviesComponent
  },
  {
    path: '', redirectTo: 'movies', pathMatch: 'full'
  },
  {
    path: 'movies/category/:categoryId', component: MoviesComponent
  },
  {
    path: 'movies/:movieId', component: MovieDetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
