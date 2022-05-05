"use strict";
(self["webpackChunkbanyantreeCilent"] = self["webpackChunkbanyantreeCilent"] || []).push([["src_app_modules_non-session_module_ts"],{

/***/ 45121:
/*!***********************************************!*\
  !*** ./src/app/modules/non-session/module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonSessionModule": () => (/* binding */ NonSessionModule)
/* harmony export */ });
/* harmony import */ var _base_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.module */ 67556);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing */ 84731);
/* harmony import */ var _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework-modules/elements/elements */ 78034);
/* harmony import */ var _framework_modules_cards_cardElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework-modules/cards/cardElements */ 65192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class NonSessionModule {
    constructor() {
    }
}
NonSessionModule.ɵfac = function NonSessionModule_Factory(t) { return new (t || NonSessionModule)(); };
NonSessionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NonSessionModule });
NonSessionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_2__.ElementsModule,
        _framework_modules_cards_cardElements__WEBPACK_IMPORTED_MODULE_3__.CardElementsModule
    ], imports: [[
            _routing__WEBPACK_IMPORTED_MODULE_1__.RoutingModule,
            _base_module__WEBPACK_IMPORTED_MODULE_0__.BaseModule,
            _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_2__.ElementsModule,
            _framework_modules_cards_cardElements__WEBPACK_IMPORTED_MODULE_3__.CardElementsModule
        ], _base_module__WEBPACK_IMPORTED_MODULE_0__.BaseModule,
        _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_2__.ElementsModule,
        _framework_modules_cards_cardElements__WEBPACK_IMPORTED_MODULE_3__.CardElementsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NonSessionModule, { imports: [_routing__WEBPACK_IMPORTED_MODULE_1__.RoutingModule,
        _base_module__WEBPACK_IMPORTED_MODULE_0__.BaseModule,
        _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_2__.ElementsModule,
        _framework_modules_cards_cardElements__WEBPACK_IMPORTED_MODULE_3__.CardElementsModule], exports: [_base_module__WEBPACK_IMPORTED_MODULE_0__.BaseModule,
        _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_2__.ElementsModule,
        _framework_modules_cards_cardElements__WEBPACK_IMPORTED_MODULE_3__.CardElementsModule] }); })();


/***/ }),

/***/ 84731:
/*!************************************************!*\
  !*** ./src/app/modules/non-session/routing.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutingModule": () => (/* binding */ RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ 39342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _component__WEBPACK_IMPORTED_MODULE_0__.NonSessionComponent,
        children: []
    }
];
class RoutingModule {
}
RoutingModule.ɵfac = function RoutingModule_Factory(t) { return new (t || RoutingModule)(); };
RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RoutingModule });
RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_non-session_module_ts.js.map