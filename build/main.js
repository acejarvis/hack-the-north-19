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



var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./app-shell/home/home.module */ "./src/app/app-shell/home/home.module.ts")).then(function (mod) { return mod.HomeModule; }); }
    },
    {
        path: 'grid',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./app-shell/grid/grid.module */ "./src/app/app-shell/grid/grid.module.ts")).then(function (mod) { return mod.GridModule; }); }
    },
    {
        path: 'list',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./app-shell/list/list.module */ "./src/app/app-shell/list/list.module.ts")).then(function (mod) { return mod.ListModule; }); }
    },
    {
        path: 'master-detail',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./app-shell/master-detail/master-detail.module */ "./src/app/app-shell/master-detail/master-detail.module.ts")).then(function (mod) { return mod.MasterDetailModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-shell/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/app-shell/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n  background-color: #1d1d1d;\r\n  padding-top: 2rem;\r\n  padding-bottom: 4rem;\r\n}\r\n  \r\n.title {\r\n  color: #fff;\r\n}\r\n  \r\n.description {\r\n  color: #fff;\r\n}\r\n  \r\n.footerlink,\r\n.footerlink:hover {\r\n  color: #fff;\r\n}\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xyXG59XHJcbiAgXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mb290ZXJsaW5rLFxyXG4uZm9vdGVybGluazpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/app-shell/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/app-shell/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row justify-content-around\">\r\n      <div class=\"col-8 col-md-5\">\r\n        <h5 class=\"title\">restaurantsMap</h5>\r\n        <p class=\"description\">\r\n          This is placeholder text. Your web app description goes here.\r\n        </p>\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <ul class=\"list-unstyled\">\r\n          <li>\r\n            <a class=\"footerlink\" href=\"/\">\r\n              Example Link\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a class=\"footerlink\" href=\"/\">\r\n              Example Link\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a class=\"footerlink\" href=\"/\">\r\n              Example Link\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app-shell/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/app-shell/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/app-shell/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/app-shell/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/grid/grid-box/grid-box.component.css":
/*!****************************************************************!*\
  !*** ./src/app/app-shell/grid/grid-box/grid-box.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9ncmlkL2dyaWQtYm94L2dyaWQtYm94LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app-shell/grid/grid-box/grid-box.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/app-shell/grid/grid-box/grid-box.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <img src=\"{{ image }}\" alt=\"Default Grey Box\" class=\"mb-3\" />\r\n  <h3>{{ header }}</h3>\r\n  <p>{{ description }}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-shell/grid/grid-box/grid-box.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/app-shell/grid/grid-box/grid-box.component.ts ***!
  \***************************************************************/
/*! exports provided: GridBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBoxComponent", function() { return GridBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridBoxComponent = /** @class */ (function () {
    function GridBoxComponent() {
    }
    GridBoxComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], GridBoxComponent.prototype, "key", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GridBoxComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GridBoxComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GridBoxComponent.prototype, "image", void 0);
    GridBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid-box',
            template: __webpack_require__(/*! ./grid-box.component.html */ "./src/app/app-shell/grid/grid-box/grid-box.component.html"),
            styles: [__webpack_require__(/*! ./grid-box.component.css */ "./src/app/app-shell/grid/grid-box/grid-box.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridBoxComponent);
    return GridBoxComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/grid/grid-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/app-shell/grid/grid-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: GridRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridRoutingModule", function() { return GridRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid.component */ "./src/app/app-shell/grid/grid.component.ts");




var routes = [
    {
        path: '',
        component: _grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"]
    }
];
var GridRoutingModule = /** @class */ (function () {
    function GridRoutingModule() {
    }
    GridRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GridRoutingModule);
    return GridRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-shell/grid/grid.component.css":
/*!***************************************************!*\
  !*** ./src/app/app-shell/grid/grid.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    background-color: #cecece;\r\n    padding-top: 7rem;\r\n    padding-bottom: 7rem;\r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL2dyaWQvZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAtc2hlbGwvZ3JpZC9ncmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XHJcbiAgICBwYWRkaW5nLXRvcDogN3JlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cmVtO1xyXG4gIH1cclxuICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/app-shell/grid/grid.component.html":
/*!****************************************************!*\
  !*** ./src/app/app-shell/grid/grid.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main id=\"mainContent\">\r\n  <div class=\"text-center header\">\r\n    <h1>restaurantsMap</h1>\r\n    <p>This is placeholder text. Your web app description goes here.</p>\r\n    <a\r\n      href=\"https://github.com/Microsoft/WebTemplateStudio\"\r\n      class=\"btn btn-primary my-2\"\r\n    >\r\n      Link to our Github\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center py-5\">\r\n      <h1>Bootstrap Grid Template</h1>\r\n    </div>\r\n    <div class=\"row justify-content-around text-center pb-5\">\r\n      <app-grid-box\r\n        class=\"col-4 p-5\"\r\n        *ngFor=\"let textAssets of gridTextAssets\"\r\n        [key]=\"textAssets.id\"\r\n        [header]=\"textAssets.title\"\r\n        [description]=\"textAssets.shortDescription\"\r\n        [image]=\"GreyBox\"\r\n      >\r\n      </app-grid-box>\r\n    </div>\r\n  </div>\r\n  <app-warning-message\r\n    *ngIf=\"WarningMessageOpen\"\r\n    [text]=\"WarningMessageText\"\r\n    (WarningMessageOpen)=\"handleWarningClose($event)\"\r\n  >\r\n  </app-warning-message>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/app-shell/grid/grid.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-shell/grid/grid.component.ts ***!
  \**************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _grid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.service */ "./src/app/app-shell/grid/grid.service.ts");



var GridComponent = /** @class */ (function () {
    function GridComponent(gridService) {
        this.gridService = gridService;
        this.GreyBox = __webpack_require__(/*! ../../../assets/GreyBox.svg */ "./src/assets/GreyBox.svg");
        this.WarningMessageText = 'Request to get grid text failed:';
        this.WarningMessageOpen = false;
        this.gridTextAssets = [
            {
                description: 'example1',
                header: 'example1',
                id: 0
            },
            {
                description: 'example2',
                header: 'example2',
                id: 1
            }
        ];
    }
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridService.getGridItems().subscribe(function (result) {
            _this.gridTextAssets = result;
        }, function (error) {
            _this.WarningMessageOpen = true;
            _this.WarningMessageText = "Request to get grid text failed: " + error;
        });
    };
    GridComponent.prototype.handleWarningClose = function (open) {
        this.WarningMessageOpen = open;
        this.WarningMessageText = '';
    };
    GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/app-shell/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.css */ "./src/app/app-shell/grid/grid.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_grid_service__WEBPACK_IMPORTED_MODULE_2__["GridService"]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/grid/grid.module.ts":
/*!***********************************************!*\
  !*** ./src/app/app-shell/grid/grid.module.ts ***!
  \***********************************************/
/*! exports provided: GridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid.component */ "./src/app/app-shell/grid/grid.component.ts");
/* harmony import */ var _grid_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-routing.module */ "./src/app/app-shell/grid/grid-routing.module.ts");
/* harmony import */ var _grid_box_grid_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-box/grid-box.component */ "./src/app/app-shell/grid/grid-box/grid-box.component.ts");
/* harmony import */ var _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/warning-message/warning-message.module */ "./src/app/shared/warning-message/warning-message.module.ts");







var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    GridModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"],
                _grid_box_grid_box_component__WEBPACK_IMPORTED_MODULE_5__["GridBoxComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_6__["WarningMessageModule"],
                _grid_routing_module__WEBPACK_IMPORTED_MODULE_4__["GridRoutingModule"]
            ]
        })
    ], GridModule);
    return GridModule;
}());



