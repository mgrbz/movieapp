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

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }

  ngOnInit(): void {
  }

  

}
