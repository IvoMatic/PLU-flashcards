import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  allProducts: Product[];
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.getProducts().subscribe(v=>this.allProducts=v);
  }

}
