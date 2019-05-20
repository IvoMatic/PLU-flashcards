import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  URL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  postProduct(product: Product): Observable<Product> {
   return this.http.post<Product>(this.URL, product);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }

  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>(this.URL);
  }
}
