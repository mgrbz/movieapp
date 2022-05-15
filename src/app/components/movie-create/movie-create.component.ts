import { Component } from "@angular/core";
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

  title: string = 'MovieC Create';
  categories: ICategory[] = [];
  constructor(private movieCreateService: MovieCreateService, private categoryService: CategoryService){}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createMovie(title: any, description: any, imageUrl: any, categoryId: any ) {
    console.log(title.value)
    console.log(description.value)
    console.log(imageUrl.value)
    console.log(categoryId.value)
  }


}


