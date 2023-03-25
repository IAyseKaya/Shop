import { Injectable } from '@angular/core';
import {Product} from "../product/product";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {AccountService} from "./account.service";
@Injectable()
export class ProductService {

  constructor( private http:HttpClient, private accountService : AccountService) {}
  path = "http://localhost:3000/products";
  getProducts(categoryId: number):Observable<Product[]>{
    let newPath = this.path;
    if(categoryId){
      newPath = newPath +  "?categoryId=" + categoryId;
    }
    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log()),
      catchError(this.handleError)
    );
  }
  addProduct(product:Product):Observable<Product>{
    console.log("1-productService"+product.name);
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Product>(this.path , product , httpOptions).pipe(
      tap(data =>  console.log()),
      catchError(this.handleError)
    );
  }



  deleteProduct(id : number) {
    return this.http.delete(this.path +`/${id}`)
  }

  handleError(err : HttpErrorResponse) {
    let errMessage ;
    if(err.error instanceof ErrorEvent){
      errMessage = "Error!" + err.error.message;
    }
    else{
      errMessage = "System had error!";
    }
    return throwError(errMessage);
  }


}
