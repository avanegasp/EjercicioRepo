import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { 
	FormControl,
	FormGroup,
	Validators,
	FormArray,
	FormBuilder
} from '@angular/forms';

import { Product } from '../models/product';
import { ProductType } from '../models/product-type';
import { Brand } from '../models/brand';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {
	public product: any;
	private productId: number;
	public waitingForProduct: boolean = false;
	public showErrorMessage: boolean = false;
	public errorMessage: string = '';
	public waitingForProductTypes: boolean = false;
	public waitingForBrands: boolean = false;
	public waitingForUpdateProduct: boolean = false;
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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
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
  	this.productId = Number(this.activatedRoute.snapshot.paramMap.get('productId'));	
		this.productForm = this.fb.group({
			id: ['', Validators.required],
			name: ['', Validators.required],
			image: ['', Validators.required],
			description: ['', Validators.required],
			stage: ['', Validators.required],
			petTypeId: ['0', Validators.required],
			productTypeId: ['0', Validators.required],
			brandId: ['0', Validators.required],
			sizes: this.fb.array([])
		});
		this.getProductTypes();
		this.getBrands();
		this.getProduct(this.productId);
  }

  getProduct(productId: number): void {
  	this.waitingForProduct = true;
    this.productsService.getProduct(productId)
      .subscribe(product => {
      	this.product = product;
      	this.setProductForm(this.product);
      	this.waitingForProduct = false;
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

	getProductTypes() {
		this.waitingForProductTypes = true;
		this.productsService.getAllProductTypes()
			.subscribe((data) => {
				this.productTypes = data;
				this.waitingForProductTypes = false;
			});
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

	setProductForm(product: any): void {
		let productSizes = [];
		for(var i=0; i < product.product_sizes.length; i++) {
			productSizes.push(
				this.fb.group({
					id: [product.product_sizes[i].id],
		  		sku: [product.product_sizes[i].sku, Validators.required],
					size: [product.product_sizes[i].size, Validators.required],
					price: [product.product_sizes[i].price, Validators.required],
					inStock: [product.product_sizes[i].in_stock],
					tax: [product.product_sizes[i].tax, Validators.required],
					destroy: [ false ]
	  		})
			);
		}
		let productObject: any = {
			id: product.id,
			name: product.name,
			image: product.image,
			description: product.description,
			stage: product.stage,
			petTypeId: product.pet_type_id,
			productTypeId: product.product_type_id,
			brandId: product.brand_id
		}
		this.productForm.patchValue(productObject);
		this.productForm.setControl('sizes', this.fb.array(productSizes));
	}

	petTypeSelected(selectedPetTypeId: number) {
		this.updateProductTypes(selectedPetTypeId);
	}

	addSize() {
    const control = <FormArray>this.productForm.get('sizes');
    control.push(
    	this.fb.group({
					id: [''],
		  		sku: ['', Validators.required],
					size: ['', Validators.required],
					price: ['', Validators.required],
					inStock: [false],
					tax: ['', Validators.required],
					destroy: [ false ]
	  		})
    );
	}

	removeSize(index: number) {
    const control = <FormArray>this.productForm.get('sizes');
    if (control.at(index).get('id').value) {
    	control.at(index).patchValue({ destroy: true });
		} else {
			control.removeAt(index);	
		}
		control.markAsDirty();
	}

	sizeToDelete(index: number) {
		const control = <FormArray>this.productForm.get('sizes');
		return control.at(index).get('destroy').value;
	}

	onSubmit() {
		this.waitingForUpdateProduct = true;
		this.productsService.updateProduct(this.productForm.value)
			.subscribe(
				(response) => {
					this.waitingForUpdateProduct = false;	
					this.router.navigate(['/products/' + response.id ]);
				},
				(error) => {
					this.showErrorMessage = true;
					this.waitingForUpdateProduct = false;
     			this.errorMessage = JSON.stringify(error.error);
				});
	}

}
