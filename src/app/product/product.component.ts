import { Component, OnInit } from '@angular/core';
import {Product} from "./product";
import {AlertifyService} from "../services/alertify.service";
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(
    private alertify:AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
  ) { }
  filterText="";
  title="Ürün Listesi";
  products !: Product[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products=data;
      })
    })

  }
    addToCard(product:string | any){
      this.alertify.success(product.name+" eklendi");
    }
}
