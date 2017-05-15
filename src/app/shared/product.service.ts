import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products : Product[] = [
      new Product(1,"第一个商品",1.99,2.5,"这是第一个商品，是我在学习实战创建的",["电子产品","电脑"]),
      new Product(2,"第二个商品",2.99,3.5,"这是第一个商品，是我在学习实战创建的",["电子产品"]),
      new Product(3,"第三个商品",3.99,1.5,"这是第一个商品，是我在学习实战创建的",["电子产品","电脑","配件"]),
      new Product(4,"第四个商品",4.99,3.5,"这是第一个商品，是我在学习实战创建的",["电子产品","电脑"]),
      new Product(5,"第五个商品",5.99,3.5,"这是第一个商品，是我在学习实战创建的",["电子产品","电脑"]),
      new Product(6,"第六个商品",6.99,3.5,"这是第一个商品，是我在学习实战创建的",["电子产品","电脑"]),
      new Product(7,"第七个商品",7.99,3.5,"这是第一个商品，是我在学习实战创建的",["电子产品","电脑"])
    ]
  private comments : Comment[] = [
    new Comment(1,1,"东西不错啊,哈哈哈1","2017-5-15 22:21:22",1,"刘伟"),
    new Comment(1,1,"东西不错啊,哈哈哈2","2017-5-15 22:22:22",3,"刘伟"),
    new Comment(3,1,"东西不错啊,哈哈哈3","2017-5-15 22:23:22",2,"刘伟"),
    new Comment(4,1,"东西不错啊,哈哈哈4","2017-5-15 22:24:22",4,"刘伟"),
    new Comment(5,1,"东西不错啊,哈哈哈5","2017-5-15 22:22:22",5,"刘伟")
  ]
  constructor() {}

  getProducts():Product[]{
    return this.products;
  }
  getProduct(id:Number) : Product{
    return this.products.find((product) => product.id ==id);
  }
  getCommentsForProductId(id:Number):Comment[]{
    return this.comments.filter((comment:Comment) => comment.productId == id);
  }
}

export  class  Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categpries:Array<string>
  ){

  }
}
export class Comment{
  constructor(
    public id:number,
    public productId:number,
    public content:string,
    public timestamp:string,
    public rating:number,
    public user:string
  ){
  }
}
