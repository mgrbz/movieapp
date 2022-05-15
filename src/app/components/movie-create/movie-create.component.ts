import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AlertifyService } from "src/services/alertify.service";
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
  constructor(
    private movieCreateService: MovieCreateService,
    private categoryService: CategoryService,
    private router: Router,
    private alertify: AlertifyService
    ){}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createMovie(title: any, description: any, imageUrl: any, categoryId: any ) {
    const imageExtention = ["jpeg","jpg","png"];

    if(title.value === '' || description.value === '' || imageUrl.value === '' || categoryId.value === '-1' ){
      this.alertify.error('Tüm Alanları Doldurmanız gereklemtedir!');
      return;
    }

    if(title.value.length < 5) {
      this.alertify.error('Title çin min 5 karakter girmelisiniz!');
      return;
    }

    if(description.value.length < 10 || description.value.length > 50){
      this.alertify.error('Description alanı min 10 max 50 karakter olmalıdır');
      return;
    }
    
    const imageType = imageUrl.value.split('.').pop();
    if(imageExtention.indexOf(imageType) === -1){
      this.alertify.error('resim uzantınız doğru olmalıdır');
      return;
    }





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


