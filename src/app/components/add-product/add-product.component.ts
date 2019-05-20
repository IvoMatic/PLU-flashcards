import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Product } from 'src/app/Product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private rest: RestService, private location: Location) { }

  ngOnInit() {
  }

  addProduct(id: number, name: string) {
    const product: Product = new Product(id, name);
    this.rest.postProduct(product).subscribe();
    window.location.reload();
  }
}