/***/ }),

/***/ "./src/app/app-shell/grid/grid.service.ts":
/*!************************************************!*\
  !*** ./src/app/app-shell/grid/grid.service.ts ***!
  \************************************************/
/*! exports provided: GridService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridService", function() { return GridService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var GridService = /** @class */ (function () {
    function GridService(http) {
        this.http = http;
        this.listUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint.grid;
    }
    GridService.prototype.getGridItems = function () {
        return this.http.get(this.listUrl);
    };
    GridService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GridService);
    return GridService;
}());



/***/ }),

/***/ "./src/app/app-shell/home/blank.component.css":
/*!****************************************************!*\
  !*** ./src/app/app-shell/home/blank.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9ob21lL2JsYW5rLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app-shell/home/blank.component.html":
/*!*****************************************************!*\
  !*** ./src/app/app-shell/home/blank.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main id=\"mainContent\"></main>\r\n"

/***/ }),

/***/ "./src/app/app-shell/home/blank.component.ts":
/*!***************************************************!*\
  !*** ./src/app/app-shell/home/blank.component.ts ***!
  \***************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    BlankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./src/app/app-shell/home/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.css */ "./src/app/app-shell/home/blank.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/home/home-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/app-shell/home/home-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank.component */ "./src/app/app-shell/home/blank.component.ts");




