import { Component, OnInit } from '@angular/core';
import { Tool } from '../../../_models/tool';
import { ToolService } from '../../../services/tool/tool.service';
import { CategoryService } from '../../../services/category/category.service';
import { Category } from '../../../_models/category';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{
  categories: Category[];
  constructor(private categoryService: CategoryService) {
    this.categories = [];
  }
ngOnInit(): void {
  this.getAllCategories();
}
  getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (response: Category[]) => {
        this.categories = response;
      }, error: (err) => {
        console.error('Error fetching tools ', err);
      }, complete: () => {
        console.log('Categories fetching complete.');
      }
    });
  }

}
