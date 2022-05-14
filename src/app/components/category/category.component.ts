import { Component, OnInit } from '@angular/core';
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
  selectedCategory: ICategory | null;
  displayAll: boolean;

  constructor(private categoryService: CategoryService) {
    this.selectedCategory = null;
    this.displayAll = true;
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => this.categories = data);
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
