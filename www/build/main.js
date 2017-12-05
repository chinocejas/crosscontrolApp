webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Perfil" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Box" tabIcon="glasses"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Ejercicios" tabIcon="body"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = (function () {
    function ServiceProvider(http) {
        this.http = http;
        /*Creando Api donde esta creada la DB*/
        //api:string ='http://localhost/appmarket-api/'
        this.api = 'https://srpta.000webhostapp.com/api/';
    }
    ServiceProvider.prototype.getData = function () {
        return this.http.get(this.api + 'listado.php').map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.dataRegister = function (parans) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + "insert.php", parans, {
            headers: headers,
            method: "POST"
        }).map(function (res) { return res.json(); });
    };
    ;
    ServiceProvider.prototype.actualizarProducto = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + "update.php", data, {
            headers: headers,
            method: "POST"
        }).map(function (res) { return res.json(); });
    };
    return ServiceProvider;
}());
ServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ServiceProvider);

//# sourceMappingURL=service-provider.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__insert_insert__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_exercise__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_user_edit_user__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, _userServices, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this._userServices = _userServices;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.ejercicio_name = '';
        this.ejercicio_rm = '';
        this.insertPage = __WEBPACK_IMPORTED_MODULE_2__insert_insert__["a" /* Insert */];
        this.registrarUsuario = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', 'ROLE_USER', '');
        this.user_register = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', 'ROLE_USER', '');
        this.newExercise = new __WEBPACK_IMPORTED_MODULE_5__models_exercise__["a" /* Exercise */]("", "", null, 0, "", this.identity);
    }
    HomePage.prototype.ngOnInit = function () {
        this.identity = this._userServices.getIdentity();
        this.token = this._userServices.getToken();
        this.userEdit = this.identity;
        console.log(this.identity);
        console.log(this.token);
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        //conseguir datos usuario identificado
        this._userServices.signUp(this.user).subscribe(function (response) {
            var identity = response.user;
            _this.identity = identity;
            if (!_this.identity._id) {
                alert("El usuario no se logueo correctamente");
            }
            else {
                //Crear elemento en Local Storage para tener al user en sesion
                localStorage.setItem('identity', JSON.stringify(identity));
                //conseguir token para enviar a cada peticion http
                _this._userServices.signUp(_this.user, 'true').subscribe(function (response) {
                    var token = response.token;
                    _this.token = token;
                    if (_this.token.length <= 0) {
                        alert("El token no se ha generado correctamente ");
                    }
                    else {
                        //Crear elemento en Local Storage para tener token disponible
                        localStorage.setItem('token', token);
                        _this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', 'ROLE_USER', '');
                        _this.userEdit = _this.identity;
                    }
                }, function (error) {
                    var errorMessage = error;
                    if (errorMessage != null) {
                        var body = JSON.parse(error._body);
                        _this.errorMessage = body.message;
                        _this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', 'ROLE_USER', '');
                        console.log(errorMessage);
                    }
                });
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.errorMessage = body.message;
                console.log(errorMessage);
            }
        });
    };
    HomePage.prototype.logOut = function () {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        localStorage.clear();
        this.identity = null;
        this.token = null;
    };
    HomePage.prototype.onSubmitRegister = function () {
        var _this = this;
        console.log(this.user_register);
        this._userServices.register(this.user_register).subscribe(function (response) {
            var user = response.user;
            _this.user_register = user;
            if (!user._id) {
                _this.alertRegister = 'Error al registrarse';
            }
            else {
                _this.alertRegister = 'El usuario se ha registrado Correctamente. Identificate como :  ' + _this.user_register.email;
                _this.showAlert('El Usuario se ha creado correctamente. Ingresa como: ' + _this.user_register.name);
                _this.user_register = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', 'ROLE_USER', '');
                _this.formularioRegister();
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertRegister = body.message;
                _this.user_register = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', 'ROLE_USER', '');
                console.log(errorMessage);
            }
        });
    };
    HomePage.prototype.formularioRegister = function () {
        console.log(this.registrarUsuario);
        this.registrarUsuario = !this.registrarUsuario;
    };
    HomePage.prototype.editUser = function (userEdit) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_user_edit_user__["a" /* EditUser */], { userEdit: userEdit });
    };
    HomePage.prototype.showAlert = function (men) {
        var alert = this.alertCtrl.create({ title: 'Información',
            subTitle: men,
            buttons: ['OK'] });
        alert.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    \n    \n    <div id="profile-bg"></div>\n    <div class="container">\n\n    \n        <div *ngIf="identity" id="content" >\n            \n          <div id="profile-info">\n            <img id="profile-image" src="https://image.ibb.co/c7VBJR/icon.png">\n            <h3 id="profile-name">{{identity.name}}  {{identity.surname}}</h3>\n            <span id="profile-description"> {{identity.email}} </span>\n              \n          </div>\n         \n        </div>\n        <ion-fab right bottom *ngIf="identity" (click)="editUser(userEdit)" >\n          <button ion-fab >\n            <ion-icon name="create"></ion-icon>\n          </button>\n        </ion-fab>\n      </div>\n         \n      <!-- Login user-->\n      <div *ngIf="!identity" id="">\n                       \n           \n            <ion-list *ngIf="!registrarUsuario" >\n              <ion-label floating>Identificate</ion-label>\n              <form #loginForm="ngForm" (ngSubmit)="onSubmit()" class="" action="">\n                <ion-item >\n                  <ion-label floating> email</ion-label>\n                  <ion-input type="email" class="form-control" #email="ngModel" name="email" [(ngModel)]="user.email" required ></ion-input>\n                  \n                </ion-item>\n                <ion-item>\n                    <ion-label floating> password</ion-label>\n                    <ion-input type="password" #password="ngModel" name="password" [(ngModel)]="user.password" class="form-control" required  ></ion-input> \n\n                </ion-item>\n                <span *ngIf="!email.valid && email.touched">\n                  El email es Obligatorio men \n                </span>\n                \n                <button ion-button full block color ="primary"  type="submit" value="Entrar" class="btn btn-primary btn-block btn-large" >\n                    entrar\n                  </button>\n              </form>\n              <ion-label floating class="registrar" (click)="formularioRegister()" >registrarse</ion-label>\n            </ion-list>\n          </div>\n\n\n            <!--Register user -->\n            <ion-list *ngIf="registrarUsuario">\n                <ion-label floating>Registrarte</ion-label>\n                <form #registerForm="ngForm" (ngSubmit)="onSubmitRegister()" class="" action="">\n                      <ion-item >\n                        <ion-label floating> name</ion-label>\n                        <ion-input type="text" #name="ngModel" name="name" [(ngModel)]="user_register.name" class="form-control" required  ></ion-input>\n                      \n                      </ion-item>\n                      <ion-item>\n                          <ion-label floating> surname</ion-label>\n                          <ion-input  type="text" #surname="ngModel" name="surname" [(ngModel)]="user_register.surname" class="form-control" required  ></ion-input>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label floating>email</ion-label>\n                        <ion-input type="email" class="form-control" #email="ngModel" name="email" [(ngModel)]="user_register.email" required >\n\n                        </ion-input>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label floating>password</ion-label>\n                        <ion-input type="password" #password="ngModel" name="password" [(ngModel)]="user_register.password" class="form-control" required></ion-input>\n                      </ion-item>\n                      \n                      \n                      <button ion-button full block color ="primary"  type="submit" value="Registrarse" class="btn btn-primary btn-block btn-large" >\n                          Registrarse\n                        </button>\n                        <button (click)="formularioRegister()" ion-button full block color ="red"   value="Cancelar" class="btn btn-warning btn-block btn-large" >\n                            Cancelar \n                        </button>\n                    \n                     \n                      \n                  \n                    \n          \n              </form>\n            </ion-list>\n            \n             \n                         \n        \n      \n        \n \n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_user_provider__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_provider__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_provider__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__insert_insert__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(navCtrl, service, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.title = 'Box';
        this.insertPage = __WEBPACK_IMPORTED_MODULE_3__insert_insert__["a" /* Insert */];
        this.warmth = 100;
    }
    AboutPage.prototype.showAlert = function (men) {
        var alert = this.alertCtrl.create({
            title: 'Informacion',
            subTitle: men,
            buttons: ['OK']
        });
        alert.present();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Centro de Entrenamiento\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  >\n\n      \n	<div id="profile-bg"></div>\n	<ion-card class="card-exercise">\n		\n		<ion-card-content>\n			<ion-card-title>\n			Proximamente\n			</ion-card-title>\n			<p>\n			Conexion con centro de entrenamiento en desarrollo\n			</p>\n			\n		</ion-card-content>\n	</ion-card>\n	\n\n      \n                      \n            \n           \n      \n    \n\n\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_service_provider__["a" /* ServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exercise; });
var Exercise = (function () {
    function Exercise(name, description, date, rm, medida, user) {
    }
    return Exercise;
}());

//# sourceMappingURL=exercise.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_exercise_edit_exercise__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(40);
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
 * Generated class for the Detail page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Detail = (function () {
    function Detail(navCtrl, navParams, _userServices, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._userServices = _userServices;
        this.alertCtrl = alertCtrl;
        this.warmth = 100;
        this.ejercicio_name = '';
        this.ejercicio_rm = '';
        this.porcentaje = 0;
        //this.ejercicio_name = navParams.get('ejercicio_name'); 
        //this.ejercicio_rm = navParams.get('ejercicio_rm');
        this.exercise = navParams.get('exercise');
        //this.porcentaje= (parseInt(this.ejercicio_rm) / 100);
        this.porcentaje = this.exercise.rm / 100;
    }
    Detail.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad Detail');
        this.identity = this._userServices.getIdentity();
        this.token = this._userServices.getToken();
        this.user = this.identity;
    };
    Detail.prototype.actualizaPorcentaje = function () {
        this.porcentaje = parseInt(this.ejercicio_rm) * (this.warmth / 100);
    };
    Detail.prototype.editaEjercicio = function (exercise) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_exercise_edit_exercise__["a" /* EditExercise */], { exercise: exercise });
    };
    Detail.prototype.deleteEjercicio = function (exercise) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Borrar ejercicio',
            message: 'Seguro que desea borrar este registro?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this._userServices.deleteExercise(exercise).subscribe(function (data) {
                            _this.showAlert('Se ha eliminado correctamente');
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */]);
                        }, function (err) {
                            _this.showAlert(err);
                            //console.log(err)
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    Detail.prototype.showAlert = function (men) {
        var alert = this.alertCtrl.create({ title: 'Información',
            subTitle: men,
            buttons: ['OK'] });
        alert.present();
    };
    return Detail;
}());
Detail = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\detail\detail.html"*/'<!--\n  Generated template for the Detail page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="myNav" >    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n		\n			<!-- \n	\n	<img id="imgFondo" src=\'../../assets/img/back1.jpg\'>\n	\n		<div id="content">\n	        <div id="profile-info">\n	          <div id="profile-name">\n	          		<h3>{{exercise.name}}</h3>\n	          		<h5>{{exercise.rm}}{{exercise.medida}}</h5></div>\n	          <h1 class="center">{{porcentaje * warmth}} {{exercise.medida}}</h1>\n	        </div>\n        \n      </div>-->\n			<div id="profile-bg"></div>\n			<ion-card class="card-exercise">\n					<img src="https://image.ibb.co/deuSsm/monazo.jpg"/>\n					<ion-card-content>\n						<ion-card-title>\n							{{exercise.name}}\n						</ion-card-title>\n						<p>\n						{{exercise.description}}\n						</p>\n						<h5>	Mi RM =  {{exercise.rm}}{{exercise.medida}}</h5>\n						<h1 class="center">{{porcentaje * warmth}} {{exercise.medida}}</h1>\n						<p>\n								<ion-item>\n										<ion-badge item-start color="danger">{{warmth}}%</ion-badge>\n									<ion-range min="10" max="120" step="5" snaps="true" [(ngModel)]="warmth" color="primary">\n												<ion-icon range-left small color="danger" name="remove"></ion-icon>\n												<ion-icon range-right color="danger" name="ios-add-circle-outline"></ion-icon>\n										</ion-range>\n								</ion-item>\n						</p>\n					</ion-card-content>\n				</ion-card>\n\n				<ion-fab right bottom *ngIf="identity" (click)="editaEjercicio(exercise)" >\n					<button ion-fab >\n						<ion-icon name="create"></ion-icon>\n					</button>\n				</ion-fab>\n\n				<ion-fab left bottom *ngIf="identity" (click)="deleteEjercicio(exercise)" >\n					<button ion-fab color="danger">\n						<ion-icon name="trash"  ></ion-icon>\n					</button>\n				</ion-fab>\n\n\n    \n	\n\n\n\n\n	\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\detail\detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_provider__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Detail);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditExercise; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(40);
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
 * Generated class for the EditExercise page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditExercise = (function () {
    function EditExercise(navCtrl, navParams, _userServices, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._userServices = _userServices;
        this.alertCtrl = alertCtrl;
        this.editExercise = navParams.get('exercise');
    }
    EditExercise.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditExercise');
    };
    EditExercise.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.editExercise);
        this._userServices.editExercise(this.editExercise).subscribe(function (data) {
            _this.showAlert('Se ha modificado correctamente');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
        }, function (err) {
            _this.showAlert(err);
            //console.log(err)
        });
    };
    EditExercise.prototype.showAlert = function (men) {
        var alert = this.alertCtrl.create({ title: 'Información',
            subTitle: men,
            buttons: ['OK'] });
        alert.present();
    };
    return EditExercise;
}());
EditExercise = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-exercise',template:/*ion-inline-start:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\edit-exercise\edit-exercise.html"*/'<!--\n  Generated template for the EditExercise page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar Ejercicio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="profile-bg"></div>\n	\n	<form #addExercise="ngForm" (ngSubmit)="onSubmit()">\n		<ion-list>	\n			<ion-item >\n				<ion-label floating> Nombre</ion-label>\n				<ion-input type="text" name="name" [(ngModel)]="editExercise.name" #name="ngModel"></ion-input>\n\n			</ion-item>\n			<ion-item >\n				<ion-label floating> RM</ion-label>\n				<ion-input type="text" name="rm" [(ngModel)]="editExercise.rm" #rm="ngModel"></ion-input>\n				\n			</ion-item>\n			<ion-item >\n					<ion-label floating> Medida</ion-label>\n					<ion-input type="text" name="medida" [(ngModel)]="editExercise.medida" #medida="ngModel"></ion-input>\n					\n				</ion-item>\n				<ion-item >\n						<ion-label floating> Description</ion-label>\n						<ion-input type="text" name="description" [(ngModel)]="editExercise.description" #description="ngModel"></ion-input>\n						\n					</ion-item>\n			<ion-item >\n				<button ion-button full block color ="primary">\n					Guardar\n				</button>\n				\n			</ion-item>\n		</ion-list>\n	</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\edit-exercise\edit-exercise.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_provider__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditExercise);

