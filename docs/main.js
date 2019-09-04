(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-token */ "./node_modules/angular-token/fesm5/angular-token.js");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-detail/products-detail.component */ "./src/app/products-detail/products-detail.component.ts");
/* harmony import */ var _products_create_products_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products-create/products-create.component */ "./src/app/products-create/products-create.component.ts");
/* harmony import */ var _products_edit_products_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-edit/products-edit.component */ "./src/app/products-edit/products-edit.component.ts");









var routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'sign-in', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"], canActivate: [angular_token__WEBPACK_IMPORTED_MODULE_3__["AngularTokenService"]] },
    { path: 'products/:productId', component: _products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductsDetailComponent"], canActivate: [angular_token__WEBPACK_IMPORTED_MODULE_3__["AngularTokenService"]] },
    { path: 'products-create', component: _products_create_products_create_component__WEBPACK_IMPORTED_MODULE_7__["ProductsCreateComponent"], canActivate: [angular_token__WEBPACK_IMPORTED_MODULE_3__["AngularTokenService"]] },
    { path: 'products-edit/:productId', component: _products_edit_products_edit_component__WEBPACK_IMPORTED_MODULE_8__["ProductsEditComponent"], canActivate: [angular_token__WEBPACK_IMPORTED_MODULE_3__["AngularTokenService"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-header></app-header>\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin-top: 120px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvd29ya3NwYWNlL3BlcnJpLXdlYi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuXHRtYXJnaW4tdG9wOiAxMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'perri-web';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-token */ "./node_modules/angular-token/fesm5/angular-token.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products-detail/products-detail.component */ "./src/app/products-detail/products-detail.component.ts");
/* harmony import */ var _products_create_products_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products-create/products-create.component */ "./src/app/products-create/products-create.component.ts");
/* harmony import */ var _products_edit_products_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./products-edit/products-edit.component */ "./src/app/products-edit/products-edit.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
                _products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_13__["ProductsDetailComponent"],
                _products_create_products_create_component__WEBPACK_IMPORTED_MODULE_14__["ProductsCreateComponent"],
                _products_edit_products_edit_component__WEBPACK_IMPORTED_MODULE_15__["ProductsEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                angular_token__WEBPACK_IMPORTED_MODULE_6__["AngularTokenModule"].forRoot({
                    apiBase: 'https://perriappbackend.herokuapp.com',
                    signInRedirect: 'sign-in' // TODO: move to env
                })
            ],
            providers: [
                angular_token__WEBPACK_IMPORTED_MODULE_6__["AngularTokenModule"],
                _services_products_service__WEBPACK_IMPORTED_MODULE_12__["ProductsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n  \t<img src=\"assets/images/logo.png\" height=\"70\" alt=\"\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n    \t<li class=\"nav-item\" *ngIf=\"tokenService.userSignedIn()\">\n        <a class=\"nav-link\" href=\"\" routerLink=\"products\">\n          Productos\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"tokenService.userSignedIn()\">\n      \t<button \n      \t\tclass=\"nav-link btn btn-sm btn-outline-danger text-danger my-sm-0\"\n      \t\t(click)=\"logout()\"\n      \t\t>\n      \t\tSalir\n      \t</button>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-token */ "./node_modules/angular-token/fesm5/angular-token.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.tokenService.signOut().subscribe(function (res) { return _this.router.navigate(['/sign-in', {}]); }, function (error) { return console.error(error); });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_token__WEBPACK_IMPORTED_MODULE_2__["AngularTokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/products-create/products-create.component.html":
/*!****************************************************************!*\
  !*** ./src/app/products-create/products-create.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-10 m-auto\">\n\t\t\t<h2 class=\"text-center\">Agregar producto</h2>\n\t\t\t<form [formGroup]=\"productForm\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Nombre</label>\n\t\t\t\t\t<input\n\t\t\t\t\t\tid=\"name\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tname=\"name\"\n\t\t\t\t\t\tformControlName=\"name\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\t/>\n\t\t\t\t\t<small\n\t\t\t\t\t \t*ngIf=\"name.invalid && (name.dirty || name.touched)\"\n\t\t\t\t\t\tid=\"emailErrors\"\n\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"name.errors.required\">\n\t\t\t\t\t    Ingresa un nombre.\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div *ngIf=\"name.errors.unique\">\n\t\t\t\t\t    Este nombre ya existe.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</small>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Imagen</label>\n\t\t\t\t\t<input\n\t\t\t\t\t\tid=\"image\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\ttype=\"url\"\n\t\t\t\t\t\tname=\"image\"\n\t\t\t\t\t\tformControlName=\"image\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\t/>\n\t\t\t\t\t<small\n\t\t\t\t\t \t*ngIf=\"image.invalid && (image.dirty || image.touched)\"\n\t\t\t\t\t\tid=\"imageErrors\"\n\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"image.errors.required\">\n\t\t\t\t\t    Ingresa una imagen.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</small>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Descripción</label>\n\t\t\t\t\t<textarea\n\t\t\t\t\t\tid=\"description\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\ttype=\"textarea\"\n\t\t\t\t\t\trows=\"7\"\n\t\t\t\t\t\tname=\"description\"\n\t\t\t\t\t\tformControlName=\"description\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\t>\n\t\t\t\t\t</textarea>\n\t\t\t\t\t<small\n\t\t\t\t\t \t*ngIf=\"description.invalid && (description.dirty || description.touched)\"\n\t\t\t\t\t\tid=\"descriptionErrors\"\n\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"description.errors.required\">\n\t\t\t\t\t    Ingresa una descripción.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</small>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Etapa</label>\n\t\t\t\t\t<input\n\t\t\t\t\t\tid=\"stage\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\ttype=\"url\"\n\t\t\t\t\t\tname=\"stage\"\n\t\t\t\t\t\tformControlName=\"stage\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\t/>\n\t\t\t\t\t<small\n\t\t\t\t\t \t*ngIf=\"stage.invalid && (stage.dirty || stage.touched)\"\n\t\t\t\t\t\tid=\"stageErrors\"\n\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"stage.errors.required\">\n\t\t\t\t\t    Ingresa una etapa.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</small>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t    <label for=\"petTypeId\">Tipo de mascota</label>\n\t\t\t    <select\n\t\t\t    \tclass=\"form-control\"\n\t\t\t    \tid=\"petTypeId\"\n\t\t\t    \tname=\"petTypeId\"\n\t\t\t    \tformControlName=\"petTypeId\"\n\t\t\t    \t(change)=\"petTypeSelected($event.target.value)\"\n\t\t\t    \t>\n\t\t\t    \t<option value=\"0\" disabled>Elige un tipo de mascota</option>\n\t\t\t    \t<option [value]=\"petType.id\" *ngFor=\"let petType of petTypes\">\n\t\t\t    \t\t{{petType.name}}\n\t\t\t    \t</option>\n\t\t\t    </select>\n\t\t\t    <small\n\t\t\t\t\t \t*ngIf=\"petTypeId.invalid && (petTypeId.dirty || petTypeId.touched)\"\n\t\t\t\t\t\tid=\"petTypeIdErrors\"\n\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"petTypeId.errors.required\">\n\t\t\t\t\t    Elige un tipo de mascota.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</small>\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"productTypeId\">Tipo de producto</label>\n\t\t\t    <select class=\"form-control\" *ngIf=\"waitingForProductTypes\">\n\t\t\t    \t<option selected>cargando...</option>\n\t\t\t    </select>\n\t\t\t    <select\n\t\t\t     \t*ngIf=\"!waitingForProductTypes\" \n\t\t\t    \tclass=\"form-control\"\n\t\t\t    \tid=\"productTypeId\"\n\t\t\t    \tname=\"productTypeId\"\n\t\t\t    \tformControlName=\"productTypeId\"\n\t\t\t    \t>\n\t\t\t    \t<option value=\"0\" disabled>Elige un tipo de producto</option>\n\t\t\t    \t<option [value]=\"productType.id\" *ngFor=\"let productType of productTypes\">\n\t\t\t    \t\t{{productType.name}}\n\t\t\t    \t</option>\n\t\t\t    </select>\n\t\t\t    <small\n\t\t\t\t\t \t*ngIf=\"productTypeId.invalid && (productTypeId.dirty || productTypeId.touched)\"\n\t\t\t\t\t\tid=\"productTypeIdErrors\"\n\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"productTypeId.errors.required\">\n\t\t\t\t\t    Elige un tipo de producto.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</small>\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"brandId\">Marca</label>\n\t\t\t    <select class=\"form-control\" *ngIf=\"waitingForBrands\">\n\t\t\t    \t<option selected>cargando...</option>\n\t\t\t    </select>\n\t\t\t    <select\n\t\t\t     \t*ngIf=\"!waitingForBrands\" \n\t\t\t    \tclass=\"form-control\"\n\t\t\t    \tid=\"brandId\"\n\t\t\t    \tname=\"brandId\"\n\t\t\t    \tformControlName=\"brandId\"\n\t\t\t    \t>\n\t\t\t    \t<option value=\"0\" disabled>Elige una marca</option>\n\t\t\t    \t<option [value]=\"brand.id\" *ngFor=\"let brand of brands\">\n\t\t\t    \t\t{{brand.name}}\n\t\t\t    \t</option>\n\t\t\t    </select>\n\t\t\t    <small\n\t\t\t\t\t \t*ngIf=\"brandId.invalid && (brandId.dirty || brandId.touched)\"\n\t\t\t\t\t\tid=\"brandIdErrors\"\n\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"brandId.errors.required\">\n\t\t\t\t\t    Elige una marca.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</small>\n\t\t\t  </div>\n\n\t\t\t\t<div formArrayName=\"sizes\">\n\t\t\t\t\t<h3>Presentaciones</h3>\n\t      \t<div *ngFor=\"let size of sizes.controls; let i=index\">\n\t          <div [formGroupName]=\"i\" class=\"form-row align-items-center\">\n\t\t\t\t\t\t\t<div class=\"form-group col-md-2\">\n\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\tid=\"sku\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\ttype=\"url\"\n\t\t\t\t\t\t\t\t\tname=\"sku\"\n\t\t\t\t\t\t\t\t\tformControlName=\"sku\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"sku\"\n\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t<small\n\t\t\t\t\t\t\t\t \t*ngIf=\"sizes.controls[i].controls.sku.invalid && (sizes.controls[i].controls.sku.dirty || sizes.controls[i].controls.sku.touched)\"\n\t\t\t\t\t\t\t\t\tid=\"skuErrors\"\n\t\t\t\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"sizes.controls[i].controls.sku.errors.required\">\n\t\t\t\t\t\t\t\t    Ingresa un sku.\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-3\">\n\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\tid=\"size\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\tname=\"size\"\n\t\t\t\t\t\t\t\t\tformControlName=\"size\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"tamaño\"\n\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t<small\n\t\t\t\t\t\t\t\t \t*ngIf=\"sizes.controls[i].controls.size.invalid && (sizes.controls[i].controls.size.dirty || sizes.controls[i].controls.size.touched)\"\n\t\t\t\t\t\t\t\t\tid=\"sizeErrors\"\n\t\t\t\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"sizes.controls[i].controls.size.errors.required\">\n\t\t\t\t\t\t\t\t    Ingresa un tamaño.\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-2\">\n\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t  <input\n\t\t\t\t\t\t\t\t  \tid=\"inStock\"\n\t\t\t\t\t\t\t\t  \tclass=\"form-check-input\"\n\t\t\t\t\t\t\t\t  \ttype=\"checkbox\"\n\t\t\t\t\t\t\t\t  \tname=\"inStock\"\n\t\t\t\t\t\t\t\t  \tformControlName=\"inStock\"\n\t\t\t\t\t\t\t\t  \t>\n\t\t\t\t\t\t\t\t  <label class=\"form-check-label\" for=\"inStock\">\n\t\t\t\t\t\t\t\t    En Stock\n\t\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-2\">\n\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\tid=\"price\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\tname=\"price\"\n\t\t\t\t\t\t\t\t\tformControlName=\"price\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"precio\"\n\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t<small\n\t\t\t\t\t\t\t\t \t*ngIf=\"sizes.controls[i].controls.price.invalid && (sizes.controls[i].controls.price.dirty || sizes.controls[i].controls.price.touched)\"\n\t\t\t\t\t\t\t\t\tid=\"priceErrors\"\n\t\t\t\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"sizes.controls[i].controls.price.errors.required\">\n\t\t\t\t\t\t\t\t    Ingresa un precio.\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-2\">\n\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\tid=\"tax\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\tname=\"tax\"\n\t\t\t\t\t\t\t\t\tformControlName=\"tax\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"IVA (%)\"\n\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t<small\n\t\t\t\t\t\t\t\t \t*ngIf=\"sizes.controls[i].controls.tax.invalid && (sizes.controls[i].controls.tax.dirty || sizes.controls[i].controls.tax.touched)\"\n\t\t\t\t\t\t\t\t\tid=\"skuErrors\"\n\t\t\t\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"sizes.controls[i].controls.tax.errors.required\">\n\t\t\t\t\t\t\t\t    Ingresa el porcentaje de IVA.\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group col-md-1\">\n\t              <button\n\t               \t(click)=\"removeSize(i)\"\n\t               \tclass=\"btn btn-sm btn-link text-danger\"\n\t              \t>\n\t              \tquitar\n\t              </button> \n            \t</div>\n\t          </div>\n\t      \t</div>\n\t      \t<button\n           \t(click)=\"addSize()\"\n           \tclass=\"btn btn-sm btn-link\"\n          \t>\n          \tagregar presentación\n\t        </button>\n\t\t\t\t</div>\n\n\t\t\t\t<p>\n\t\t\t\t  <ngb-alert *ngIf=\"showErrorMessage\" (close)=\"showErrorMessage = false\">\n\t\t\t\t    <strong>¡Error!</strong> {{ errorMessage }}\n\t\t\t\t  </ngb-alert>\n\t\t\t\t</p>\n\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"form-group mt-3 col-3\" *ngIf=\"waitingForCreateProduct\">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t class=\"btn btn-primary\"\n\t\t\t\t\t\t [disabled]=\"true\"\n\t\t\t\t\t\t  >\n\t\t\t\t\t\t\t...\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group mt-3 col-3\" *ngIf=\"!waitingForCreateProduct\">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t type=\"submit\"\n\t\t\t\t\t\t class=\"btn btn-primary\"\n\t\t\t\t\t\t (click)=\"onSubmit()\"\n\t\t\t\t\t\t [disabled]=\"!productForm.valid\"\n\t\t\t\t\t\t  >\n\t\t\t\t\t\t\tCrear producto\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group mt-3 col-7\">\n\t\t\t\t\t\t<a href=\"\" routerLink=\"/products/\" class=\"btn btn-link text-secondary\">cancelar</a>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</form>\n\t\t</div>\n\t</div>\t\n</div>"

/***/ }),

/***/ "./src/app/products-create/products-create.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/products-create/products-create.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzLWNyZWF0ZS9wcm9kdWN0cy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/products-create/products-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/products-create/products-create.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCreateComponent", function() { return ProductsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");





var ProductsCreateComponent = /** @class */ (function () {
    function ProductsCreateComponent(productsService, fb, router) {
        this.productsService = productsService;
        this.fb = fb;
        this.router = router;
        this.showErrorMessage = false;
        this.errorMessage = '';
        this.waitingForProductTypes = false;
        this.waitingForBrands = false;
        this.waitingForCreateProduct = false;
        // TODO: get data from api
        this.petTypes = [
            { id: 1, name: 'Canino', image: 'https://s3.us-east-2.amazonaws.com/perri-dev/pet-types/perro.png' },
            { id: 2, name: 'Felino', image: 'https://s3.us-east-2.amazonaws.com/perri-dev/pet-types/gato.png' }
        ];
        this.productTypes = [];
        this.brands = [];
    }
    Object.defineProperty(ProductsCreateComponent.prototype, "name", {
        // form helpers
        get: function () { return this.productForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsCreateComponent.prototype, "image", {
        get: function () { return this.productForm.get('image'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsCreateComponent.prototype, "description", {
        get: function () { return this.productForm.get('description'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsCreateComponent.prototype, "stage", {
        get: function () { return this.productForm.get('stage'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsCreateComponent.prototype, "petTypeId", {
        get: function () { return this.productForm.get('petTypeId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsCreateComponent.prototype, "productTypeId", {
        get: function () { return this.productForm.get('productTypeId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsCreateComponent.prototype, "brandId", {
        get: function () { return this.productForm.get('brandId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsCreateComponent.prototype, "sizes", {
        get: function () { return this.productForm.get('sizes'); },
        enumerable: true,
        configurable: true
    });
    ProductsCreateComponent.prototype.ngOnInit = function () {
        this.getBrands();
        this.productForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            stage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            petTypeId: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            productTypeId: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brandId: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sizes: this.fb.array([
                this.initSizes(),
            ])
        });
    };
    ProductsCreateComponent.prototype.initSizes = function () {
        return this.fb.group({
            sku: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            size: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            inStock: [false],
            tax: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ProductsCreateComponent.prototype.addSize = function () {
        var control = this.productForm.get('sizes');
        control.push(this.initSizes());
    };
    ProductsCreateComponent.prototype.removeSize = function (index) {
        var control = this.productForm.get('sizes');
        control.removeAt(index);
    };
    ProductsCreateComponent.prototype.petTypeSelected = function (selectedPetTypeId) {
        this.updateProductTypes(selectedPetTypeId);
    };
    ProductsCreateComponent.prototype.updateProductTypes = function (petTypeId) {
        var _this = this;
        this.waitingForProductTypes = true;
        var currentProductType = this.productTypeId.value;
        this.productsService.getProductTypes(petTypeId)
            .subscribe(function (data) {
            _this.productTypes = data;
            _this.productForm.patchValue({ 'productTypeId': currentProductType });
            _this.waitingForProductTypes = false;
        });
    };
    ProductsCreateComponent.prototype.getBrands = function () {
        var _this = this;
        this.waitingForBrands = true;
        this.productsService.getBrands()
            .subscribe(function (data) {
            _this.brands = data;
            _this.waitingForBrands = false;
        });
    };
    ProductsCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.waitingForCreateProduct = true;
        this.productsService.createProduct(this.productForm.value)
            .subscribe(function (response) {
            _this.waitingForCreateProduct = false;
            _this.router.navigate(['/products/' + response.id]);
        }, function (error) {
            _this.showErrorMessage = true;
            _this.waitingForCreateProduct = false;
            _this.errorMessage = JSON.stringify(error.error);
        });
    };
    ProductsCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-create',
            template: __webpack_require__(/*! ./products-create.component.html */ "./src/app/products-create/products-create.component.html"),
            styles: [__webpack_require__(/*! ./products-create.component.scss */ "./src/app/products-create/products-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductsCreateComponent);
    return ProductsCreateComponent;
}());



/***/ }),

/***/ "./src/app/products-detail/products-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/products-detail/products-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n\t<div *ngIf=\"waitingForProduct\" class=\"row mt-4\">\n\t\t<div class=\"col\">\n\t\t\t<p class=\"text-center\">Cargando producto...</p>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"!waitingForProduct\" class=\"row mt-5\">\n\t\t<div class=\"col text-center\">\n\t\t\t<img src=\"{{ product.image }}\" height=\"350px\" class=\"img-responsive\">\n\t\t</div>\n\t\t<div class=\"col\">\n\t\t\t<h1>{{ product.name }}</h1>\n\t\t\t<p><strong>{{ product.brand }}</strong> · {{ product.pet_type }} {{ product.stage }}</p>\n\t\t\t<p>\n\t\t\t\t<span\n\t\t\t\t *ngIf=\"!product.in_stock\"\n\t\t\t\t class=\"badge badge-danger mx-1\"\n\t\t\t\t >\n\t\t\t\t\tNo stock\n\t\t\t\t</span>\n\t\t\t\t<span\n\t\t\t\t *ngIf=\"product.in_stock\"\n\t\t\t\t class=\"badge badge-success mx-1\"\n\t\t\t\t >\n\t\t\t\t\tEn stock\n\t\t\t\t</span>\n\t\t\t\t<span class=\"badge badge-secondary mx-1\">{{ product.product_type }}</span>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<a \n\t\t\t\t\thref=\"\"\n\t\t\t\t\trouterLink=\"/products-edit/{{ product.id }}\"\n\t\t\t\t\tclass=\"text-primary btn btn-link\"\n\t\t\t\t\t>\n\t\t\t\t\teditar\n\t\t\t\t</a>\n\t\t\t\t<button\n\t\t\t\t\t(click)=\"deleteProduct(product)\"\n\t\t\t\t\tclass=\"btn btn-link text-danger\"\n\t\t\t\t\t>\n\t\t\t\t\teliminar\n\t\t\t\t</button>\n\t\t\t</p>\n\t\t\t<p>{{ product.description }}</p>\n\t\t\t<div class=\"table-responsive\">\n        <table class=\"table table-sm\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">Tamaño</th>\n              <th colspan=\"1\"></th>\n              <th scope=\"col\">SKU</th>\n              <th scope=\"col\">Precio</th>\n              <th scope=\"col\">IVA</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let product_size of product.product_sizes\">\n              <td>{{ product_size.size }}</td>\n              <td>\n                <p *ngIf=\"!product_size.in_stock\"><span class=\"badge badge-danger\">No stock</span></p>\n                <p *ngIf=\"product_size.in_stock\"><span class=\"badge badge-success\">En stock</span></p>\n              </td>\n              <td>{{ product_size.sku }}</td>\n              <td>${{ product_size.price | number : '1.0-0' }}</td>\n              <td>{{ product_size.tax }}%</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <a href=\"\" routerLink=\"/products/\" class=\"btn btn-link text-secondary\">regresar</a>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/products-detail/products-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/products-detail/products-detail.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzLWRldGFpbC9wcm9kdWN0cy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/products-detail/products-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/products-detail/products-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDetailComponent", function() { return ProductsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");





var ProductsDetailComponent = /** @class */ (function () {
    function ProductsDetailComponent(productsService, router, activatedRoute) {
        this.productsService = productsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.waitingForProduct = false;
    }
    ProductsDetailComponent.prototype.ngOnInit = function () {
        this.productId = Number(this.activatedRoute.snapshot.paramMap.get('productId'));
        this.getProduct(this.productId);
    };
    ProductsDetailComponent.prototype.getProduct = function (productId) {
        var _this = this;
        this.waitingForProduct = true;
        this.productsService.getProduct(productId)
            .subscribe(function (product) {
            _this.product = product;
            _this.waitingForProduct = false;
        });
    };
    ProductsDetailComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        if (confirm("¿Eliminar " + product.name + "?")) {
            this.productsService.deleteProduct(product.id)
                .subscribe(function (response) {
                _this.router.navigate(['/products', {}]);
            }, function (error) {
            });
        }
    };
    ProductsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-detail',
            template: __webpack_require__(/*! ./products-detail.component.html */ "./src/app/products-detail/products-detail.component.html"),
            styles: [__webpack_require__(/*! ./products-detail.component.scss */ "./src/app/products-detail/products-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductsDetailComponent);
    return ProductsDetailComponent;
}());



/***/ }),

/***/ "./src/app/products-edit/products-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/products-edit/products-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-10 m-auto\">\n\t\t\t<h2 class=\"text-center\">Actualizar producto</h2>\n\t\t\t<p\n\t\t\t\t*ngIf=\"waitingForProduct\"\n\t\t\t\tclass=\"text-center mt-5\"\n\t\t\t\t>\n\t\t\t\tCargando producto...\n\t\t\t</p>\n\t\t\t\n\t\t\t<form [formGroup]=\"productForm\" *ngIf=\"!waitingForProduct\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Nombre</label>\n\t\t\t\t\t<input\n\t\t\t\t\t\tid=\"name\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tname=\"name\"\n\t\t\t\t\t\tformControlName=\"name\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\t/>\n\t\t\t\t\t<small\n\t\t\t\t\t \t*ngIf=\"name.invalid && (name.dirty || name.touched)\"\n\t\t\t\t\t\tid=\"emailErrors\"\n\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"name.errors.required\">\n\t\t\t\t\t    Ingresa un nombre.\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div *ngIf=\"name.errors.unique\">\n\t\t\t\t\t    Este nombre ya existe.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</small>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Imagen</label>\n\t\t\t\t\t<input\n\t\t\t\t\t\tid=\"image\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\ttype=\"url\"\n\t\t\t\t\t\tname=\"image\"\n\t\t\t\t\t\tformControlName=\"image\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\t/>\n\t\t\t\t\t<small\n\t\t\t\t\t \t*ngIf=\"image.invalid && (image.dirty || image.touched)\"\n\t\t\t\t\t\tid=\"imageErrors\"\n\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"image.errors.required\">\n\t\t\t\t\t    Ingresa una imagen.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</small>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Descripción</label>\n\t\t\t\t\t<textarea\n\t\t\t\t\t\tid=\"description\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\ttype=\"textarea\"\n\t\t\t\t\t\trows=\"7\"\n\t\t\t\t\t\tname=\"description\"\n\t\t\t\t\t\tformControlName=\"description\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\t>\n\t\t\t\t\t</textarea>\n\t\t\t\t\t<small\n\t\t\t\t\t \t*ngIf=\"description.invalid && (description.dirty || description.touched)\"\n\t\t\t\t\t\tid=\"descriptionErrors\"\n\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"description.errors.required\">\n\t\t\t\t\t    Ingresa una descripción.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</small>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Etapa</label>\n\t\t\t\t\t<input\n\t\t\t\t\t\tid=\"stage\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\ttype=\"url\"\n\t\t\t\t\t\tname=\"stage\"\n\t\t\t\t\t\tformControlName=\"stage\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\t/>\n\t\t\t\t\t<small\n\t\t\t\t\t \t*ngIf=\"stage.invalid && (stage.dirty || stage.touched)\"\n\t\t\t\t\t\tid=\"stageErrors\"\n\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"stage.errors.required\">\n\t\t\t\t\t    Ingresa una etapa.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</small>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t    <label for=\"petTypeId\">Tipo de mascota</label>\n\t\t\t    <select\n\t\t\t    \tclass=\"form-control\"\n\t\t\t    \tid=\"petTypeId\"\n\t\t\t    \tname=\"petTypeId\"\n\t\t\t    \tformControlName=\"petTypeId\"\n\t\t\t    \t(change)=\"petTypeSelected($event.target.value)\"\n\t\t\t    \t>\n\t\t\t    \t<option value=\"0\" disabled>Elige un tipo de mascota</option>\n\t\t\t    \t<option [value]=\"petType.id\" *ngFor=\"let petType of petTypes\">\n\t\t\t    \t\t{{petType.name}}\n\t\t\t    \t</option>\n\t\t\t    </select>\n\t\t\t    <small\n\t\t\t\t\t \t*ngIf=\"petTypeId.invalid && (petTypeId.dirty || petTypeId.touched)\"\n\t\t\t\t\t\tid=\"petTypeIdErrors\"\n\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"petTypeId.errors.required\">\n\t\t\t\t\t    Elige un tipo de mascota.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</small>\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"productTypeId\">Tipo de producto</label>\n\t\t\t    <select class=\"form-control\" *ngIf=\"waitingForProductTypes\">\n\t\t\t    \t<option selected>cargando...</option>\n\t\t\t    </select>\n\t\t\t    <select\n\t\t\t     \t*ngIf=\"!waitingForProductTypes\" \n\t\t\t    \tclass=\"form-control\"\n\t\t\t    \tid=\"productTypeId\"\n\t\t\t    \tname=\"productTypeId\"\n\t\t\t    \tformControlName=\"productTypeId\"\n\t\t\t    \t>\n\t\t\t    \t<option value=\"0\" disabled>Elige un tipo de producto</option>\n\t\t\t    \t<option [value]=\"productType.id\" *ngFor=\"let productType of productTypes\">\n\t\t\t    \t\t{{productType.name}}\n\t\t\t    \t</option>\n\t\t\t    </select>\n\t\t\t    <small\n\t\t\t\t\t \t*ngIf=\"productTypeId.invalid && (productTypeId.dirty || productTypeId.touched)\"\n\t\t\t\t\t\tid=\"productTypeIdErrors\"\n\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"productTypeId.errors.required\">\n\t\t\t\t\t    Elige un tipo de producto.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</small>\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"brandId\">Marca</label>\n\t\t\t    <select class=\"form-control\" *ngIf=\"waitingForBrands\">\n\t\t\t    \t<option selected>cargando...</option>\n\t\t\t    </select>\n\t\t\t    <select\n\t\t\t     \t*ngIf=\"!waitingForBrands\" \n\t\t\t    \tclass=\"form-control\"\n\t\t\t    \tid=\"brandId\"\n\t\t\t    \tname=\"brandId\"\n\t\t\t    \tformControlName=\"brandId\"\n\t\t\t    \t>\n\t\t\t    \t<option value=\"0\" disabled>Elige una marca</option>\n\t\t\t    \t<option [value]=\"brand.id\" *ngFor=\"let brand of brands\">\n\t\t\t    \t\t{{brand.name}}\n\t\t\t    \t</option>\n\t\t\t    </select>\n\t\t\t    <small\n\t\t\t\t\t \t*ngIf=\"brandId.invalid && (brandId.dirty || brandId.touched)\"\n\t\t\t\t\t\tid=\"brandIdErrors\"\n\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"brandId.errors.required\">\n\t\t\t\t\t    Elige una marca.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</small>\n\t\t\t  </div>\n\n\t\t\t\t<div formArrayName=\"sizes\">\n\t\t\t\t\t<h3>Presentaciones</h3>\n\t      \t<div *ngFor=\"let size of sizes.controls; let i=index\">\n\t          <div\n\t          \t*ngIf=\"!sizeToDelete(i)\" \n\t          \t[formGroupName]=\"i\"\n\t          \tclass=\"form-row align-items-center\"\n\t          \t>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-2\">\n\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\tid=\"sku\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\ttype=\"url\"\n\t\t\t\t\t\t\t\t\tname=\"sku\"\n\t\t\t\t\t\t\t\t\tformControlName=\"sku\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"sku\"\n\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t<small\n\t\t\t\t\t\t\t\t \t*ngIf=\"sizes.controls[i].controls.sku.invalid && (sizes.controls[i].controls.sku.dirty || sizes.controls[i].controls.sku.touched)\"\n\t\t\t\t\t\t\t\t\tid=\"skuErrors\"\n\t\t\t\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"sizes.controls[i].controls.sku.errors.required\">\n\t\t\t\t\t\t\t\t    Ingresa un sku.\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-3\">\n\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\tid=\"size\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\tname=\"size\"\n\t\t\t\t\t\t\t\t\tformControlName=\"size\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"tamaño\"\n\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t<small\n\t\t\t\t\t\t\t\t \t*ngIf=\"sizes.controls[i].controls.size.invalid && (sizes.controls[i].controls.size.dirty || sizes.controls[i].controls.size.touched)\"\n\t\t\t\t\t\t\t\t\tid=\"sizeErrors\"\n\t\t\t\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"sizes.controls[i].controls.size.errors.required\">\n\t\t\t\t\t\t\t\t    Ingresa un tamaño.\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-2\">\n\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t  <input\n\t\t\t\t\t\t\t\t  \tid=\"inStock\"\n\t\t\t\t\t\t\t\t  \tclass=\"form-check-input\"\n\t\t\t\t\t\t\t\t  \ttype=\"checkbox\"\n\t\t\t\t\t\t\t\t  \tname=\"inStock\"\n\t\t\t\t\t\t\t\t  \tformControlName=\"inStock\"\n\t\t\t\t\t\t\t\t  \t>\n\t\t\t\t\t\t\t\t  <label class=\"form-check-label\" for=\"inStock\">\n\t\t\t\t\t\t\t\t    En Stock\n\t\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-2\">\n\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\tid=\"price\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\tname=\"price\"\n\t\t\t\t\t\t\t\t\tformControlName=\"price\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"precio\"\n\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t<small\n\t\t\t\t\t\t\t\t \t*ngIf=\"sizes.controls[i].controls.price.invalid && (sizes.controls[i].controls.price.dirty || sizes.controls[i].controls.price.touched)\"\n\t\t\t\t\t\t\t\t\tid=\"priceErrors\"\n\t\t\t\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"sizes.controls[i].controls.price.errors.required\">\n\t\t\t\t\t\t\t\t    Ingresa un precio.\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-2\">\n\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\tid=\"tax\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\tname=\"tax\"\n\t\t\t\t\t\t\t\t\tformControlName=\"tax\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"IVA (%)\"\n\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t<small\n\t\t\t\t\t\t\t\t \t*ngIf=\"sizes.controls[i].controls.tax.invalid && (sizes.controls[i].controls.tax.dirty || sizes.controls[i].controls.tax.touched)\"\n\t\t\t\t\t\t\t\t\tid=\"skuErrors\"\n\t\t\t\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"sizes.controls[i].controls.tax.errors.required\">\n\t\t\t\t\t\t\t\t    Ingresa el porcentaje de IVA.\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group col-md-1\">\n\t              <button\n\t               \t(click)=\"removeSize(i)\"\n\t               \tclass=\"btn btn-sm btn-link text-danger\"\n\t              \t>\n\t              \tquitar\n\t              </button> \n            \t</div>\n\t          </div>\n\t      \t</div>\n\t      \t<button\n           \t(click)=\"addSize()\"\n           \tclass=\"btn btn-sm btn-link\"\n          \t>\n          \tagregar presentación\n\t        </button>\n\t\t\t\t</div>\n\n\t\t\t\t<p>\n\t\t\t\t  <ngb-alert *ngIf=\"showErrorMessage\" (close)=\"showErrorMessage = false\">\n\t\t\t\t    <strong>¡Error!</strong> {{ errorMessage }}\n\t\t\t\t  </ngb-alert>\n\t\t\t\t</p>\n\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"form-group mt-3 col-2\" *ngIf=\"waitingForUpdateProduct\">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t class=\"btn btn-primary\"\n\t\t\t\t\t\t [disabled]=\"true\"\n\t\t\t\t\t\t  >\n\t\t\t\t\t\t\t...\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group mt-3 col-2\" *ngIf=\"!waitingForUpdateProduct\">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t type=\"submit\"\n\t\t\t\t\t\t class=\"btn btn-primary\"\n\t\t\t\t\t\t (click)=\"onSubmit()\"\n\t\t\t\t\t\t [disabled]=\"!productForm.valid || productForm.pristine\"\n\t\t\t\t\t\t  >\n\t\t\t\t\t\t\tGuardar\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group mt-3 col-8\">\n\t\t\t\t\t\t<a href=\"\" routerLink=\"/products/\" class=\"btn btn-link text-secondary\">cancelar</a>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</form>\n\t\t</div>\n\t</div>\t\n</div>"

/***/ }),

/***/ "./src/app/products-edit/products-edit.component.scss":
/*!************************************************************!*\
  !*** ./src/app/products-edit/products-edit.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzLWVkaXQvcHJvZHVjdHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/products-edit/products-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/products-edit/products-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsEditComponent", function() { return ProductsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");






var ProductsEditComponent = /** @class */ (function () {
    function ProductsEditComponent(productsService, router, activatedRoute, fb) {
        this.productsService = productsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.waitingForProduct = false;
        this.showErrorMessage = false;
        this.errorMessage = '';
        this.waitingForProductTypes = false;
        this.waitingForBrands = false;
        this.waitingForUpdateProduct = false;
        // TODO: get data from api
        this.petTypes = [
            { id: 1, name: 'Canino', image: 'https://s3.us-east-2.amazonaws.com/perri-dev/pet-types/perro.png' },
            { id: 2, name: 'Felino', image: 'https://s3.us-east-2.amazonaws.com/perri-dev/pet-types/gato.png' }
        ];
        this.productTypes = [];
        this.brands = [];
    }
    Object.defineProperty(ProductsEditComponent.prototype, "name", {
        // form helpers
        get: function () { return this.productForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsEditComponent.prototype, "image", {
        get: function () { return this.productForm.get('image'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsEditComponent.prototype, "description", {
        get: function () { return this.productForm.get('description'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsEditComponent.prototype, "stage", {
        get: function () { return this.productForm.get('stage'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsEditComponent.prototype, "petTypeId", {
        get: function () { return this.productForm.get('petTypeId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsEditComponent.prototype, "productTypeId", {
        get: function () { return this.productForm.get('productTypeId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsEditComponent.prototype, "brandId", {
        get: function () { return this.productForm.get('brandId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsEditComponent.prototype, "sizes", {
        get: function () { return this.productForm.get('sizes'); },
        enumerable: true,
        configurable: true
    });
    ProductsEditComponent.prototype.ngOnInit = function () {
        this.productId = Number(this.activatedRoute.snapshot.paramMap.get('productId'));
        this.productForm = this.fb.group({
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            stage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            petTypeId: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            productTypeId: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            brandId: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            sizes: this.fb.array([])
        });
        this.getProductTypes();
        this.getBrands();
        this.getProduct(this.productId);
    };
    ProductsEditComponent.prototype.getProduct = function (productId) {
        var _this = this;
        this.waitingForProduct = true;
        this.productsService.getProduct(productId)
            .subscribe(function (product) {
            _this.product = product;
            _this.setProductForm(_this.product);
            _this.waitingForProduct = false;
        });
    };
    ProductsEditComponent.prototype.getBrands = function () {
        var _this = this;
        this.waitingForBrands = true;
        this.productsService.getBrands()
            .subscribe(function (data) {
            _this.brands = data;
            _this.waitingForBrands = false;
        });
    };
    ProductsEditComponent.prototype.getProductTypes = function () {
        var _this = this;
        this.waitingForProductTypes = true;
        this.productsService.getAllProductTypes()
            .subscribe(function (data) {
            _this.productTypes = data;
            _this.waitingForProductTypes = false;
        });
    };
    ProductsEditComponent.prototype.updateProductTypes = function (petTypeId) {
        var _this = this;
        this.waitingForProductTypes = true;
        var currentProductType = this.productTypeId.value;
        this.productsService.getProductTypes(petTypeId)
            .subscribe(function (data) {
            _this.productTypes = data;
            _this.productForm.patchValue({ 'productTypeId': currentProductType });
            _this.waitingForProductTypes = false;
        });
    };
    ProductsEditComponent.prototype.setProductForm = function (product) {
        var productSizes = [];
        for (var i = 0; i < product.product_sizes.length; i++) {
            productSizes.push(this.fb.group({
                id: [product.product_sizes[i].id],
                sku: [product.product_sizes[i].sku, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                size: [product.product_sizes[i].size, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                price: [product.product_sizes[i].price, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                inStock: [product.product_sizes[i].in_stock],
                tax: [product.product_sizes[i].tax, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                destroy: [false]
            }));
        }
        var productObject = {
            id: product.id,
            name: product.name,
            image: product.image,
            description: product.description,
            stage: product.stage,
            petTypeId: product.pet_type_id,
            productTypeId: product.product_type_id,
            brandId: product.brand_id
        };
        this.productForm.patchValue(productObject);
        this.productForm.setControl('sizes', this.fb.array(productSizes));
    };
    ProductsEditComponent.prototype.petTypeSelected = function (selectedPetTypeId) {
        this.updateProductTypes(selectedPetTypeId);
    };
    ProductsEditComponent.prototype.addSize = function () {
        var control = this.productForm.get('sizes');
        control.push(this.fb.group({
            id: [''],
            sku: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            size: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            inStock: [false],
            tax: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            destroy: [false]
        }));
    };
    ProductsEditComponent.prototype.removeSize = function (index) {
        var control = this.productForm.get('sizes');
        if (control.at(index).get('id').value) {
            control.at(index).patchValue({ destroy: true });
        }
        else {
            control.removeAt(index);
        }
        control.markAsDirty();
    };
    ProductsEditComponent.prototype.sizeToDelete = function (index) {
        var control = this.productForm.get('sizes');
        return control.at(index).get('destroy').value;
    };
    ProductsEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.waitingForUpdateProduct = true;
        this.productsService.updateProduct(this.productForm.value)
            .subscribe(function (response) {
            _this.waitingForUpdateProduct = false;
            _this.router.navigate(['/products/' + response.id]);
        }, function (error) {
            _this.showErrorMessage = true;
            _this.waitingForUpdateProduct = false;
            _this.errorMessage = JSON.stringify(error.error);
        });
    };
    ProductsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-edit',
            template: __webpack_require__(/*! ./products-edit.component.html */ "./src/app/products-edit/products-edit.component.html"),
            styles: [__webpack_require__(/*! ./products-edit.component.scss */ "./src/app/products-edit/products-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ProductsEditComponent);
    return ProductsEditComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col m-auto\">\n\t\t\t<h2 class=\"text-center\">Productos</h2>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row mt-3\">\n    <div class=\"col\">\n      <a href=\"\" routerLink=\"/products-create\">agregar producto</a>\n    </div>\n\t</div>\n\n\t<div *ngIf=\"waitingForProducts\" class=\"row mt-4\">\n\t\t<div class=\"col\">\n\t\t\t<p class=\"text-center\">Cargando productos...</p>\n\t\t</div>\n\t</div>\n\n  <div *ngIf=\"!waitingForProducts\" class=\"row mt-4\">\n    <div class=\"col\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-sm\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">Nombre</th>\n              <th colspan=\"1\"></th>\n              <th scope=\"col\">Tipo de mascota</th>\n              <th scope=\"col\">Tipo de producto</th>\n              <th scope=\"col\">Marca</th>\n              <th colspan=\"1\"></th>\n              <th colspan=\"1\"></th>\n              <th colspan=\"1\"></th>\n            </tr>\n          </thead>\n\n          <tbody>\n              <tr *ngFor=\"let product of products\">\n                <td>{{ product.name }}</td>\n                <td>\n                  <p *ngIf=\"!product.in_stock\"><span class=\"badge badge-danger\">No stock</span></p>\n                  <p *ngIf=\"product.in_stock\"><span class=\"badge badge-success\">En stock</span></p>\n                </td>\n                <td>{{ product.pet_type }}</td>\n                <td>{{ product.product_type }}</td>\n                <td>{{ product.brand }}</td>\n                <td><a href=\"\" routerLink=\"/products/{{ product.id }}\">ver</a></td>\n                <td><a href=\"\" routerLink=\"/products-edit/{{ product.id }}\">editar</a></td>\n                <td><a href=\"\" routerLink=\"\" (click)=\"deleteProduct(product)\"  class=\"text-danger\">eliminar</a></td>\n              </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productsService, router) {
        this.productsService = productsService;
        this.router = router;
        this.waitingForProducts = false;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.waitingForProducts = true;
        this.productsService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
            _this.waitingForProducts = false;
        });
    };
    ProductsComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        if (confirm("¿Eliminar " + product.name + "?")) {
            this.productsService.deleteProduct(product.id)
                .subscribe(function (data) {
                _this.products = _this.products.filter(function (p) { return p !== product; });
            });
        }
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-token */ "./node_modules/angular-token/fesm5/angular-token.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ProductsService = /** @class */ (function () {
    function ProductsService(tokenService, http) {
        this.tokenService = tokenService;
        this.http = http;
    }
    ProductsService.prototype.getProducts = function () {
        return this.http.get(this.tokenService.tokenOptions.apiBase + '/products/');
    };
    ProductsService.prototype.getProduct = function (id) {
        return this.http.get(this.tokenService.tokenOptions.apiBase + /products/ + id);
    };
    ProductsService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.tokenService.tokenOptions.apiBase + '/products/' + id);
    };
    ProductsService.prototype.createProduct = function (newProduct) {
        var new_product_sizes_attributes = [];
        for (var i = 0; i < newProduct.sizes.length; i++) {
            new_product_sizes_attributes.push({
                sku: newProduct.sizes[i].sku,
                in_stock: newProduct.sizes[i].inStock,
                price: newProduct.sizes[i].price,
                size: newProduct.sizes[i].size,
                tax: newProduct.sizes[i].tax
            });
        }
        var new_product = {
            name: newProduct.name,
            image: newProduct.image,
            description: newProduct.description,
            stage: newProduct.stage,
            pet_type_id: newProduct.petTypeId,
            product_type_id: newProduct.productTypeId,
            brand_id: newProduct.brandId,
            product_sizes_attributes: new_product_sizes_attributes
        };
        return this.http.post(this.tokenService.tokenOptions.apiBase + /products/, new_product);
    };
    ProductsService.prototype.updateProduct = function (updatedProduct) {
        var updated_product_sizes_attributes = [];
        for (var i = 0; i < updatedProduct.sizes.length; i++) {
            updated_product_sizes_attributes.push({
                id: updatedProduct.sizes[i].id,
                sku: updatedProduct.sizes[i].sku,
                in_stock: updatedProduct.sizes[i].inStock,
                price: updatedProduct.sizes[i].price,
                size: updatedProduct.sizes[i].size,
                tax: updatedProduct.sizes[i].tax,
                _destroy: updatedProduct.sizes[i].destroy
            });
        }
        var updated_product = {
            id: updatedProduct.id,
            name: updatedProduct.name,
            image: updatedProduct.image,
            description: updatedProduct.description,
            stage: updatedProduct.stage,
            pet_type_id: updatedProduct.petTypeId,
            product_type_id: updatedProduct.productTypeId,
            brand_id: updatedProduct.brandId,
            product_sizes_attributes: updated_product_sizes_attributes
        };
        return this.http.put(this.tokenService.tokenOptions.apiBase + /products/ + updatedProduct.id, updated_product);
    };
    ProductsService.prototype.getAllProductTypes = function () {
        return this.http.get(this.tokenService.tokenOptions.apiBase + '/product_types/', {});
    };
    ProductsService.prototype.getProductTypes = function (petTypeId) {
        return this.http.get(this.tokenService.tokenOptions.apiBase + '/product_types/', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('pet_type_id', String(petTypeId))
        });
    };
    ProductsService.prototype.getBrands = function () {
        return this.http.get(this.tokenService.tokenOptions.apiBase + '/brands/');
    };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_token__WEBPACK_IMPORTED_MODULE_3__["AngularTokenService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-6 m-auto\">\n\t\t\t<div class=\"card card-body mt-5\">\n\t\t\t\t<h2 class=\"text-center\">Iniciar sesión</h2>\n\t\t\t\t<p>\n\t\t\t\t  <ngb-alert *ngIf=\"showErrorMessage\" (close)=\"showErrorMessage = false\">\n\t\t\t\t    <strong>¡Error!</strong> {{ errorMessage }}\n\t\t\t\t  </ngb-alert>\n\t\t\t\t</p>\n\t\t\t\t<form [formGroup]=\"signInForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Correo</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tid=\"login\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\ttype=\"login\"\n\t\t\t\t\t\t\tname=\"login\"\n\t\t\t\t\t\t\tformControlName=\"login\"\n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t<small\n\t\t\t\t\t\t \t*ngIf=\"login.invalid && (login.dirty || login.touched)\"\n\t\t\t\t\t\t\tid=\"emailErrors\"\n\t\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div *ngIf=\"login.errors.required\">\n\t\t\t\t\t\t    Ingresa un correo.\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div *ngIf=\"login.errors.email\">\n\t\t\t\t\t\t    Ingresa un correo válido.\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</small>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tid=\"password\"\n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\tname=\"password\"\n\t\t\t\t\t\t\tformControlName=\"password\"\n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t<small\n\t\t\t\t\t\t \t*ngIf=\"password.invalid && (password.dirty || password.touched)\"\n\t\t\t\t\t\t\tid=\"passwordErrors\"\n\t\t\t\t\t\t\tclass=\"form-text text-danger\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div *ngIf=\"password.errors.required\">\n\t\t\t\t\t\t    Ingresa una contraseña.\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</small>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t type=\"submit\"\n\t\t\t\t\t\t class=\"btn btn-primary\"\n\t\t\t\t\t\t [disabled]=\"!signInForm.valid\"\n\t\t\t\t\t\t  >\n\t\t\t\t\t\t\tIniciar Sesión\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n</div>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.scss":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-token */ "./node_modules/angular-token/fesm5/angular-token.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignInComponent = /** @class */ (function () {
    function SignInComponent(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
        this.showErrorMessage = false;
        this.errorMessage = '';
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    SignInComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(SignInComponent.prototype, "login", {
        // form helpers
        get: function () { return this.signInForm.get('login'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignInComponent.prototype, "password", {
        get: function () { return this.signInForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        this.showErrorMessage = false;
        this.tokenService.signIn(this.signInForm.value).subscribe(function (res) {
            if (res.body.data.is_admin) {
                _this.router.navigate(['/products', {}]);
            }
            else {
                _this.showErrorMessage = true;
                _this.errorMessage = "Acceso no permitido";
                _this.signInForm.reset();
                _this.tokenService.signOut();
            }
        }, function (error) {
            _this.showErrorMessage = true;
            _this.errorMessage = error.error.errors.join(', ');
            _this.signInForm.reset();
        });
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/sign-in/sign-in.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_token__WEBPACK_IMPORTED_MODULE_3__["AngularTokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/workspace/perri-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map