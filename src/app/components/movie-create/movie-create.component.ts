import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "src/services/category.service";
import { MovieCreateService } from "src/services/movie-create.service";
import { ICategory } from "src/types/category";
import { IMovie } from "src/types/movie";




@Component({
  selector: "movie-create",
  templateUrl: "./movie-create.component.html",
  styleUrls: ["./movie-create.component.css"],
  providers: [MovieCreateService, CategoryService]
})
export class MovieCreateComponent{
  error: string= ''
  title: string = 'MovieC Create';
  categories: ICategory[] = [];
  constructor(private movieCreateService: MovieCreateService, private categoryService: CategoryService, private router: Router){}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createMovie(title: any, description: any, imageUrl: any, categoryId: any ) {

    const movie = {
      id: 0,
      title: title.value,
      description: description.value,
      imageUrl: imageUrl.value,
      categoryId: categoryId.value,
      isPopular: false,
      datePublished: new Date().getTime()
    };

    this.movieCreateService.createMovie(movie).subscribe(data => {
      // this.router.navigate(['/movies']);
      this.router.navigate([`/movies/${data.id}`]);
    },
    error => {
      this.error = error
    }
    )


  }


}


