import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/types/category';
import { CategoryRepository } from 'src/types/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: ICategory[];
  categoryRepository: CategoryRepository;
  selectedCategory: ICategory | null;
  displayAll: boolean;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
    this.selectedCategory = null;
    this.displayAll = true;
  }

  ngOnInit(): void {
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
