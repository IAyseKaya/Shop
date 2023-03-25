import { Injectable } from '@angular/core';
import {Category} from "../category/category";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Product} from "../product/product";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(
    private http:HttpClient, ) {}
  path = "http://localhost:3000/categories";
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.path).pipe(
      tap(data => console.log()),
      catchError(this.handleError)
    );
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
