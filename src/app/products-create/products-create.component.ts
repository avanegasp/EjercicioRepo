import { Component, OnInit } from '@angular/core';
import { 
	FormControl,
	FormGroup,
	Validators,
	FormArray,
	FormBuilder
} from '@angular/forms';
import { AngularTokenService } from 'angular-token';
import { Router } from '@angular/router';

import { ProductType } from '../models/product-type';
import { Brand } from '../models/brand';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit {
	public showErrorMessage: boolean = false;
	public errorMessage: string = '';
	public waitingForProductTypes: boolean = false;
	public waitingForBrands: boolean = false;
	public waitingForCreateProduct: boolean = false;
	public productForm: FormGroup;
	// TODO: get data from api
	public petTypes = [
		{ id: 1, name: 'Canino', image: 'https://s3.us-east-2.amazonaws.com/perri-dev/pet-types/perro.png' },
  	{ id: 2, name: 'Felino', image: 'https://s3.us-east-2.amazonaws.com/perri-dev/pet-types/gato.png' }
	];
	public productTypes: ProductType[] = [];
	public brands: Brand[] = []; 

  constructor(
  	private productsService: ProductsService,
  	private fb: FormBuilder,
  	private router: Router,
  ) { }

  // form helpers
  get name() { return this.productForm.get('name'); }
	get image() { return this.productForm.get('image'); }
	get description() { return this.productForm.get('description'); }
	get stage() { return this.productForm.get('stage'); }
	get petTypeId() { return this.productForm.get('petTypeId'); }
	get productTypeId() { return this.productForm.get('productTypeId'); }
	get brandId() { return this.productForm.get('brandId'); }
	get sizes() { return this.productForm.get('sizes') as FormArray; }

	ngOnInit() {
		this.getBrands();	
		this.productForm = this.fb.group({
			name: ['', Validators.required],
			image: ['', Validators.required],
			description: ['', Validators.required],
			stage: ['', Validators.required],
			petTypeId: ['0', Validators.required],
			productTypeId: ['0', Validators.required],
			brandId: ['0', Validators.required],
			sizes: this.fb.array([
				this.initSizes(),
			])
		});
  }

  initSizes() {
  	return this.fb.group({
  		sku: ['', Validators.required],
			size: ['', Validators.required],
			price: ['', Validators.required],
			inStock: [ false ],
			tax: ['', Validators.required]
  	})
  }

  addSize() {
    const control = <FormArray>this.productForm.get('sizes');
    control.push(this.initSizes());
	}

	removeSize(index: number) {
    const control = <FormArray>this.productForm.get('sizes');
    control.removeAt(index);
	}

	petTypeSelected(selectedPetTypeId: number) {
		this.updateProductTypes(selectedPetTypeId);
	}

	updateProductTypes(petTypeId) {
		this.waitingForProductTypes = true;
		let currentProductType = this.productTypeId.value;
		this.productsService.getProductTypes(petTypeId)
			.subscribe((data) => {
				this.productTypes = data;
				this.productForm.patchValue({ 'productTypeId': currentProductType });
				this.waitingForProductTypes = false;
			});
	}

	getBrands() {
		this.waitingForBrands = true;
		this.productsService.getBrands()
			.subscribe((data) => {
				this.brands = data;
				this.waitingForBrands = false;	
			});
	}

	onSubmit() {
		this.waitingForCreateProduct = true;
		this.productsService.createProduct(this.productForm.value)
			.subscribe(
				(response) => {
					this.waitingForCreateProduct = false;	
					this.router.navigate(['/products/' + response.id ]);
				},
				(error) => {
					this.showErrorMessage = true;
					this.waitingForCreateProduct = false;
     			this.errorMessage = JSON.stringify(error.error);
				});
	}

}
