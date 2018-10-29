webpackJsonp([0],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelaCadastroPageModule", function() { return TelaCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tela_cadastro__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TelaCadastroPageModule = /** @class */ (function () {
    function TelaCadastroPageModule() {
    }
    TelaCadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tela_cadastro__["a" /* TelaCadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tela_cadastro__["a" /* TelaCadastroPage */]),
            ],
        })
    ], TelaCadastroPageModule);
    return TelaCadastroPageModule;
}());

//# sourceMappingURL=tela-cadastro.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelaCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TelaCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TelaCadastroPage = /** @class */ (function () {
    function TelaCadastroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TelaCadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TelaCadastroPage');
    };
    TelaCadastroPage.prototype.cadastrar = function () {
        this.navCtrl.push("HomePage");
    };
    TelaCadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tela-cadastro',template:/*ion-inline-start:"/home/joao/Documentos/ionic/GeneralServices/src/pages/tela-cadastro/tela-cadastro.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item>\n          <ion-label>Tipo de Serviço</ion-label>\n          <ion-select [(ngModel)]="gaming">\n            <ion-option value="nes">NES</ion-option>\n            <ion-option value="n64">Nintendo64</ion-option>\n            <ion-option value="ps">PlayStation</ion-option>\n            <ion-option value="genesis">Sega Genesis</ion-option>\n            <ion-option value="saturn">Sega Saturn</ion-option>\n            <ion-option value="snes">SNES</ion-option>\n          </ion-select>\n        </ion-item>\n      \n\n    \n\n          <ion-item>\n            <ion-label stacked>Username</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label stacked>E-mail</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label stacked>CPF</ion-label>\n              <ion-input type="number"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>Telefone</ion-label>\n                <ion-input type="number"></ion-input>\n            </ion-item>\n\n            <ion-item >\n                <ion-label stacked>CEP</ion-label>\n                <ion-input type="number"></ion-input>\n            </ion-item>\n            <ion-item >\n\n                <ion-label stacked>Numero</ion-label>\n                <ion-input type="number"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n              <ion-label>Cidade</ion-label>\n              <ion-select [(ngModel)]="gaming">\n                <ion-option value="nes">NES</ion-option>\n                <ion-option value="n64">Nintendo64</ion-option>\n                <ion-option value="ps">PlayStation</ion-option>\n                <ion-option value="genesis">Sega Genesis</ion-option>\n                <ion-option value="saturn">Sega Saturn</ion-option>\n                <ion-option value="snes">SNES</ion-option>\n              </ion-select>\n            </ion-item>\n          \n            <ion-item>\n                <ion-label stacked>Senha</ion-label>\n                <ion-input type="password"></ion-input>\n              </ion-item>\n\n              \n          </ion-list>\n          <div padding>\n              <button ion-button color="primary" block (click)="cadastrar()">Entrar</button>\n            </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/joao/Documentos/ionic/GeneralServices/src/pages/tela-cadastro/tela-cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], TelaCadastroPage);
    return TelaCadastroPage;
    var _a, _b;
}());

//# sourceMappingURL=tela-cadastro.js.map

/***/ })

});
//# sourceMappingURL=0.js.map