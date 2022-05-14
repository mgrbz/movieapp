import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/services/category.service';
import { ICategory } from 'src/types/category';
import { CategoryRepository } from 'src/types/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  categories: ICategory[] = [];
  selectedCategory: ICategory | null = null;
  displayAll: boolean = true;

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute) {

    this.selectedCategory = null;
    this.displayAll = true;
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;

      this.activatedRoute.params.subscribe(param => {
        let categoryIndex = window.location.href.indexOf('category/')
        let categoryId = Number(window.location.href.slice(categoryIndex + 9, categoryIndex +10));
        this.selectedCategory  = categoryId !== -1 ? this.categories[categoryId] : null; 
        this.displayAll = this.selectedCategory == null ? true : false; 
      });

    });



  }

  onSelectCategory($event: any, category?: ICategory) {
    if(category){
      this.displayAll = false;
      this.selectedCategory = category;
    } else {
      this.displayAll = true;
      this.selectedCategory = null;
    }
  }

  

}
