import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}products/`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}products/${id}/`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}categories/`);
  }

  getCategory(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}categories/${id}/`);
  }

  getProductsByCategory(categoryId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}categories/${categoryId}/products/`);
  }
}