var routes = [
    {
        path: '',
        component: _blank_component__WEBPACK_IMPORTED_MODULE_3__["BlankComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-shell/home/home.module.ts":
/*!***********************************************!*\
  !*** ./src/app/app-shell/home/home.module.ts ***!
  \***********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank.component */ "./src/app/app-shell/home/blank.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/app-shell/home/home-routing.module.ts");





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _blank_component__WEBPACK_IMPORTED_MODULE_3__["BlankComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/app-shell/list/list-form/list-form.component.css":
/*!******************************************************************!*\
  !*** ./src/app/app-shell/list/list-form/list-form.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-11{\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL2xpc3QvbGlzdC1mb3JtL2xpc3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9saXN0L2xpc3QtZm9ybS9saXN0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtMTF7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app-shell/list/list-form/list-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/app-shell/list/list-form/list-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"listForm\" (ngSubmit)=\"onSubmit()\" class=\"input-group my-3\">\r\n  <div class=\"col-11\">\r\n    <input\r\n      id=\"content\"\r\n      class=\"form-control\"\r\n      placeholder=\"Add text here...\"\r\n      aria-label=\"Add text here...\"\r\n      formControlName=\"content\"\r\n      required\r\n    />\r\n    <ngb-alert type=\"danger\" *ngIf=\"content.invalid && content.dirty\">\r\n      <div *ngIf=\"content.errors.required\">\r\n        Input must be at least 1 character long.\r\n      </div>\r\n    </ngb-alert>\r\n  </div>\r\n  <span class=\"input-group-btn col-1\">\r\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"listForm.invalid\">\r\n      Submit\r\n    </button>\r\n  </span>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/app-shell/list/list-form/list-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/app-shell/list/list-form/list-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFormComponent", function() { return ListFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ListFormComponent = /** @class */ (function () {
    function ListFormComponent() {
        this.inputText = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ListFormComponent.prototype.ngOnInit = function () {
        this.listForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    Object.defineProperty(ListFormComponent.prototype, "content", {
        get: function () { return this.listForm.get('content'); },
        enumerable: true,
        configurable: true
    });
    ListFormComponent.prototype.onSubmit = function () {
        this.inputText.emit(this.listForm.get('content').value);
        this.listForm.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListFormComponent.prototype, "inputText", void 0);
    ListFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-form',
            template: __webpack_require__(/*! ./list-form.component.html */ "./src/app/app-shell/list/list-form/list-form.component.html"),
            styles: [__webpack_require__(/*! ./list-form.component.css */ "./src/app/app-shell/list/list-form/list-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListFormComponent);
    return ListFormComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/list/list-item/list-item.component.css":
/*!******************************************************************!*\
  !*** ./src/app/app-shell/list/list-item/list-item.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9saXN0L2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app-shell/list/list-item/list-item.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/app-shell/list/list-item/list-item.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-11\">\r\n    <p class=\"mt-3\">{{ text }}</p>\r\n  </div>\r\n  <div class=\"col-1\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"close py-2\"\r\n      data-dismiss=\"alert\"\r\n      aria-label=\"Close\"\r\n      (click)=\"onDeleteListItem()\"\r\n    >\r\n      <div aria-hidden=\"true\">&times;</div>\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-shell/list/list-item/list-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/app-shell/list/list-item/list-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListItemComponent = /** @class */ (function () {
    function ListItemComponent() {
        this.deleteText = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ListItemComponent.prototype.ngOnInit = function () {
    };
    ListItemComponent.prototype.onDeleteListItem = function () {
        this.deleteText.emit(this._id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ListItemComponent.prototype, "_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ListItemComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListItemComponent.prototype, "deleteText", void 0);
    ListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-item',
            template: __webpack_require__(/*! ./list-item.component.html */ "./src/app/app-shell/list/list-item/list-item.component.html"),
            styles: [__webpack_require__(/*! ./list-item.component.css */ "./src/app/app-shell/list/list-item/list-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListItemComponent);
    return ListItemComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/list/list-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/app-shell/list/list-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRoutingModule", function() { return ListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.component */ "./src/app/app-shell/list/list.component.ts");




var routes = [
    {
        path: '',
        component: _list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }
];
var ListRoutingModule = /** @class */ (function () {
    function ListRoutingModule() {
    }
    ListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ListRoutingModule);
    return ListRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-shell/list/list.component.css":
/*!***************************************************!*\
  !*** ./src/app/app-shell/list/list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app-shell/list/list.component.html":
/*!****************************************************!*\
  !*** ./src/app/app-shell/list/list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\" id=\"mainContent\">\r\n  <div class=\"row\">\r\n    <div class=\"col mt-5 p-0\">\r\n      <h3>Angular List Template</h3>\r\n    </div>\r\n    <div class=\"col-12 p-0\">\r\n      <app-list-form (inputText)=\"handleAddListItem($event)\"></app-list-form>\r\n    </div>\r\n    <app-list-item\r\n      class=\"col-12 mb-3 border\"\r\n      *ngFor=\"let listItem of listItems\"\r\n      [text]=\"listItem.text\"\r\n      [_id]=\"listItem._id\"\r\n      (deleteText)=\"handleDeleteListItem($event)\"\r\n    >\r\n    </app-list-item>\r\n\r\n    <app-warning-message\r\n      *ngIf=\"WarningMessageOpen\"\r\n      [text]=\"WarningMessageText\"\r\n      (WarningMessageOpen)=\"handleWarningClose($event)\"\r\n    ></app-warning-message>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/app-shell/list/list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-shell/list/list.component.ts ***!
  \**************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.service */ "./src/app/app-shell/list/list.service.ts");



var ListComponent = /** @class */ (function () {
    function ListComponent(listService) {
        this.listService = listService;
        this.listItems = [];
        this.WarningMessageText = 'Request to get list items failed:';
        this.WarningMessageOpen = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listService.getListItems().subscribe(function (response) {
            _this.listItems = response;
        }, function (error) {
            _this.WarningMessageOpen = true;
            _this.WarningMessageText = "Request to get list items failed: " + error;
        });
    };
    ListComponent.prototype.handleAddListItem = function (inputText) {
        var _this = this;
        this.listService.addListItem(inputText).subscribe(function (response) {
            _this.listItems.splice(0, 0, response);
        }, function (error) {
            _this.WarningMessageOpen = true;
            _this.WarningMessageText = "Request to add list item failed: " + error;
        });
    };
    ListComponent.prototype.handleDeleteListItem = function (id) {
        var _this = this;
        this.listService.deleteListItem(id).subscribe(function (response) {
            _this.listItems = _this.listItems.filter(function (item) { return item._id !== response._id; });
        }, function (error) {
            _this.WarningMessageOpen = true;
            _this.WarningMessageText = "Request to delete list item failed: " + error;
        });
    };
    ListComponent.prototype.handleWarningClose = function (open) {
        this.WarningMessageOpen = open;
        this.WarningMessageText = '';
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/app-shell/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/app-shell/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/list/list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/app-shell/list/list.module.ts ***!
  \***********************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.component */ "./src/app/app-shell/list/list.component.ts");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/app-shell/list/list-routing.module.ts");
/* harmony import */ var _list_form_list_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-form/list-form.component */ "./src/app/app-shell/list/list-form/list-form.component.ts");
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-item/list-item.component */ "./src/app/app-shell/list/list-item/list-item.component.ts");
/* harmony import */ var _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/warning-message/warning-message.module */ "./src/app/shared/warning-message/warning-message.module.ts");










var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    ListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _list_form_list_form_component__WEBPACK_IMPORTED_MODULE_7__["ListFormComponent"],
                _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_8__["ListItemComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlertModule"],
                _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_9__["WarningMessageModule"],
                _list_routing_module__WEBPACK_IMPORTED_MODULE_6__["ListRoutingModule"]
            ]
        })
    ], ListModule);
    return ListModule;
}());



/***/ }),

/***/ "./src/app/app-shell/list/list.service.ts":
/*!************************************************!*\
  !*** ./src/app/app-shell/list/list.service.ts ***!
  \************************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ListService = /** @class */ (function () {
    function ListService(http) {
        this.http = http;
        this.listUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint.list;
    }
    ListService.prototype.getListItems = function () {
        return this.http.get(this.listUrl);
    };
    ListService.prototype.addListItem = function (inputText) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var body = JSON.stringify({
            text: inputText
        });
        return this.http.post(this.listUrl, body, httpOptions);
    };
    ListService.prototype.deleteListItem = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint.list + "/" + id);
    };
    ListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ListService);
    return ListService;
}());



/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail-page/master-detail-page.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail-page/master-detail-page.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n  font-weight: 700;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.breadCrumbLink {\r\n  color: #025fce;\r\n}\r\n\r\n.heading {\r\n  background-color: #cecece;\r\n  padding-top: 18em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL21hc3Rlci1kZXRhaWwvbWFzdGVyLWRldGFpbC1wYWdlL21hc3Rlci1kZXRhaWwtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLXNoZWxsL21hc3Rlci1kZXRhaWwvbWFzdGVyLWRldGFpbC1wYWdlL21hc3Rlci1kZXRhaWwtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5icmVhZENydW1iTGluayB7XHJcbiAgY29sb3I6ICMwMjVmY2U7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xyXG4gIHBhZGRpbmctdG9wOiAxOGVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail-page/master-detail-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail-page/master-detail-page.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row heading\">\r\n  <div class=\"col\">\r\n    <h3 class=\"ml-3 mb-4\">{{ textSampleData.title }}</h3>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-12 mt-3\">\r\n    <nav aria-label=\"breadcrumb\">\r\n      <ol class=\"breadcrumb bg-white mb-0\">\r\n        <li class=\"breadcrumb-item\">\r\n          <a class=\"breadCrumbLink\" href=\"/master-detail\">\r\n            Master_Detail\r\n          </a>\r\n        </li>\r\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">\r\n          {{ textSampleData.title }}\r\n        </li>\r\n      </ol>\r\n    </nav>\r\n  </div>\r\n  <div class=\"col-md-8 col-12 ml-3 mb-5\">\r\n    <p class=\"title\">Status</p>\r\n    <p>{{ textSampleData.status }}</p>\r\n    <p class=\"title\">Order Date</p>\r\n    <p>{{ textSampleData.orderDate }}</p>\r\n    <p class=\"title\">Ship To</p>\r\n    <p>{{ textSampleData.shipTo }}</p>\r\n    <p class=\"title\">Order Total</p>\r\n    <p>{{ textSampleData.orderTotal }}</p>\r\n    <p class=\"title\">Description</p>\r\n    <p>{{ textSampleData.longDescription }}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail-page/master-detail-page.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail-page/master-detail-page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MasterDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDetailPageComponent", function() { return MasterDetailPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MasterDetailPageComponent = /** @class */ (function () {
    function MasterDetailPageComponent() {
    }
    MasterDetailPageComponent.prototype.ngOnInit = function () {
        this.textSampleData = {
            title: '',
            status: '',
            orderDate: '',
            shipTo: '',
            orderTotal: 0.0,
            longDescription: '',
            shortDescription: '',
            id: 0
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MasterDetailPageComponent.prototype, "textSampleData", void 0);
    MasterDetailPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-master-detail-page',
            template: __webpack_require__(/*! ./master-detail-page.component.html */ "./src/app/app-shell/master-detail/master-detail-page/master-detail-page.component.html"),
            styles: [__webpack_require__(/*! ./master-detail-page.component.css */ "./src/app/app-shell/master-detail/master-detail-page/master-detail-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MasterDetailPageComponent);
    return MasterDetailPageComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: MasterDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDetailRoutingModule", function() { return MasterDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _master_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-detail.component */ "./src/app/app-shell/master-detail/master-detail.component.ts");




var routes = [
    {
        path: '',
        component: _master_detail_component__WEBPACK_IMPORTED_MODULE_3__["MasterDetailComponent"]
    }
];
var MasterDetailRoutingModule = /** @class */ (function () {
    function MasterDetailRoutingModule() {
    }
    MasterDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MasterDetailRoutingModule);
    return MasterDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail-sidebar-tab/master-detail-sidebar-tab.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail-sidebar-tab/master-detail-sidebar-tab.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9tYXN0ZXItZGV0YWlsL21hc3Rlci1kZXRhaWwtc2lkZWJhci10YWIvbWFzdGVyLWRldGFpbC1zaWRlYmFyLXRhYi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail-sidebar-tab/master-detail-sidebar-tab.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail-sidebar-tab/master-detail-sidebar-tab.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\r\n  (click)=\"onDisplayTabClick()\"\r\n  type=\"button\"\r\n  class=\"list-group-item list-group-item-action sidebarText\"\r\n>\r\n  <img src=\"{{ image }}\" alt=\"Default Grey Avatar\" class=\"mr-3\" />\r\n  {{ tabText }}\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail-sidebar-tab/master-detail-sidebar-tab.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail-sidebar-tab/master-detail-sidebar-tab.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: MasterDetailSidebarTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDetailSidebarTabComponent", function() { return MasterDetailSidebarTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MasterDetailSidebarTabComponent = /** @class */ (function () {
    function MasterDetailSidebarTabComponent() {
        this.displayTabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MasterDetailSidebarTabComponent.prototype.ngOnInit = function () {
    };
    MasterDetailSidebarTabComponent.prototype.onDisplayTabClick = function () {
        this.displayTabClick.emit(this.index);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MasterDetailSidebarTabComponent.prototype, "tabText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MasterDetailSidebarTabComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MasterDetailSidebarTabComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MasterDetailSidebarTabComponent.prototype, "key", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MasterDetailSidebarTabComponent.prototype, "displayTabClick", void 0);
    MasterDetailSidebarTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-master-detail-sidebar-tab',
            template: __webpack_require__(/*! ./master-detail-sidebar-tab.component.html */ "./src/app/app-shell/master-detail/master-detail-sidebar-tab/master-detail-sidebar-tab.component.html"),
            styles: [__webpack_require__(/*! ./master-detail-sidebar-tab.component.css */ "./src/app/app-shell/master-detail/master-detail-sidebar-tab/master-detail-sidebar-tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MasterDetailSidebarTabComponent);
    return MasterDetailSidebarTabComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\r\n  /* full height - footer height - navbar height */\r\n  min-height: calc(100vh - 160px - 57px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL21hc3Rlci1kZXRhaWwvbWFzdGVyLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0RBQWdEO0VBQ2hELHNDQUFzQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9tYXN0ZXItZGV0YWlsL21hc3Rlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcclxuICAvKiBmdWxsIGhlaWdodCAtIGZvb3RlciBoZWlnaHQgLSBuYXZiYXIgaGVpZ2h0ICovXHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4IC0gNTdweCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main id=\"mainContent\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-2 p-0 border-right sidebar\">\r\n        <app-master-detail-sidebar-tab\r\n          class=\"list-group list-group-flush border-bottom\"\r\n          *ngFor=\"let textAssets of masterDetailText; let i = index\"\r\n          (displayTabClick)=\"handleDisplayTabClick($event)\"\r\n          [tabText]=\"textAssets.title\"\r\n          [image]=\"GreyAvatar\"\r\n          [index]=\"i\"\r\n          [key]=\"textAssets.id\"\r\n        >\r\n        </app-master-detail-sidebar-tab>\r\n      </div>\r\n      <app-master-detail-page\r\n        class=\"col\"\r\n        [textSampleData]=\"masterDetailText[currentDisplayTabIndex]\"\r\n      >\r\n      </app-master-detail-page>\r\n    </div>\r\n  </div>\r\n  <app-warning-message\r\n    *ngIf=\"WarningMessageOpen\"\r\n    [text]=\"WarningMessageText\"\r\n    (WarningMessageOpen)=\"handleWarningClose($event)\"\r\n  >\r\n  </app-warning-message>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: MasterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDetailComponent", function() { return MasterDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _master_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./master-detail.service */ "./src/app/app-shell/master-detail/master-detail.service.ts");



var MasterDetailComponent = /** @class */ (function () {
    function MasterDetailComponent(masterDetailService) {
        this.masterDetailService = masterDetailService;
        this.GreyAvatar = __webpack_require__(/*! ../../../assets/GreyAvatar.svg */ "./src/assets/GreyAvatar.svg");
        this.WarningMessageText = 'Request to get master detail text failed:';
        this.WarningMessageOpen = false;
        this.currentDisplayTabIndex = 0;
        this.masterDetailText = [];
    }
    MasterDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.masterDetailService.getMasterDetailItems().subscribe(function (result) {
            _this.masterDetailText = result;
        }, function (error) {
            _this.WarningMessageOpen = true;
            _this.WarningMessageText = "Request to get master detail text failed: " + error;
        });
    };
    MasterDetailComponent.prototype.handleDisplayTabClick = function (id) {
        this.currentDisplayTabIndex = id;
    };
    MasterDetailComponent.prototype.handleWarningClose = function (open) {
        this.WarningMessageOpen = open;
        this.WarningMessageText = '';
    };
    MasterDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-master-detail',
            template: __webpack_require__(/*! ./master-detail.component.html */ "./src/app/app-shell/master-detail/master-detail.component.html"),
            styles: [__webpack_require__(/*! ./master-detail.component.css */ "./src/app/app-shell/master-detail/master-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_master_detail_service__WEBPACK_IMPORTED_MODULE_2__["MasterDetailService"]])
    ], MasterDetailComponent);
    return MasterDetailComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: MasterDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDetailModule", function() { return MasterDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _master_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-detail.component */ "./src/app/app-shell/master-detail/master-detail.component.ts");
/* harmony import */ var _master_detail_sidebar_tab_master_detail_sidebar_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./master-detail-sidebar-tab/master-detail-sidebar-tab.component */ "./src/app/app-shell/master-detail/master-detail-sidebar-tab/master-detail-sidebar-tab.component.ts");
/* harmony import */ var _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/warning-message/warning-message.module */ "./src/app/shared/warning-message/warning-message.module.ts");
/* harmony import */ var _master_detail_page_master_detail_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./master-detail-page/master-detail-page.component */ "./src/app/app-shell/master-detail/master-detail-page/master-detail-page.component.ts");
/* harmony import */ var _master_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./master-detail-routing.module */ "./src/app/app-shell/master-detail/master-detail-routing.module.ts");








var MasterDetailModule = /** @class */ (function () {
    function MasterDetailModule() {
    }
    MasterDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _master_detail_component__WEBPACK_IMPORTED_MODULE_3__["MasterDetailComponent"],
                _master_detail_sidebar_tab_master_detail_sidebar_tab_component__WEBPACK_IMPORTED_MODULE_4__["MasterDetailSidebarTabComponent"],
                _master_detail_page_master_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["MasterDetailPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_5__["WarningMessageModule"],
                _master_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__["MasterDetailRoutingModule"]
            ]
        })
    ], MasterDetailModule);
    return MasterDetailModule;
}());



/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail.service.ts ***!
  \******************************************************************/
/*! exports provided: MasterDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDetailService", function() { return MasterDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var MasterDetailService = /** @class */ (function () {
    function MasterDetailService(http) {
        this.http = http;
        this.listUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint.masterdetail;
    }
    MasterDetailService.prototype.getMasterDetailItems = function () {
        return this.http.get(this.listUrl);
    };
    MasterDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MasterDetailService);
    return MasterDetailService;
}());



/***/ }),

/***/ "./src/app/app-shell/nav-bar/nav-bar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/app-shell/nav-bar/nav-bar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skipLink a {\r\n  position: absolute;\r\n  left: -100px;\r\n  top: -100px;\r\n}\r\n\r\n.skipLink a:focus {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 10px;\r\n  color: #ffffff;\r\n  background: #000000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAtc2hlbGwvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpcExpbmsgYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xMDBweDtcclxuICB0b3A6IC0xMDBweDtcclxufVxyXG5cclxuLnNraXBMaW5rIGE6Zm9jdXMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app-shell/nav-bar/nav-bar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/app-shell/nav-bar/nav-bar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skipLink\">\n  <a [href]=\"skipLinkPath\">Skip to Main Content</a>\n</div>\n<nav\n  class=\"navbar navbar-expand-sm navbar-light border-bottom justify-content-between\"\n>\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    restaurantsMap\n  </a>\n  <div class=\"navbar-nav\">\n    <a class=\"nav-item nav-link active\" routerLink=\"/home\">\n      Home\n    </a>\n    <a class=\"nav-item nav-link active\" routerLink=\"/grid\">\n      Grid\n    </a>\n    <a class=\"nav-item nav-link active\" routerLink=\"/list\">\n      List\n    </a>\n    <a class=\"nav-item nav-link active\" routerLink=\"/master-detail\">\n      Master_Detail\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/app-shell/nav-bar/nav-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/app-shell/nav-bar/nav-bar.component.ts ***!
  \********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(location) {
        this.location = location;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.skipLinkPath = this.location.path() + "#mainContent";
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/app-shell/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/app-shell/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n  }\r\n  \r\n  footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 160px; /* Set the fixed height of the footer here */\r\n    background-color: #f5f5f5;\r\n  }\r\n  \r\n  /* Override Bootstrap Styling */\r\n  \r\n  .btn-primary {\r\n    background-color: #025fce !important;\r\n  }\r\n  \r\n  button:focus,\r\n  button:active {\r\n    outline: none !important;\r\n    box-shadow: none !important;\r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYSxFQUFFLDRDQUE0QztJQUMzRCx5QkFBeUI7RUFDM0I7O0VBRUEsK0JBQStCOztFQUUvQjtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTs7SUFFRSx3QkFBd0I7SUFDeEIsMkJBQTJCO0VBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTYwcHg7IC8qIFNldCB0aGUgZml4ZWQgaGVpZ2h0IG9mIHRoZSBmb290ZXIgaGVyZSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgXHJcbiAgLyogT3ZlcnJpZGUgQm9vdHN0cmFwIFN0eWxpbmcgKi9cclxuICBcclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNWZjZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBidXR0b246Zm9jdXMsXHJcbiAgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<!-- header -->\r\n<app-nav-bar></app-nav-bar>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- footer -->\r\n<app-footer></app-footer>\r\n\r\n\r\n"

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
        this.title = 'restaurantsMap';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_shell_master_detail_master_detail_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-shell/master-detail/master-detail.module */ "./src/app/app-shell/master-detail/master-detail.module.ts");
/* harmony import */ var _app_shell_list_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-shell/list/list.module */ "./src/app/app-shell/list/list.module.ts");
/* harmony import */ var _app_shell_grid_grid_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-shell/grid/grid.module */ "./src/app/app-shell/grid/grid.module.ts");
/* harmony import */ var _app_shell_home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-shell/home/home.module */ "./src/app/app-shell/home/home.module.ts");
/* harmony import */ var _app_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-shell/nav-bar/nav-bar.component */ "./src/app/app-shell/nav-bar/nav-bar.component.ts");
/* harmony import */ var _app_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-shell/footer/footer.component */ "./src/app/app-shell/footer/footer.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                _app_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _app_shell_master_detail_master_detail_module__WEBPACK_IMPORTED_MODULE_6__["MasterDetailModule"],
                _app_shell_list_list_module__WEBPACK_IMPORTED_MODULE_7__["ListModule"],
                _app_shell_grid_grid_module__WEBPACK_IMPORTED_MODULE_8__["GridModule"],
                _app_shell_home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/warning-message/warning-message.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/warning-message/warning-message.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".warningPosition {\r\n    position: fixed !important;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1030;\r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3dhcm5pbmctbWVzc2FnZS93YXJuaW5nLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93YXJuaW5nLW1lc3NhZ2Uvd2FybmluZy1tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FybmluZ1Bvc2l0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbiAgfVxyXG4gIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/warning-message/warning-message.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/warning-message/warning-message.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\nclass=\"alert alert-warning ml-3 warningPosition\"\r\nrole=\"alert\"\r\n>\r\n{{text}}\r\n<button\r\n  (click)=\"onWarningClose()\"\r\n  class=\"close ml-2\"\r\n  aria-label=\"Close\"\r\n>\r\n  <span aria-hidden=\"true\">&times;</span>\r\n</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/warning-message/warning-message.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/warning-message/warning-message.component.ts ***!
  \*********************************************************************/
