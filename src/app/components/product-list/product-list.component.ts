import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  product: Product[] = [];
  currentCategoryId: number = 1;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.productList();
    });

  }
// 352-(3.7*4)
// 3.7
// 4
// 23.8
// 328
  productList() {

    //check if 'id' parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      //get the 'id' param string . convert string to a number using the "+" symbol
      this.currentCategoryId= +this.route.snapshot.paramMap.get('id')!; // "!" its used for getting the id value its should not be null because above condition is satisfy that why its has enter the if statement

    }
    else{
      this.currentCategoryId= 1;
    }
    return this.productService.getProductList(this.currentCategoryId).subscribe(data => { this.product = data });
  }

}
