// import { Component } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';
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
// // '@' decorators allow for adding metadata to a class
// @Component({
// 	// this tells the component in index.html to use the contents of the root component
// 	// the root component will be present in the app at all times.
// 	selector: 'my-app',
// 	// An external component where this template will display
// 	templateUrl: 'app/root/root.html',
// 	directives: [	ROUTER_DIRECTIVES ]
// })
// export class RootComponent {
// }
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var RootComponent = (function () {
    function RootComponent() {
    }
    RootComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/root/root.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;
//# sourceMappingURL=root.component.js.map