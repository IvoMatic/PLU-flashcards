import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rightList: Product[] = [];
  currentProduct: Product;
  allProducts: Product[];
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.getProducts().subscribe(v=>{
      this.allProducts=v;
      this.shuffle();
    });
    
  }

  shuffle() {
    this.currentProduct = this.allProducts[Math.floor(Math.random() * this.allProducts.length)];
  }

  right() {
    const index = this.allProducts.indexOf(this.currentProduct, 0);
    if (index > -1) {
    this.rightList = this.allProducts.splice(index, 1);
    }
    console.log(this.rightList);
    this.shuffle();
  }

  wrong() {
    this.shuffle();
  }

}
