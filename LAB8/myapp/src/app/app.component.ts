import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from './services/service.service';
import { Category } from './products/category.model';
import { Product } from './products/product.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';

  constructor(private service: ProductService) {}

  categories: Category[] = []
  products: Product[] = [];
  selectedCategory: Category | null = null;


  ngOnInit(): void {
    this.fetchCategories();

  }

  fetchCategories() {
    this.service.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
        console.log('Categories:', this.categories);
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.fetchProductsByCategory(category.id);
  }


  fetchProductsByCategory(categoryId: number) {
    this.service.getProductsByCategory(categoryId).subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
}
}