/*! exports provided: WarningMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningMessageComponent", function() { return WarningMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WarningMessageComponent = /** @class */ (function () {
    function WarningMessageComponent() {
        this.open = false;
        this.text = '';
        this.WarningMessageOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    WarningMessageComponent.prototype.ngOnInit = function () {
    };
    WarningMessageComponent.prototype.onWarningClose = function () {
        this.text = '';
        this.open = false;
        this.WarningMessageOpen.emit(this.open);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WarningMessageComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WarningMessageComponent.prototype, "WarningMessageOpen", void 0);
    WarningMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-warning-message',
            template: __webpack_require__(/*! ./warning-message.component.html */ "./src/app/shared/warning-message/warning-message.component.html"),
            styles: [__webpack_require__(/*! ./warning-message.component.css */ "./src/app/shared/warning-message/warning-message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WarningMessageComponent);
    return WarningMessageComponent;
}());



/***/ }),

/***/ "./src/app/shared/warning-message/warning-message.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/warning-message/warning-message.module.ts ***!
  \******************************************************************/
/*! exports provided: WarningMessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningMessageModule", function() { return WarningMessageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _warning_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warning-message.component */ "./src/app/shared/warning-message/warning-message.component.ts");




var WarningMessageModule = /** @class */ (function () {
    function WarningMessageModule() {
    }
    WarningMessageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _warning_message_component__WEBPACK_IMPORTED_MODULE_3__["WarningMessageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _warning_message_component__WEBPACK_IMPORTED_MODULE_3__["WarningMessageComponent"]
            ]
        })
    ], WarningMessageModule);
    return WarningMessageModule;
}());



/***/ }),

/***/ "./src/assets/GreyAvatar.svg":
/*!***********************************!*\
  !*** ./src/assets/GreyAvatar.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "GreyAvatar.svg";

/***/ }),

/***/ "./src/assets/GreyBox.svg":
/*!********************************!*\
  !*** ./src/assets/GreyBox.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "GreyBox.svg";

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
    production: false,
    endpoint: {
        masterdetail: '/api/masterdetail',
        list: '/api/list',
        grid: '/api/grid',
    }
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

module.exports = __webpack_require__(/*! /Users/jarvis/Documents/Azure/restaurantsMap/restaurantsMap/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map