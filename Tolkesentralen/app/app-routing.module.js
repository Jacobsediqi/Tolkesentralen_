"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var info_om_oss_component_1 = require('./info/info-om-oss.component');
var info_tolk_component_1 = require('./info/info-tolk.component');
var info_oversettelse_component_1 = require('./info/info-oversettelse.component');
var not_found_component_1 = require('./not-found.component');
var home_component_1 = require('./home.component');
var login_component_1 = require('./login/login.component');
var bestill_tolk_component_1 = require('./bestill/bestill-tolk.component');
var bestill_oversettelse_component_1 = require('./bestill/bestill-oversettelse.component');
var admin_component_1 = require('./admin/admin.component');
var kunde_component_1 = require('./kunde/kunde.component');
var tolk_component_1 = require('./tolk/tolk.component');
var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'kunde', component: kunde_component_1.KundeComponent },
    { path: 'tolk', component: tolk_component_1.TolkComponent },
    { path: 'bestill-tolk', component: bestill_tolk_component_1.BestillTolkComponent },
    { path: 'bestill-oversettelse', component: bestill_oversettelse_component_1.BestillOversettelseComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'info-om-oss', component: info_om_oss_component_1.InfoOmOssComponent },
    { path: 'info-tolk', component: info_tolk_component_1.InfoTolkComponent },
    { path: 'info-oversettelse', component: info_oversettelse_component_1.InfoOversettelseComponent },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [home_component_1.HomeComponent, bestill_tolk_component_1.BestillTolkComponent, bestill_oversettelse_component_1.BestillOversettelseComponent, not_found_component_1.PageNotFoundComponent, info_om_oss_component_1.InfoOmOssComponent, info_tolk_component_1.InfoTolkComponent, info_oversettelse_component_1.InfoOversettelseComponent, login_component_1.LoginComponent, admin_component_1.AdminComponent, kunde_component_1.KundeComponent, tolk_component_1.TolkComponent];
//# sourceMappingURL=app-routing.module.js.map