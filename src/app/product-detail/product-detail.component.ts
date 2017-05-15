import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService,Comment, Product} from "../shared/product.service"
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : Product;
  comments:Comment[];
  private newComment:string = '';
  private newRaing:number = 5;
  private isCommentHidden:boolean =true;
  constructor(
    private routeInfo:ActivatedRoute,
    private productService:ProductService
  ) { }

  ngOnInit() {
    let productId=this.routeInfo.snapshot.params["productId"];
    this.product=this.productService.getProduct(productId);
    this.comments=this.productService.getCommentsForProductId(productId);
  }
  addComment(){
    let comment = new Comment(0,this.product.id,this.newComment,new Date().toISOString(),this.newRaing,'someOne');
    this.comments.unshift(comment);

    this.newRaing=5;
    this.newComment=null;
    this.isCommentHidden=true;

    let sum = this.comments.reduce((sum,comment) => sum+comment.rating,0);
    this.product.rating = sum/this.comments.length;
  }
}
