import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularTokenService } from 'angular-token';

import { Product } from '../models/product';
import { ProductType } from '../models/product-type';
import { Brand } from '../models/brand';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private tokenService: AngularTokenService,
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      this.tokenService.tokenOptions.apiBase + '/products/'
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(
      this.tokenService.tokenOptions.apiBase + /products/ + id
    );
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(
      this.tokenService.tokenOptions.apiBase + '/products/' + id
    );
  }

  createProduct(newProduct: any): Observable<any> {
    let new_product_sizes_attributes = [];
    for (let i=0; i < newProduct.sizes.length; i++) {
      new_product_sizes_attributes.push({
        sku: newProduct.sizes[i].sku,
        in_stock: newProduct.sizes[i].inStock,
        price: newProduct.sizes[i].price,
        size: newProduct.sizes[i].size,
        tax: newProduct.sizes[i].tax
      })
    }
    let new_product = {
      name: newProduct.name,
      image: newProduct.image,
      description: newProduct.description,
      stage: newProduct.stage,
      pet_type_id: newProduct.petTypeId,
      product_type_id: newProduct.productTypeId,
      brand_id: newProduct.brandId,
      product_sizes_attributes: new_product_sizes_attributes
    }
    return this.http.post<any>(
      this.tokenService.tokenOptions.apiBase + /products/,
      new_product
    );
  }

  updateProduct(updatedProduct: any): Observable<any> {
    let updated_product_sizes_attributes = [];
    for (let i=0; i < updatedProduct.sizes.length; i++) {
      updated_product_sizes_attributes.push({
        id: updatedProduct.sizes[i].id,
        sku: updatedProduct.sizes[i].sku,
        in_stock: updatedProduct.sizes[i].inStock,
        price: updatedProduct.sizes[i].price,
        size: updatedProduct.sizes[i].size,
        tax: updatedProduct.sizes[i].tax,
        _destroy: updatedProduct.sizes[i].destroy
      })
    }
    let updated_product = {
      id: updatedProduct.id,
      name: updatedProduct.name,
      image: updatedProduct.image,
      description: updatedProduct.description,
      stage: updatedProduct.stage,
      pet_type_id: updatedProduct.petTypeId,
      product_type_id: updatedProduct.productTypeId,
      brand_id: updatedProduct.brandId,
      product_sizes_attributes: updated_product_sizes_attributes
    }
    return this.http.put<any>(
      this.tokenService.tokenOptions.apiBase + /products/ + updatedProduct.id,
      updated_product
    );
  }

  getAllProductTypes(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(
      this.tokenService.tokenOptions.apiBase + '/product_types/', {}
    );
  }

  getProductTypes(petTypeId: number): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(
      this.tokenService.tokenOptions.apiBase + '/product_types/', {
        params: new HttpParams().set('pet_type_id', String(petTypeId))
    });
  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<ProductType[]>(
      this.tokenService.tokenOptions.apiBase + '/brands/'
    );
  }
}
