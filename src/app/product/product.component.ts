import {Component, OnInit} from '@angular/core';
import {Product} from "./product";
import {AlertifyService} from "../services/alertify.service";
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {AccountService} from "../services/account.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit{

  constructor(
    private alertifyService:AlertifyService,
    private productService:ProductService,
    private activatedRoot : ActivatedRoute,
    private accountService:AccountService,

  )
  {
  }
  title = "Ürün Listesi";
  filterText = "";
  // @ts-ignore
  products : Product[];

  ngOnInit() {
    this.activatedRoot.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data=> {
        this.products = data;
      })
    });
  }

  addToCart(){
  this.alertifyService.success("Sepete eklendi.")
  }

  isLoggedin(){
    return this.accountService.isLoggedIn();
  }

  deleteProduct(id : number) : void{
    this.productService.deleteProduct(id).subscribe(res =>
    {
      console.log(id);
      if(res){
        this.alertifyService.warning("Ürün Silindi");
      }
    }
    )
  }


}
