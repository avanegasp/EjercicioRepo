import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	products: Product[];
	waitingForProducts: boolean = false;

  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) { }

  ngOnInit() {
  	this.getProducts();
  }

  getProducts(): void {
  	this.waitingForProducts = true;
    this.productsService.getProducts()
      .subscribe(products => {
      	this.products = products;
      	this.waitingForProducts = false;
      });
  }

  deleteProduct(product: Product): void {
    if(confirm("¿Eliminar " + product.name + "?")) {
      this.productsService.deleteProduct(product.id)
        .subscribe( data => {
          this.products = this.products.filter(p => p !== product);
        });
    }
  }
}
