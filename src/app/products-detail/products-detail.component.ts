import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
	product: Product;
	productId: number;
	waitingForProduct: boolean = false;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  	this.productId = Number(this.activatedRoute.snapshot.paramMap.get('productId'));
  	this.getProduct(this.productId);
  }

  getProduct(productId: number): void {
  	this.waitingForProduct = true;
    this.productsService.getProduct(productId)
      .subscribe(product => {
      	this.product = product;
      	this.waitingForProduct = false;
      });
  }

  deleteProduct(product: Product): void {
    if(confirm("¿Eliminar " + product.name + "?")) {
      this.productsService.deleteProduct(product.id)
        .subscribe(
        (response) => {
          this.router.navigate(['/products', { }]);
        },
        (error) => {
        });
    }
  }
}
