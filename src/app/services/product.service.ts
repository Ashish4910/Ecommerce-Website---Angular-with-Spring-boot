import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }


  getProductList(theCategory:number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategory}`;


    return this.http.get<GetResponse>(searchUrl).pipe(map(response => response._embedded.products));
    // return this.http.get<GetResponse>(this.baseUrl).pipe(map(response => response._embedded.products));



  }
}
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}


