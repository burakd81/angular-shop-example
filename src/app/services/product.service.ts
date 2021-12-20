import { Injectable } from '@angular/core';
import {Product} from "../product/product";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";//componentten alındı eklendi
import {Observable, throwError} from "rxjs";
import {tap,catchError} from "rxjs/operators";

@Injectable() //global olmadığından root silindi
export class ProductService {


  constructor(
    private http:HttpClient //componentten alındı eklendi
  ) { }
  path="http://localhost:3000/products";


  getProducts(categoryId:any):Observable<Product[]>{
    let newPath=this.path;
    if(categoryId){
      newPath+="?categoryId="+categoryId
    }
    return this.http.get<Product[]>(newPath).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
    /*subscribe(data=>{
      this.products=data //gelen datayı products içine atıyoruz
    }); datanın içinden belli bir kısmı almak için veya başka işlemler için burayı siliyoruz.  */
  }

  addProduct(product:Product):Observable<Product[]>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token',
      })
    }
    return this.http.post<Product[]>(this.path,product,httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


   handleError(err:HttpErrorResponse) {
    let errorMessage="";
    if(err.error instanceof ErrorEvent){
        errorMessage="Bir hata oluştu"+err.error.message;
      }else{
      errorMessage="Sistemsel bir hata"
    }
    return throwError(errorMessage);
  }
}
