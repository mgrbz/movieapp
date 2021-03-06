import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryComponent } from './components/category/category.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movies/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { SummaryPipe } from 'src/pipes/summary.pipe';
import { MovieFilterPipe } from 'src/pipes/moviefilter.pipe';
import { AlertifyService } from 'src/services/alertify.service';
import { AppRoutingModule } from './app-routing.module';
import { MovieCreateComponent } from './components/movie-create/movie-create.component';

@NgModule({
  declarations: [  //components
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    FooterComponent,
    MovieCreateComponent,
    SummaryPipe,
    MovieFilterPipe
  ],
  imports: [    // Module
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AlertifyService],  //services
  bootstrap: [AppComponent]   //starter components
})
export class AppModule { }