//# sourceMappingURL=edit-exercise.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(104);
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
 * Generated class for the EditUser page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditUser = (function () {
    function EditUser(navCtrl, _userServices, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this._userServices = _userServices;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.user = navParams.get('userEdit');
        console.log(this.user);
    }
    EditUser.prototype.ionViewDidLoad = function () {
        this.identity = this._userServices.getIdentity();
        this.token = this._userServices.getToken();
        console.log(this.identity);
        console.log(this.token);
    };
    EditUser.prototype.onSubmit = function () {
        var _this = this;
        this._userServices.updateUser(this.user).subscribe(function (data) {
            _this.showAlert('Se ha modificado correctamente');
            _this.user = _this._userServices.getIdentity();
            console.log(_this.user);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.showAlert(err);
            //console.log(err)
        });
    };
    EditUser.prototype.logOut = function () {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        localStorage.clear();
        this.identity = null;
        this.token = null;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    EditUser.prototype.showAlert = function (men) {
        var alert = this.alertCtrl.create({ title: 'Información',
            subTitle: men,
            buttons: ['OK'] });
        alert.present();
    };
    return EditUser;
}());
EditUser = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-user',template:/*ion-inline-start:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\edit-user\edit-user.html"*/'<!--\n  Generated template for the EditUser page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list >\n    \n    <form #registerForm="ngForm" (ngSubmit)="onSubmit()" class="" action="">\n          <ion-item >\n            <ion-label floating> name</ion-label>\n            <ion-input type="text" #name="ngModel" name="name" [(ngModel)]="user.name" class="form-control" required  ></ion-input>\n          \n          </ion-item>\n          <ion-item>\n              <ion-label floating> surname</ion-label>\n              <ion-input  type="text" #surname="ngModel" name="surname" [(ngModel)]="user.surname" class="form-control" required  ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>email</ion-label>\n            <ion-input type="email" class="form-control" #email="ngModel" name="email" [(ngModel)]="user.email" required >\n\n            </ion-input>\n          </ion-item>\n                    \n          \n          <button ion-button full block color ="primary"  type="submit" value="Registrarse" class="btn btn-primary btn-block btn-large" >\n              Guardar\n            </button>\n            \n        \n         \n          \n      \n        \n\n  </form>\n\n  <ion-fab left bottom *ngIf="identity" (click)="logOut()" >\n    <button ion-fab color="danger">\n      <ion-icon name="exit"  ></ion-icon>\n    </button>\n  </ion-fab>\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\edit-user\edit-user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_provider__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], EditUser);

//# sourceMappingURL=edit-user.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_insert_insert__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_exercise_edit_exercise__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_user_edit_user__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_service_provider__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_insert_insert__["a" /* Insert */],
            __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* Detail */],
            __WEBPACK_IMPORTED_MODULE_10__pages_edit_exercise_edit_exercise__["a" /* EditExercise */],
            __WEBPACK_IMPORTED_MODULE_11__pages_edit_user_edit_user__["a" /* EditUser */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsHideOnSubPages: true })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_insert_insert__["a" /* Insert */],
            __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* Detail */],
            __WEBPACK_IMPORTED_MODULE_10__pages_edit_exercise_edit_exercise__["a" /* EditExercise */],
            __WEBPACK_IMPORTED_MODULE_11__pages_edit_user_edit_user__["a" /* EditUser */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__providers_service_provider__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_user_provider__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    //rootPage:any = Detail; 
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    url: 'https://crosscontrol.herokuapp.com/api/',
    ip: '127.0.0.1'
};
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, name, surname, email, password, role, image) {
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.image = image;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    UserService.prototype.signUp = function (user_to_login, gethash) {
        if (gethash === void 0) { gethash = null; }
        if (gethash != null) {
            user_to_login.gethash = gethash;
        }
        var json = JSON.stringify(user_to_login);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this._http.post(this.url + 'login', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    UserService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        if (token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    UserService.prototype.register = function (user_to_register) {
        var json = JSON.stringify(user_to_register);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this._http.post(this.url + 'register', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.updateUser = function (userUpdate) {
        var userId = userUpdate._id;
        var json = JSON.stringify(userUpdate);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.token
        });
        return this._http.put(this.url + '/update-user/' + userId, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Servicio Ejercicios
    UserService.prototype.getExercises = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': this.token
        });
        return this._http.get(this.url + 'get-exercises/' + userId, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.newExercise = function (newExercise, userId) {
        var json = JSON.stringify(newExercise);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.token
        });
        return this._http.post(this.url + 'register-exercise/' + userId, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.editExercise = function (editExercise) {
        var idExercise = editExercise._id;
        var json = JSON.stringify(editExercise);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.token
        });
        return this._http.put(this.url + '/update-exercise/' + idExercise, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteExercise = function (deleteExercise) {
        var idExercise = deleteExercise._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.token
        });
        return this._http.delete(this.url + '/delete-exercise/' + idExercise, { headers: headers }).map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], UserService);

//# sourceMappingURL=user-provider.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__insert_insert__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = (function () {
    function ContactPage(navCtrl, _userServices) {
        this.navCtrl = navCtrl;
        this._userServices = _userServices;
        this.exercises = null;
        this.ejercicio_name = '';
        this.ejercicio_rm = '';
        this.insertPage = __WEBPACK_IMPORTED_MODULE_3__insert_insert__["a" /* Insert */];
    }
    ContactPage.prototype.ngOnInit = function () {
        this.identity = this._userServices.getIdentity();
        this.token = this._userServices.getToken();
        this.user = this.identity;
        console.log(this.identity);
        console.log(this.token);
        if (this.user) {
            this.getAllExercise();
        }
    };
    ContactPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ContactPage.prototype.getAllExercise = function () {
        var _this = this;
        /*Va a traer toda la informacion a traves del metodo creado*/
        this._userServices.getExercises(this.user._id).subscribe(function (data) {
            if (!data.exercises) {
                console.log("Usted todavía no tiene ejercicios cargados");
            }
            else {
                _this.exercises = data.exercises;
                console.log(_this.exercises);
            }
        }, function (err) { console.log(err); });
    };
    ContactPage.prototype.detalleEjercicio = function (exercise) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_detail__["a" /* Detail */], { exercise: exercise });
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Exercises\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n  \n\n\n\n<ion-content padding>\n        \n  <div id="profile-bg"></div>\n     \n  <div id="ejerciciosAll" *ngIf="exercises && user">\n  <ion-card *ngFor="let ejercicio of exercises" > \n      <ion-item (click)="detalleEjercicio(ejercicio)">\n        <ion-avatar item-left>\n          <img src="">\n        </ion-avatar>\n        <h1>{{ejercicio.name}}</h1>\n        <ion-badge item-right>{{ejercicio.rm}} {{ejercicio.medida}}</ion-badge>\n      </ion-item>\n    </ion-card>\n  </div>\n<ion-fab right bottom *ngIf="identity">\n  <button ion-fab [navPush]="insertPage">\n    <ion-icon name="add"></ion-icon>\n  </button>\n</ion-fab>\n\n<ion-card *ngIf="!user" (click)="getAllExercise()" >\n  <ion-item>\n    <ion-label>Debe loguearse para poder ver sus ejercicios</ion-label>\n    \n  </ion-item>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\contact\contact.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_user_provider__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_provider__["a" /* UserService */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Insert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_provider__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_exercise__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact__ = __webpack_require__(40);
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
 * Generated class for the Insert page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Insert = (function () {
    function Insert(navCtrl, NavParams, service, alertCtrl, _userServices) {
        this.navCtrl = navCtrl;
        this.NavParams = NavParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this._userServices = _userServices;
        this.newExercise = new __WEBPACK_IMPORTED_MODULE_5__models_exercise__["a" /* Exercise */]('', '', null, 0, '', this.user);
    }
    Insert.prototype.ionViewDidLoad = function () {
        this.identity = this._userServices.getIdentity();
        this.token = this._userServices.getToken();
        this.user = this.identity;
    };
    Insert.prototype.onSubmit = function () {
        var _this = this;
        //console.log(this.newExercise);
        this._userServices.newExercise(this.newExercise, this.identity._id).subscribe(function (data) {
            _this.showAlert(data.mensaje);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__contact_contact__["a" /* ContactPage */]);
        }, function (err) {
            _this.showAlert(err);
            //console.log(err)
        });
    };
    Insert.prototype.nuevoEjercicio = function (req) {
        var _this = this;
        this.newExercise.name = req.name;
        this.newExercise.description = req.description;
        this.newExercise.rm = req.rm;
        this.newExercise.medida = req.medida;
        console.log(this.newExercise);
        this._userServices.newExercise(req, this.user._id).subscribe(function (data) {
            _this.showAlert('Ejercico agregado');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
            //console.log(data.mensaje)
        }, function (err) {
            console.log(err);
        });
    };
    Insert.prototype.envioDato = function (req) {
        var _this = this;
        this.service.dataRegister(req.value).subscribe(function (data) {
            _this.showAlert(data.mensaje);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
            console.log(data.mensaje);
        }, function (err) { return console.log(err); });
    };
    Insert.prototype.showAlert = function (men) {
        var alert = this.alertCtrl.create({ title: 'Información',
            subTitle: men,
            buttons: ['OK'] });
        alert.present();
    };
    return Insert;
}());
Insert = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-insert',template:/*ion-inline-start:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\insert\insert.html"*/'<!--\n  Generated template for the Insert page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nuevo ejercicio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n		<div id="profile-bg"></div>\n	<h2>Nuevo Ejercicio</h2>\n	<form #addExercise="ngForm" (ngSubmit)="onSubmit()">\n		<ion-list>	\n			<ion-item >\n				<ion-label floating> Nombre</ion-label>\n				<ion-input type="text" name="name" [(ngModel)]="newExercise.name" #name="ngModel"></ion-input>\n\n			</ion-item>\n			<ion-item >\n				<ion-label floating> RM</ion-label>\n				<ion-input type="text" name="rm" [(ngModel)]="newExercise.rm" #rm="ngModel"></ion-input>\n				\n			</ion-item>\n			<ion-item >\n					<ion-label floating> Medida</ion-label>\n					<ion-input type="text" name="medida" [(ngModel)]="newExercise.medida" #medida="ngModel"></ion-input>\n					\n				</ion-item>\n				<ion-item >\n						<ion-label floating> Description</ion-label>\n						<ion-input type="text" name="description" [(ngModel)]="newExercise.description" #description="ngModel"></ion-input>\n						\n					</ion-item>\n			<ion-item >\n				<button ion-button full block color ="primary">\n					Guardar\n				</button>\n				\n			</ion-item>\n		</ion-list>\n	</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chino\Google Drive\mobile\appionic2\crosscontrolApp\src\pages\insert\insert.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_user_provider__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_service_provider__["a" /* ServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_provider__["a" /* UserService */]])
], Insert);

//# sourceMappingURL=insert.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map