"use strict";
(self["webpackChunkmetadevClient"] = self["webpackChunkmetadevClient"] || []).push([["main"],{

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _services_routerService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/routerService */ 43512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);




class AppComponent {
    constructor(routerService) {
        this.routerService = routerService;
    }
    ngAfterViewInit() {
        this.routerService.openNonSession();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_routerService__WEBPACK_IMPORTED_MODULE_0__.RouterService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_routerService__WEBPACK_IMPORTED_MODULE_0__.RouterService])], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _modules_base_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/base.module */ 67556);
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.router */ 25285);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ 84548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_router__WEBPACK_IMPORTED_MODULE_2__.AppRouting,
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__.NgxChartsModule,
            _modules_base_module__WEBPACK_IMPORTED_MODULE_1__.BaseModule.forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_router__WEBPACK_IMPORTED_MODULE_2__.AppRouting,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__.NgxChartsModule, _modules_base_module__WEBPACK_IMPORTED_MODULE_1__.BaseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 25285:
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouting": () => (/* binding */ AppRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _services_constantsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/constantsService */ 12813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const appRoutes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent
    },
    {
        path: _services_constantsService__WEBPACK_IMPORTED_MODULE_1__.ConstantsService.ROUTE_NON_SESSION, loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_non-session_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/non-session/module */ 45121)).then(m => m.NonSessionModule)
    }
];
class AppRouting {
}
AppRouting.ɵfac = function AppRouting_Factory(t) { return new (t || AppRouting)(); };
AppRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRouting });
AppRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 78034:
/*!********************************************************!*\
  !*** ./src/app/framework-modules/elements/elements.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementsModule": () => (/* binding */ ElementsModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button-toggle */ 68491);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 7644);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ 81840);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ 66238);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 25852);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 88824);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 71412);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ 15754);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 49272);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 63186);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _mv_textarea_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mv-textarea/component */ 26122);
/* harmony import */ var _mv_field_generator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mv-field-generator/component */ 15184);
/* harmony import */ var _mv_textbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mv-textbox/component */ 52648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);


























class ElementsModule {
    constructor() {
        /* TODO document why this constructor is empty */
    }
}
ElementsModule.ɵfac = function ElementsModule_Factory(t) { return new (t || ElementsModule)(); };
ElementsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ElementsModule });
ElementsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            /**
             * Material Component Imports
             */
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBarModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__.MatButtonToggleModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinnerModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule,
            /**
             * metadev Compoenent  Imports
             */
            /**
             * Miscellaneous Imports
             */
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        ], 
        /**
         * Material Component Exports
         */
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBarModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__.MatButtonToggleModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinnerModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule,
        /**
         * Miscellaneous Exports
         */
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ElementsModule, { declarations: [
        /**
         * Material Component Declarations
         */
        /**
         * Metadev Client Compoenent Declarations
         */
        _mv_textarea_component__WEBPACK_IMPORTED_MODULE_0__.MvTextareaComponent,
        _mv_textbox_component__WEBPACK_IMPORTED_MODULE_2__.MvTextboxComponent,
        _mv_field_generator_component__WEBPACK_IMPORTED_MODULE_1__.MvFieldGeneratorComponent], imports: [
        /**
         * Material Component Imports
         */
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBarModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__.MatButtonToggleModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinnerModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule,
        /**
         * metadev Compoenent  Imports
         */
        /**
         * Miscellaneous Imports
         */
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule], exports: [
        /**
         * Material Component Exports
         */
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBarModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__.MatButtonToggleModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinnerModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule,
        /**
         * Metadev client Compoenents Exports
         */
        _mv_textarea_component__WEBPACK_IMPORTED_MODULE_0__.MvTextareaComponent,
        _mv_textbox_component__WEBPACK_IMPORTED_MODULE_2__.MvTextboxComponent,
        _mv_field_generator_component__WEBPACK_IMPORTED_MODULE_1__.MvFieldGeneratorComponent,
        /**
         * Miscellaneous Exports
         */
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule] }); })();


/***/ }),

/***/ 15184:
/*!****************************************************************************!*\
  !*** ./src/app/framework-modules/elements/mv-field-generator/component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MvFieldGeneratorComponent": () => (/* binding */ MvFieldGeneratorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _mv_textbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mv-textbox/component */ 52648);
/* harmony import */ var _mv_textarea_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mv-textarea/component */ 26122);





function MvFieldGeneratorComponent_div_3_app_mv_textbox_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-mv-textbox", 4);
} if (rf & 2) {
    const field_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r2.form[field_r1.key])("fd", ctx_r2.fd);
} }
function MvFieldGeneratorComponent_div_3_app_mv_textarea_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-mv-textarea", 4);
} if (rf & 2) {
    const field_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r3.form[field_r1.key])("fd", ctx_r3.fd);
} }
function MvFieldGeneratorComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MvFieldGeneratorComponent_div_3_app_mv_textbox_1_Template, 1, 2, "app-mv-textbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MvFieldGeneratorComponent_div_3_app_mv_textarea_2_Template, 1, 2, "app-mv-textarea", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", field_r1.value.controlType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "Input");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "Textarea");
} }
/**
 * Automated field Generator component
 * @fd - Formdata
 */
class MvFieldGeneratorComponent {
    ngOnInit() {
        this.form = this.fd.form;
        this.fields = this.fd.form.fields;
    }
}
MvFieldGeneratorComponent.ɵfac = function MvFieldGeneratorComponent_Factory(t) { return new (t || MvFieldGeneratorComponent)(); };
MvFieldGeneratorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MvFieldGeneratorComponent, selectors: [["app-mv-field-generator"]], inputs: { fd: "fd" }, decls: 5, vars: 3, consts: [[1, "col-6", 2, "padding", "auto", "margin", "auto"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [3, "field", "fd", 4, "ngSwitchCase"], [3, "field", "fd"]], template: function MvFieldGeneratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0)(1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Customer Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MvFieldGeneratorComponent_div_3_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 1, ctx.fields));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _mv_textbox_component__WEBPACK_IMPORTED_MODULE_0__.MvTextboxComponent, _mv_textarea_component__WEBPACK_IMPORTED_MODULE_1__.MvTextareaComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.KeyValuePipe], encapsulation: 2 });


/***/ }),

/***/ 26122:
/*!*********************************************************************!*\
  !*** ./src/app/framework-modules/elements/mv-textarea/component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MvTextareaComponent": () => (/* binding */ MvTextareaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 62544);







function MvTextareaComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MvTextareaComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.field.errorId, " ");
} }
/*
 * Wrapper class for angular material.
 * Unpacks values from the model to render a textarea
 * @ouput - valueChange - value change emitter.
 */
class MvTextareaComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.control = this.fd.formGroup.get(this.field.name);
    }
    valueChangeDetector($event) {
        this.valueChange.next(this.fd.getFieldValue(this.field.name));
    }
}
MvTextareaComponent.ɵfac = function MvTextareaComponent_Factory(t) { return new (t || MvTextareaComponent)(); };
MvTextareaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MvTextareaComponent, selectors: [["app-mv-textarea"]], inputs: { field: "field", fd: "fd" }, outputs: { valueChange: "valueChange" }, decls: 14, vars: 10, consts: [["appearance", "fill", 1, "col"], ["class", "optional", 4, "ngIf"], ["matPrefix", ""], ["matInput", "", 3, "formControl", "required", "readonly", "placeholder", "input"], ["matSuffix", ""], [4, "ngIf"], [1, "optional"]], template: function MvTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MvTextareaComponent_span_3_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MvTextareaComponent_Template_textarea_input_6_listener($event) { return ctx.valueChangeDetector($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MvTextareaComponent_div_13_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.field.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.field.isRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.prefix);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.field.placeHolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("required", ctx.field.isRequired)("readonly", ctx.field.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.hint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLabel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatHint, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError], encapsulation: 2 });


/***/ }),

/***/ 52648:
/*!********************************************************************!*\
  !*** ./src/app/framework-modules/elements/mv-textbox/component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MvTextboxComponent": () => (/* binding */ MvTextboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 62544);







function MvTextboxComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MvTextboxComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.field.errorId, " ");
} }
class MvTextboxComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.control = this.fd.formGroup.get(this.field.name);
    }
    valueChangeDetector($event) {
        this.valueChange.next(this.fd.getFieldValue(this.field.name));
    }
}
MvTextboxComponent.ɵfac = function MvTextboxComponent_Factory(t) { return new (t || MvTextboxComponent)(); };
MvTextboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MvTextboxComponent, selectors: [["app-mv-textbox"]], inputs: { field: "field", fd: "fd", type: "type" }, outputs: { valueChange: "valueChange" }, decls: 13, vars: 11, consts: [["appearance", "fill", 1, "col"], ["class", "optional", 4, "ngIf"], ["matPrefix", ""], ["matInput", "", 3, "type", "formControl", "required", "readonly", "placeholder", "input"], ["matSuffix", ""], [4, "ngIf"], [1, "optional"]], template: function MvTextboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MvTextboxComponent_span_3_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MvTextboxComponent_Template_input_input_6_listener($event) { return ctx.valueChangeDetector($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MvTextboxComponent_div_12_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.field.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.field.isRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.prefix);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.field.placeHolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("formControl", ctx.control)("required", ctx.field.isRequired)("readonly", ctx.field.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.hint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLabel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatHint, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError], styles: ["[_nghost-%COMP%]     .mat-form-field-infix {\n  font-family: Roboto-Medium;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.54);\n  letter-spacing: 0;\n  padding: 0;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  background: #F8F8F8 !important;\n  padding: 8px 4px 3px 14px !important;\n  height: 5.5vh;\n}\n\n[_nghost-%COMP%]     .mat-form-field-label {\n  font-family: Roboto-Regular;\n  font-size: 12px;\n  color: black;\n  letter-spacing: 0;\n  opacity: 0.54;\n  padding-bottom: 2px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field .mat-focused .mat-form-field-label {\n  font-family: Roboto-Regular;\n  font-size: 12px;\n  color: #004FAA;\n  letter-spacing: 0;\n  opacity: 1;\n}\n\n[_nghost-%COMP%]     .mat-input-element::-moz-placeholder {\n  opacity: 0.34;\n}\n\n[_nghost-%COMP%]     .mat-input-element::placeholder {\n  opacity: 0.34;\n}\n\n.optional[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0E7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFGRjs7QUFLQTtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFGSjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFDQTtFQUNFLGFBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkYiLCJmaWxlIjoiY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zYXNzL3ZhcmlhYmxlcyc7XG5cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcbiAgZm9udC1mYW1pbHk6IFJvYm90by1NZWRpdW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41NCk7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nOjA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQ6ICNGOEY4RjggIWltcG9ydGFudDtcbiAgcGFkZGluZzo4cHggNHB4IDNweCAxNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNS41dmg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBmb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgb3BhY2l0eTogMC41NDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMwMDRGQUE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7XG4gIG9wYWNpdHk6IDAuMzQ7XG59XG5cbi5vcHRpb25hbHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"] });


/***/ }),

/***/ 86230:
/*!*****************************************************************!*\
  !*** ./src/app/framework-modules/formdata/form/clientConfig.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientConfig": () => (/* binding */ ClientConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ClientConfig {
    constructor() {
        this.url = 'http://localhost:8080/a';
    }
}
ClientConfig.ɵfac = function ClientConfig_Factory(t) { return new (t || ClientConfig)(); };
ClientConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientConfig, factory: ClientConfig.ɵfac, providedIn: "root" });


/***/ }),

/***/ 53594:
/*!******************************************************************!*\
  !*** ./src/app/framework-modules/formdata/form/clientContext.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientContext": () => (/* binding */ ClientContext)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_routerService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/routerService */ 43512);


const USER = "_user";
const TOKEN = "_token";
class ClientContext {
    constructor(rs) {
        this.rs = rs;
        this.values = new Map();
        this.validPages = {};
        this.validPagesArray = [];
    }
    setToken(token) {
        this.setValue(TOKEN, token);
    }
    /**
     *
     * @param data vo returned by the server on a successful login
     */
    login(user) {
        this.setValue(USER, user);
        this.validPagesArray = [];
    }
    /**
     *
     * @param data vo returned by the server on a successful login
     */
    logout() {
        this.setValue(TOKEN, null);
        this.setValue(USER, null);
        this.rs.openNonSession();
    }
    /**
     * any data that  is to be saved as part of session.
     * This will survive page reloads, but not browser closure
     *
     * @param key
     * @param value
     */
    setValue(key, value) {
        this.values.set(key, value);
        if (value == null) {
            sessionStorage.removeItem(key);
        }
        else {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
    }
    /**
     * value of a field that is session scoped
     * @param key
     */
    getValue(key) {
        let value = this.values.get(key);
        if (value) {
            return value;
        }
        const s = sessionStorage.getItem(key);
        if (!s) {
            return s;
        }
        value = s;
        this.values.set(key, value);
        return value;
    }
    /**
     * details of logged-in user.
     */
    getToken() {
        return this.getValue(TOKEN);
    }
    /**
     * details of logged-in user.
     */
    getUser() {
        return this.getValue(USER);
    }
    /**
     * Returns the array of permitted screens for a user.
     */
    getPermittedScreens() {
        return this.validPagesArray;
    }
    /**
     * is the logged in user allowed to use this page?
     * @param pageId
     */
    isPageValid(pageId) {
        return this.validPages[pageId];
    }
}
ClientContext.ɵfac = function ClientContext_Factory(t) { return new (t || ClientContext)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_routerService__WEBPACK_IMPORTED_MODULE_0__.RouterService)); };
ClientContext.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClientContext, factory: ClientContext.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 61852:
/*!****************************************************************!*\
  !*** ./src/app/framework-modules/formdata/form/conventions.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Conventions": () => (/* binding */ Conventions)
/* harmony export */ });
/**
 * constants/conventions that are used across layers.
 * These are fixed at design time. deployment-time parameters can be found in Config
 */
class Conventions {
}
/**
 * HTTP headers
 */
Conventions.HEADER_SERVICE = '_s';
Conventions.HEADER_AUTH = 'Authorization';
/**
 * tags or field names in the paylaod back-and-forth
 */
Conventions.TAG_MESSAGES = 'messages';
Conventions.TAG_ALL_OK = 'allOk';
Conventions.TAG_DATA = 'data';
Conventions.TAG_LIST = 'list';
Conventions.TAG_MAX_ROWS = 'maxRows';
Conventions.TAG_CONDITIONS = 'conditions';
Conventions.TAG_FILTER_COMP = 'comp';
Conventions.TAG_FILTER_VALUE = 'value';
Conventions.TAG_FILTER_VALUE_TO = 'toValue';
/**
* special pre-defined service to get drop-down values
*/
Conventions.SERVICE_LIST = 'list';
/*
 * form I/O service prefixes
 */
Conventions.OP_FETCH = 'get';
Conventions.OP_NEW = 'create';
Conventions.OP_UPDATE = 'update';
Conventions.OP_DELETE = 'delete';
Conventions.OP_FILTER = 'filter';
Conventions.OP_BULK = 'bulk';
/*
 * filter operators
 */
Conventions.FILTER_EQ = '=';
Conventions.FILTER_NE = '!=';
Conventions.FILTER_LE = '<=';
Conventions.FILTER_LT = '<';
Conventions.FILTER_GE = '>=';
Conventions.FILTER_GT = '>';
Conventions.FILTER_BETWEEN = '><';
Conventions.FILTER_STARTS_WITH = '^';
Conventions.FILTER_CONTAINS = '~';
/*
 * value types of fields
 */
Conventions.TYPE_TEXT = 0;
Conventions.TYPE_INTEGER = 1;
Conventions.TYPE_DECIMAL = 2;
Conventions.TYPE_BOOLEAN = 3;
Conventions.TYPE_DATE = 4;
Conventions.TYPE_TIMESTAMP = 5;


/***/ }),

/***/ 39456:
/*!*********************************************************!*\
  !*** ./src/app/framework-modules/formdata/form/form.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _formData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formData */ 70784);

/**
 * represents the data model, both structure and run-time data
 */
class Form {
    constructor() {
        /**
         * for operations are offered to guests/unauthenticated/non-logged-in users?
         */
        this.serveGuests = false;
        // TODO document why this constructor is empty
    }
    /**
     * create a model (data-holder) for this form
     * @param serverAgent is injectable
     */
    newFormData(serverAgent) {
        return new _formData__WEBPACK_IMPORTED_MODULE_0__.FormData(this, serverAgent);
    }
    /**
     * create a model (data-holder) for this form
     * @param serverAgent is injectable
     */
    newPanelData(serverAgent) {
        return new _formData__WEBPACK_IMPORTED_MODULE_0__.PanelData(this, serverAgent);
    }
    /**
     *
     * @param operation
     * @returns service name of the form "operation-formName", say filter-costomer
     */
    getServiceName(operation) {
        if (this.opAllowed(operation)) {
            return operation + '_' + this.getName();
        }
        console.error('Operation ' + operation + ' not allowed on form ' + this.getName());
        return null;
    }
    /**
     *
     * @param operation
     * @returns true of this operation is designed for this form
     */
    opAllowed(operation) {
        if (this.opsAllowed && this.opsAllowed[operation]) {
            return true;
        }
        console.error('Form ', this.getName(), ' is not designed for ', operation, ' operation');
        return false;
    }
}


/***/ }),

/***/ 70784:
/*!*************************************************************!*\
  !*** ./src/app/framework-modules/formdata/form/formData.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormData": () => (/* binding */ FormData),
/* harmony export */   "PanelData": () => (/* binding */ PanelData),
/* harmony export */   "TabularData": () => (/* binding */ TabularData)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _conventions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conventions */ 61852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/throw */ 83204);





class PanelData {
    constructor(form, serverAgent) {
        this.form = form;
        this.serverAgent = serverAgent;
        /**
        * data as received from the server
        */
        this.data = {};
        /**
         * data for child forms that ane non-tabular
         */
        this.childData = new Map();
        /**
        * data for child forms that are tabukar
        */
        this.childTabularData = new Map();
        /**
         * set to true when a service is requested from the server.
         * this can be used by the view-component to indicate aciton
         */
        this.waitingForServerResponse = false;
        /**
           * errors returned by the server
           */
        this.errors = [];
        /**
         * warnings returned by the server
         */
        this.warnings = [];
        /**
         * informations messages received by the server
         */
        this.info = [];
        this.hasFg = false;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
        if (!form.childForms) {
            return;
        }
        form.childForms.forEach((child, key) => {
            if (child.isTabular) {
                this.childTabularData.set(key, new TabularData(child.form, serverAgent, child.isEditable));
            }
            else {
                if (child.isEditable) {
                    this.childData.set(key, new FormData(child.form, serverAgent));
                }
                else {
                    this.childData.set(key, new PanelData(child.form, serverAgent));
                }
            }
        });
    }
    /**
     * get data as a Value Object. HAs values as received from the server.
     * Any input field/control DOES not have the lates value entered by the user.
     * getFieldValue() must be used to get the current value of an input field.
     */
    getRawData() {
        return this.data;
    }
    /**
    * @override data is to be set to form group
    * @param data as received from a service request
    */
    setAll(data) {
        if (!data) {
            data = {};
        }
        this.data = data;
        if (this.hasFg) {
            this.formGroup.patchValue(data);
        }
        this.childData.forEach((fd, key) => {
            fd.setAll(data[key] || {});
        });
        this.childTabularData.forEach((table, key) => {
            table.setAll(data[key] || []);
        });
    }
    /**
     * @returns object contianing all data from form controls. as well as all child forms.
     * Note that this data will not contain fields from non-form panel
     */
    extractAll() {
        const d = this.hasFg ? this.formGroup.value : this.data;
        this.childData.forEach((fd, key) => {
            d[key] = fd.extractAll();
        });
        this.childTabularData.forEach((table, key) => {
            d[key] = table.extractAll();
        });
        return d;
    }
    /**
     * @returns object contianing all data from form controls, or raw data as recived, but no tany child-data.
     * That is why the returned type id FieldValues and not Vo
     */
    extractAllFields() {
        return this.hasFg ? this.formGroup.value : this.data;
    }
    /**
     *
     * @param name name of the field. Valid field names can be picked up from
     * static definitions in the form
     * @param value
     */
    setFieldValue(name, value) {
        const fc = this.formGroup.controls[name];
        if (fc) {
            fc.setValue(value);
        }
        this.data[name] = value;
    }
    /**
     *
     * @param values name-value pairs to be se to this data
     */
    setFieldValues(values) {
        Object.keys(values).forEach(key => {
            this.setFieldValue(key, values[key]);
        });
    }
    /**
      *
      * @param name name of the field.
      * concrete classes over-ride this method to restict name values to their valid list
      * @returns value of this field, or null/undefined if this is not a field
      */
    getFieldValue(name) {
        const fc = this.formGroup.controls[name];
        if (fc) {
            return fc.value;
        }
        return this.data[name];
    }
    /**
     * @param names to be extracted
     * @returns data-object with name-values. null if no value is found for a field
     */
    getFieldValues(names) {
        let values = {};
        names.forEach(key => {
            values[key] = this.getFieldValue(key);
        });
        return values;
    }
    /**
     *
     * @param name name of the child field.
     * Valid child names are available as static members of the form
     * @returns appropriate data for the child form. null/undefined if no such child
     */
    getChildData(name) {
        if (this.childData) {
            return this.childData.get(name);
        }
        return null;
    }
    /**
     *
     * @param name name of the child field.
     * Valid child names are available as static members of the form
     * @returns appropriate data for the child form. null/undefined if no such child
     */
    getChildTable(name) {
        if (this.childTabularData) {
            return this.childTabularData.get(name);
        }
        return null;
    }
    /**
     * extarct key fields only
     */
    extractKeyFields() {
        if (this.form.keyFields && this.form.keyFields.length) {
            return this.extractFields(this.form.keyFields);
        }
        console.info('Form has no keys. Doing a get operation with all fields');
        return this.extractAllFields();
    }
    extractFields(fields) {
        if (!fields || !fields.length) {
            return null;
        }
        const data = {};
        fields.forEach(f => {
            data[f] = this.getFieldValue(f);
        });
        return data;
    }
    /**
     * reset the messages. typically called when user dismisses them, or before a server-request is made
     */
    resetMessages() {
        this.errors = [];
        this.warnings = [];
        this.info = [];
    }
    /**
     * messages are set to this model, from where the
     * html component can pick it up for rendering
     * @param messages
     */
    setMessages(messages) {
        this.resetMessages();
        if (messages && messages.forEach) {
            messages.forEach(msg => {
                switch (msg.type) {
                    case "error":
                        this.errors.push(msg.text);
                        break;
                    case "warning":
                        this.warnings.push(msg.text);
                        break;
                    default:
                        this.info.push(msg.text);
                        break;
                }
            });
        }
        else {
            console.error('Error messages received from server', messages);
        }
    }
    /**
     * invoke a specific service with your own pay load, and receive data into this form data
     * @param serviceName service name.
     * @param data input expected by the service
     */
    callService(serviceName, data) {
        this.waitingForServerResponse = true;
        this.resetMessages();
        return this.serverAgent.serve(serviceName, { data: data, asQueryParams: true }, !this.form.serveGuests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(vo => {
            this.waitingForServerResponse = false;
            this.setAll(vo);
            return vo;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(msgs => {
            this.waitingForServerResponse = false;
            this.setMessages(msgs);
            throw msgs;
        }));
    }
    /**
    * get data for this entity based on primary or unique key
    * caller has to enaure that either key fields, or unique fields have valid values in the model before making this call
    */
    fetchData() {
        const serviceName = this.form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FETCH);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FETCH + ' operation not allowed');
        }
        const data = this.extractKeyFields();
        if (data == null) {
            const msg = 'Key values not found. Fetch request abandoned';
            console.error(msg);
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(msg);
        }
        return this.callService(serviceName, data);
    }
    /**
     * fetch data based the provided input. Use this insted of fetch() if the API
     * requires some data that is not primary key
     * @param data
     */
    fetchFor(data) {
        const serviceName = this.form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FETCH);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FETCH + ' operation not allowed');
        }
        return this.callService(serviceName, data);
    }
    /**
     * get filtered rows from the server.
     * The data received from the server is set to the child-model (PanelData/formData) before returning it to the caller
     * @param child for which data is to be fecthed from the serber
     * @param filters to be applied on the child to get data
     */
    fetchChildren(child, filters) {
        const td = this.childTabularData.get(child);
        if (!td) {
            const msg = child + ' is not a tabular child of this panel. operation abandoned';
            console.error(msg);
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(msg);
        }
        const childForm = this.form.childForms.get(child).form;
        const serviceName = childForm.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FILTER);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FILTER + ' operation not allowed.');
        }
        this.waitingForServerResponse = true;
        this.resetMessages();
        return this.serverAgent.serve(serviceName, { data: filters }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(vo => {
            const data = vo.list;
            td.setAll(data);
            this.waitingForServerResponse = false;
            return data;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(msgs => {
            this.waitingForServerResponse = false;
            this.setMessages(msgs);
            throw msgs;
        }));
    }
    /**
     * filter rows for this form and return raw-rows.
     * Note that the returned data is NOT set to any model before returning it the caller
     */
    filter(filters) {
        const serviceName = this.form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FILTER);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FILTER + ' operation is not allowed.');
        }
        const payload = filters ? { data: filters } : {};
        this.resetMessages();
        this.waitingForServerResponse = false;
        return this.serverAgent.serve(serviceName, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(vo => {
            this.waitingForServerResponse = false;
            return vo.list;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(msgs => {
            console.error('catching error in filters fd', msgs);
            this.waitingForServerResponse = false;
            this.setMessages(msgs);
            throw msgs;
        }));
    }
    /**
     * filter rows for this form and return raw-rows.
     * Note that the returned data is NOT set to any model before returning it the caller
     */
    bulkUpdate(data) {
        const serviceName = this.form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_BULK);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_BULK + ' operation is not allowed.');
        }
        this.resetMessages();
        this.waitingForServerResponse = true;
        return this.serverAgent.serve(serviceName, { data: { list: data } }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(_vo => {
            this.waitingForServerResponse = false;
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(msgs => {
            this.waitingForServerResponse = false;
            this.setMessages(msgs);
            throw msgs;
        }));
    }
    /**
     * validate all editable fields in this form
     */
    validateForm() {
        this.formGroup.updateValueAndValidity();
        let ok = this.formGroup.valid;
        if (!ok) {
            console.error('Form ' + this.form.getName() + ' validation failed. Fields in error:', this.getFieldsInError());
        }
        this.childData.forEach((fd) => {
            const b = fd.validateForm();
            ok = ok && b;
        });
        this.childTabularData.forEach((table) => {
            const b = table.validateForm();
            ok = ok && b;
        });
        return ok;
    }
    /**
     * get list of invalid fields in this form.
     * if a child is in error, this does not get the actualfield in the child, but return child itsemf as a field
     */
    getFieldsInError() {
        const result = [];
        if (this.formGroup.valid) {
            return result;
        }
        Object.keys(this.formGroup.controls).forEach((key) => {
            const cntr = this.formGroup.controls[key];
            if (cntr.invalid) {
                result.push(key);
            }
        });
        return result;
    }
    /**
     * should we convert this to a promise? Or should we have some standard way of handling error and success?
     */
    saveAsNew() {
        const serviceName = this.form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_NEW);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_NEW + ' operation is not allowed.');
        }
        if (!this.validateForm()) {
            //we have to ensure that the field in error is brought to focus!!
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError('One or more fields are in error. Please edit them and re-submit');
        }
        const data = this.extractAll();
        this.waitingForServerResponse = true;
        this.resetMessages();
        return this.serverAgent.serve(serviceName, { data: data }, !this.form.serveGuests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(vo => {
            this.waitingForServerResponse = false;
            return vo;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(msgs => {
            this.setErrorFields(msgs);
            this.waitingForServerResponse = false;
            this.setMessages(msgs);
            console.error(msgs);
            throw new Error("Server returned with errors ");
        }));
    }
    /**
     * @param msgs fields in error sent by the server
     * Manually setting error state to the fields sent by the server
     */
    setErrorFields(msgs) {
        msgs.forEach(element => {
            this.formGroup.get(element.fieldName).setErrors({ 'Invalid': true });
            this.formGroup.markAllAsTouched();
        });
    }
    /**
     * update operation. WHat do we do after successful operation?
     */
    save() {
        const serviceName = this.form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_UPDATE);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_UPDATE + ' operation is not allowed.');
        }
        if (!this.validateForm()) {
            //we have to ensure that the field in error is brought to focus!!
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError('Fileds that have errors :' + this.getFieldsInError().join(','));
        }
        const data = this.extractAll();
        this.waitingForServerResponse = true;
        this.resetMessages();
        return this.serverAgent.serve(serviceName, { data: data }, !this.form.serveGuests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(vo => {
            this.waitingForServerResponse = false;
            //we do not set back values in updaetmode
            return vo;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(msgs => {
            this.waitingForServerResponse = false;
            this.setMessages(msgs);
            throw msgs;
        }));
    }
    /**
     * delete this entity
     */
    delete() {
        const serviceName = this.form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_DELETE);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_DELETE + ' operation is not allowed.');
        }
        const data = this.extractKeyFields();
        this.waitingForServerResponse = true;
        this.resetMessages();
        return this.serverAgent.serve(serviceName, { data: data, asQueryParams: false }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(vo => {
            this.waitingForServerResponse = false;
            //we do not set back values into fd
            return vo;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(msgs => {
            this.waitingForServerResponse = false;
            this.setMessages(msgs);
            throw msgs;
        }));
    }
    /**
     *
     * @param voArray ~ array of Vo
     * @param form ~ form of the fd
     * @param sa ~ ServerAgent
     * @returns vo as an array of FD
     * Generally used in bulk update operations
     */
    toFdArray(voArray, form, sa) {
        let fdArray = [];
        voArray.forEach(vo => {
            const fd = form.newFormData(sa);
            fd.setAll(vo);
            fdArray.push(fd);
        });
        return fdArray;
    }
    /**
     *
     * @param fdArray ~ Array of FormData to be converted to
     * @returns an array of vo
     * Generally used in bulk update operations
     */
    toVoArray(fdArray) {
        let voArray = [];
        fdArray.forEach(fd => {
            voArray.push(fd.extractAll());
        });
        return voArray;
    }
}
/**
 * represents the data contained in a form. Manages two-way binding with input fields in the form
 */
class FormData extends PanelData {
    constructor(f, sa) {
        super(f, sa);
        this.hasFg = true;
        const ctrls = this.form.controls;
        this.form.fields.forEach((field, key) => {
            const ctrl = ctrls.get(key) || [];
            const fc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(field.defaultValue, ctrl);
            this.formGroup.addControl(key, fc);
        });
        this.handleDropDowns(f);
    }
    setAList(name, list) {
        const field = this.formGroup.get(name);
        if (!field) {
            console.error(name + ' is not a field but a drop-down is being set to it');
            return;
        }
        this.lists[name] = list;
        if (!field.value) {
            let value = '';
            if (list && list[0]) {
                value = list[0].value;
            }
            if (value) {
                field.setValue(value);
            }
        }
    }
    /**
     * set drop-down list of values for a field.
     * it may be available locally, or we my have to get it from the server
     * @param field for which drop-down list id to be fetched
     * @param key value of the key field,if this is a keyed-list
     */
    setListValues(field, key) {
        if (field.listKey && !key) {
            this.setAList(field.name, []);
            return;
        }
        if (field.keyedList) {
            /*
             * design-time list. locally avaliable
             */
            let arr = field.keyedList[key];
            if (!arr) {
                console.error('Design time list of values for drop-down not available for key=' + key);
                arr = [];
            }
            this.setAList(field.name, arr);
            return;
        }
        /**
         * we have to ask the server to get this
         */
        let data;
        if (field.listKey) {
            data = { list: field.listName, key: key };
        }
        else {
            data = { list: field.listName };
        }
        const obs = this.serverAgent.serve(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.SERVICE_LIST, { data: data });
        obs.subscribe(vo => {
            const arr = vo['list'];
            if (arr) {
                this.setAList(field.name, arr);
            }
            else {
                console.error('Server returned a respnse with no list in it. Drop downwill not work for field ' + field.name);
            }
        }, msgs => {
            console.error('Error while receiving list values for field ' + field.name + JSON.stringify(msgs));
        });
    }
    /**
     *
     * @param f form for which we are handling drop-downs.
     */
    handleDropDowns(f) {
        if (!f.listFields) {
            return null;
        }
        this.lists = {};
        f.listFields.forEach(nam => {
            const field = f.fields.get(nam);
            if (field.valueList) {
                this.setAList(nam, field.valueList);
            }
            else {
                this.setAList(nam, []);
                if (field.listKey) {
                    const fc = this.formGroup.get(field.listKey);
                    if (!fc) {
                        console.error("Unable to find form control named " + field.listKey + " drop down for field " + field.name + " will not work properly");
                    }
                    else {
                        const val = fc.value;
                        if (val) {
                            this.setListValues(field, val);
                        }
                        fc.valueChanges.subscribe((value) => this.setListValues(field, value));
                    }
                }
                else {
                    //fixed list, but we have to get it from server at run time
                    this.setListValues(field, null);
                }
            }
        });
    }
    /**
     * validate all editable fields in this form
     */
    validateForm() {
        this.formGroup.updateValueAndValidity();
        if (!this.formGroup.valid) {
            this.formGroup.setErrors({ 'err': 'Please enter a valid value' });
            this.formGroup.markAllAsTouched();
            return false;
        }
        const vals = this.form.validations;
        let allOk = true;
        if (vals) {
            for (const v of this.form.validations) {
                /**
                 * n is name, f is field, c is cntrol and v is value
                 */
                const n1 = v.f1;
                const n2 = v.f2;
                const f1 = this.form.fields.get(n1);
                const f2 = this.form.fields.get(n2);
                const v1 = this.getFieldValue(n1);
                const v2 = this.getFieldValue(n2);
                const c1 = this.formGroup.get(n1);
                const c2 = this.formGroup.get(n2);
                let isDateType = false;
                if (f1 && f2 && f1.valueType == _conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.TYPE_DATE && f2.valueType == _conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.TYPE_DATE) {
                    isDateType = true;
                }
                const valType = v.type;
                let ok;
                if (valType === 'range') {
                    ok = this.validateRange(v1, v2, v.isStrict, isDateType);
                }
                else if (valType === 'incl') {
                    ok = this.validateInclPair(v1, v2, v.value);
                }
                else if (valType === 'excl') {
                    ok = this.validateExclPair(v1, v2, v.atLeastOne);
                }
                else {
                    console.error('Form validation type ' + valType + ' is not valid. validation ignored');
                    ok = true;
                }
                if (!ok) {
                    console.error('Inter field validation failed');
                    const err = { interfield: valType, errorId: v.errorId };
                    if (c1 && f1.controlType != 'Hidden' && f1.controlType != 'Output') {
                        c1.setErrors(err);
                    }
                    if (c2 && f2.controlType != 'Hidden' && f2.controlType != 'Output') {
                        c2.setErrors(err);
                    }
                    allOk = false;
                }
            }
        }
        if (!allOk) {
            console.error('Inter-field validaiton failed');
            return false;
        }
        this.childData.forEach((fd, key) => {
            const b = fd.validateForm();
            if (!b) {
                console.error('Child validation failed');
            }
            allOk = allOk && b;
        });
        this.childTabularData.forEach((table, key) => {
            const b = table.validateForm();
            if (!b) {
                console.error('Child Table validation failed');
            }
            allOk = allOk && b;
        });
        return allOk;
    }
    /**
     * check if v1 to v2 us a range
     * @param v1
     * @param v2
     * @param useStrict if true, v2 must be > v2, v1 == v2 woudn't cut
     */
    validateRange(v1, v2, equalOk, dateType) {
        if (dateType) {
            console.error('Date comparison not yet implementd. returning true');
            return true;
        }
        const n1 = v1;
        const n2 = v2;
        if (isNaN(n1) || isNaN(n2) || n2 > n1) {
            return true;
        }
        if (n1 > n2) {
            return false;
        }
        //equal. is it ok?
        return equalOk;
    }
    /**
     * two fields have to be both specified or both skipped.
     * if value is specified, it means that the rule is applicable if v1 == value
     * @param v1
     * @param v2
     * @param value
     */
    validateInclPair(v1, v2, value) {
        /*
         * we assume v1 is specified when a value is given.
         * However, if value is specified, then it has to match it'
         */
        const v1Specified = v1 && (!value || value == v1);
        if (v1Specified) {
            if (v2) {
                return true;
            }
            return false;
        }
        // v1 is not specified, so v2 should not be specified
        if (v2) {
            return false;
        }
        return true;
    }
    /**
     *
     * @param errorId v1 and v2 are exclusive
     * @param primaryField
     * @param otherField
     * @param atLeastOne if true, exactly one of teh twoto be specified
     */
    validateExclPair(v1, v2, noneOk) {
        if (v1) {
            if (v2) {
                return false;
            }
            return true;
        }
        if (v2) {
            return true;
        }
        //none specifield, is it ok?
        return noneOk;
    }
    /**
     *
     * @param fieldName name of the drop-down field
     * @returns the displayed value (not the internal value) of this field
     */
    getDisplayedValueOf(fieldName) {
        const list = this.lists[fieldName];
        if (!list) {
            return '';
        }
        const val = this.getFieldValue(fieldName);
        if (!val) {
            return '';
        }
        const n = list.length;
        for (let i = 0; i < n; i++) {
            const sel = list[i];
            if (sel.value == val) {
                return sel.text;
            }
        }
        return '';
    }
}
/**
 * represents an array of panel data or form data
 */
class TabularData {
    constructor(form, serverAgent, isEditable) {
        this.form = form;
        this.serverAgent = serverAgent;
        this.isEditable = isEditable;
        this.childData = [];
    }
    /**
     * set data to this panel
     * @param data
     */
    setAll(data) {
        this.childData.length = 0;
        data.forEach(vo => {
            let fd;
            if (this.isEditable) {
                fd = new FormData(this.form, this.serverAgent);
            }
            else {
                fd = new PanelData(this.form, this.serverAgent);
            }
            fd.setAll(vo);
            this.childData.push(fd);
        });
    }
    /**
     * extract data from each of the child-panel into an array
     */
    extractAll() {
        const data = [];
        this.childData.forEach(fd => data.push(fd.extractAll()));
        return data;
    }
    /**
     * validate all the forms
     * @returns true if all ok. false if any one form-control is in error, or any custom-validaiton fails
     */
    validateForm() {
        let allOk = true;
        this.childData.forEach(fd => {
            const ok = fd.validateForm();
            allOk = allOk && ok;
        });
        return allOk;
    }
    /**
     * append a default data model to this array
     */
    appendRow() {
        let fd;
        if (this.isEditable) {
            fd = new FormData(this.form, this.serverAgent);
        }
        else {
            fd = new PanelData(this.form, this.serverAgent);
        }
        this.childData.push(fd);
        return fd;
    }
    /**
      * append a default data model to this array
      */
    removeRow(idx) {
        this.childData.splice(idx);
    }
}


/***/ }),

/***/ 47877:
/*!*****************************************************************!*\
  !*** ./src/app/framework-modules/formdata/form/serviceAgent.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceAgent": () => (/* binding */ ServiceAgent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _conventions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conventions */ 61852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ 99464);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/throw */ 83204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _clientConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientConfig */ 86230);
/* harmony import */ var _clientContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clientContext */ 53594);
/* harmony import */ var src_app_services_messageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/messageService */ 59496);











/**
 * A wrapper on HttpClient to take care of our protocols
 * Draws heavily on Observables. If you are tounderstand/maintain this code,  you MUST be thorough with the Observables
 */
class ServiceAgent {
    constructor(http, config, ctx, ms) {
        this.http = http;
        this.config = config;
        this.ctx = ctx;
        this.ms = ms;
    }
    /**
     * serve this service. we use a strict service oriented architecture,
     * where in the only thing the client can ask the server is to serve a service.
     * There is no concept of resources or operations. Any such concepts are to be
     * implemented using the service paradigm.
     * @param serviceName  name of the service to be requested
     * @param data input data for the request
     * @param asQueryParams true if the data is just a set of name-string params, and the srver expects them in query string
     * @param headers any special headers to be communicated. Typically for additional authentication.
     * @param withAuth true if the request is to be sent with auth. If auth is not present, this wil trigger a login
     */
    serve(serviceName, options = {}, withAuth = true) {
        const token = this.ctx.getToken();
        if (withAuth && !token) {
            //not logged-in.To be re-tried after  a successful login
            return this.notLoggedIn({ serviceName: serviceName, options: options, withAuth: withAuth });
        }
        const headers = options.headers || {};
        headers[_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.HEADER_SERVICE] = serviceName;
        if (withAuth) {
            headers[_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.HEADER_AUTH] = token;
        }
        let data = options.data || null;
        let params = null;
        if (data && options.asQueryParams) {
            params = this.toParams(data);
        }
        const obs = this.http.post(this.config.url, data, { observe: "response", headers: headers, params: params });
        return obs.map(resp => {
            if (!resp.ok) {
                const msg = 'Server Error. http-status :' + resp.status + '=' + resp.statusText + (resp.body ? 'Response: ' + JSON.stringify(resp.body) : '');
                console.error(msg);
                throw { type: 'error', id: 'serverError', text: msg };
            }
            //no-news is good-news!!
            if (!resp.body || resp.body === {}) {
                return {};
            }
            const { messages, allOk, data, token } = resp.body;
            if (allOk) {
                if (token) {
                    this.ctx.setToken(token);
                }
                if (messages) {
                    if (messages[0].type == 'info') {
                        this.ms.showInfo(messages[0].text);
                        throw messages;
                    }
                }
                return data;
            }
            if (messages) {
                this.ms.showError(messages[0].text);
                console.error('Server returned with errors :', messages);
                throw messages;
            }
            const msg = 'Server Error. server reported a failure, but did not return any error message';
            console.error(msg);
            throw [{ type: 'error', id: 'serverError', text: msg }];
        });
    }
    /**
     * filter rows for a form and return raw-rows.
     * Note that the returned data is NOT set to any model before returning it the caller
     */
    filter(form, filters) {
        const serviceName = form.getServiceName(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FILTER);
        if (!serviceName) {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable.throwError(_conventions__WEBPACK_IMPORTED_MODULE_0__.Conventions.OP_FILTER + ' operation is not allowed.');
        }
        const obs = this.serve(serviceName, { data: filters });
        return obs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(vo => {
            return vo.list;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(msgs => {
            console.error('catching in sa');
            throw msgs;
        }));
    }
    /**
     *
     * @param call parameters for serve that was interrupted.
     * We have to design a way to return an observable that works after a successful login.
     */
    notLoggedIn(params) {
        /**
         * what we want to do is:
         * 1. show a modal panel and accept credentials.
         * 2. call login service with these credentials.
         * 3. on successful login, make this service request again.
         * Logic would be quite tricky becaue we have t0 return an observable right now that triggers all these..
         ^ for te time being, we just throw-up our hands!!!
         */
        const msg = 'Sorry you are not logged in. Please try again after logging in';
        this.ms.showError('OOPS! Your Account was logged out! Please Login Again!');
        this.ctx.logout();
        return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable((observer) => {
            const { next, error } = observer;
            error('msg');
        });
    }
    toParams(data) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpParams();
        for (const a in data) {
            if (data.hasOwnProperty(a)) {
                const val = data[a] || "";
                params.set(a, val.toString());
            }
        }
        return params;
    }
    /**
     * initiates a file-down load by the browser with supplied data as content
     * @param data  to be downloaded
     * @param fileName naem of the file to be downloaded as
     */
    download(data, fileName) {
        const json = JSON.stringify(data);
        const blob = new Blob([json], { type: 'octet/stream' });
        const url = window.URL.createObjectURL(blob);
        const a = window.document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.target = '_blank';
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}
ServiceAgent.ɵfac = function ServiceAgent_Factory(t) { return new (t || ServiceAgent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_clientConfig__WEBPACK_IMPORTED_MODULE_3__.ClientConfig), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_clientContext__WEBPACK_IMPORTED_MODULE_4__.ClientContext), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_services_messageService__WEBPACK_IMPORTED_MODULE_5__.MessageService)); };
ServiceAgent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: ServiceAgent, factory: ServiceAgent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 12740:
/*!****************************************************************!*\
  !*** ./src/app/framework-modules/formdata/gen/customerForm.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerFd": () => (/* binding */ CustomerFd),
/* harmony export */   "CustomerForm": () => (/* binding */ CustomerForm)
/* harmony export */ });
/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/form */ 39456);
/* harmony import */ var _form_formData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/formData */ 70784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class CustomerForm extends _form_form__WEBPACK_IMPORTED_MODULE_0__.Form {
    constructor() {
        super();
        this.customerId = {
            name: 'customerId',
            controlType: 'Hidden',
            label: 'customerId',
            valueType: 1,
            errorId: 'invalidFlexibleId',
            minValue: -1,
            maxValue: 9999999999999
        };
        this.name = {
            name: 'name',
            controlType: 'Input',
            label: 'Customer Name',
            isRequired: true,
            valueType: 0,
            errorId: 'invalidName',
            maxLength: 150
        };
        this.email = {
            name: 'email',
            controlType: 'Input',
            label: 'Email for Customer',
            isRequired: true,
            valueType: 0,
            errorId: 'invalidEmail',
            maxLength: 1000
        };
        this.addressLine1 = {
            name: 'addressLine1',
            controlType: 'Textarea',
            label: 'Address Line 1',
            valueType: 0,
            errorId: 'invalidText',
            maxLength: 1000
        };
        this.serveGuests = true;
        this.fields = new Map();
        this.controls = new Map();
        this.controls.set('customerId', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(-1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.max(9999999999999)]);
        this.fields.set('customerId', this.customerId);
        this.controls.set('name', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(150)]);
        this.fields.set('name', this.name);
        this.controls.set('email', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(1000)]);
        this.fields.set('email', this.email);
        this.controls.set('addressLine1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(1000)]);
        this.fields.set('addressLine1', this.addressLine1);
        this.opsAllowed = { create: true, update: true };
        this.keyFields = ["customerId"];
    }
    static getInstance() {
        return CustomerForm._instance;
    }
    getName() {
        return 'customer';
    }
}
CustomerForm._instance = new CustomerForm();
class CustomerFd extends _form_formData__WEBPACK_IMPORTED_MODULE_1__.FormData {
    constructor(form, sa) {
        super(form, sa);
    }
    setFieldValue(name, value) {
        super.setFieldValue(name, value);
    }
    getFieldValue(name) {
        return super.getFieldValue(name);
    }
}


/***/ }),

/***/ 67556:
/*!****************************************!*\
  !*** ./src/app/modules/base.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseModule": () => (/* binding */ BaseModule)
/* harmony export */ });
/* harmony import */ var _services_routerService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/routerService */ 43512);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework-modules/elements/elements */ 78034);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _services_messageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/messageService */ 59496);
/* harmony import */ var _non_session_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./non-session/component */ 39342);
/* harmony import */ var _non_session_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./non-session/landing-page/component */ 16683);
/* harmony import */ var _non_session_landing_page_sample_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./non-session/landing-page/sample-page/component */ 51625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









/**
 * Do not import any angular material module in this file unless it it the only option
 * Material modules to be imported in '../framework-modules/elements/elements.ts'
 */
class BaseModule {
    static forRoot() {
        return {
            ngModule: BaseModule,
            providers: [
                _services_routerService__WEBPACK_IMPORTED_MODULE_0__.RouterService,
                _services_messageService__WEBPACK_IMPORTED_MODULE_2__.MessageService
            ]
        };
    }
}
BaseModule.ɵfac = function BaseModule_Factory(t) { return new (t || BaseModule)(); };
BaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BaseModule });
BaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_1__.ElementsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        ], 
        /**
         * App Components
         */
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_1__.ElementsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BaseModule, { declarations: [
        /**
         * All components to be declared here
         */
        /**
        * Landing Componenet
        */
        _non_session_component__WEBPACK_IMPORTED_MODULE_3__.NonSessionComponent,
        _non_session_landing_page_component__WEBPACK_IMPORTED_MODULE_4__.LandingComponent,
        /**
         * Non Session Group Panels
         */
        _non_session_landing_page_sample_page_component__WEBPACK_IMPORTED_MODULE_5__.ExampleComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_1__.ElementsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule], exports: [
        /**
         * App Components
         */
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _framework_modules_elements_elements__WEBPACK_IMPORTED_MODULE_1__.ElementsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        /**
         * All components to be declared here
         */
        /**
        * Landing Componenet
        */
        _non_session_component__WEBPACK_IMPORTED_MODULE_3__.NonSessionComponent,
        _non_session_landing_page_component__WEBPACK_IMPORTED_MODULE_4__.LandingComponent,
        /**
         * Non Session Group Panels
         */
        _non_session_landing_page_sample_page_component__WEBPACK_IMPORTED_MODULE_5__.ExampleComponent] }); })();


/***/ }),

/***/ 39342:
/*!**************************************************!*\
  !*** ./src/app/modules/non-session/component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonSessionComponent": () => (/* binding */ NonSessionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page/component */ 16683);



const _c0 = ["primaryContainer"];
/**
 * temp during development. will come from menuService
 */
const ROUTES = {
    Landing: _landing_page_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent,
};
class NonSessionComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.selected = false;
        this.sideNav = [];
        this.sideNavLength = 0;
    }
    ngOnInit() {
        /**
         * after we write menuService, we will use it this way.
         * this.menus = this.menuService.getMainMenu();
         */
        this.menu = ROUTES;
        this.navigate('Landing');
    }
    /**
     *
     * @param panelName landing panel to be opened in the container
     * @param data any optional data t be passed to the landing panel
     */
    navigate(panelName, data) {
        this.container.clear();
        const factory = this.componentFactoryResolver.resolveComponentFactory(this.menu[panelName]);
        const c = this.container.createComponent(factory);
        c.instance.parentPanel = this;
        c.instance.inputData = data;
        c.changeDetectorRef.detectChanges();
    }
    navigation(moduleId) {
        this.selected = true;
        this.navigate(moduleId);
    }
}
NonSessionComponent.ɵfac = function NonSessionComponent_Factory(t) { return new (t || NonSessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver)); };
NonSessionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NonSessionComponent, selectors: [["app-non-session"]], viewQuery: function NonSessionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 2, vars: 0, consts: [["primaryContainer", ""]], template: function NonSessionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 16683:
/*!***************************************************************!*\
  !*** ./src/app/modules/non-session/landing-page/component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sample_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample-page/component */ 51625);



const _c0 = ["secondaryContainer"];
/**
 Const to map the screen-component to screen-name to rended the facotry
 */
const MENU = {
    Login: { comp: _sample_page_component__WEBPACK_IMPORTED_MODULE_0__.ExampleComponent },
};
class LandingComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.sidenav = false;
    }
    ngOnInit() {
        this.cardHeader = "Students";
        /**
         Navigate to Student List page on app load
         */
        this.navigate("Login", {});
    }
    /**
     *
     * @param compName is the name of the component to navigate to
     * @param data is for any related data needed
     */
    navigate(compName, data) {
        this.container.clear();
        const factory = this.componentFactoryResolver.resolveComponentFactory(MENU[compName].comp);
        const c = this.container.createComponent(factory);
        c.instance.inputData = data;
        c.instance.parentPanel = this;
        c.changeDetectorRef.detectChanges();
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver)); };
LandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing-page"]], viewQuery: function LandingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, inputs: { inputData: "inputData", parentPanel: "parentPanel" }, decls: 2, vars: 0, consts: [["secondaryContainer", ""]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 51625:
/*!***************************************************************************!*\
  !*** ./src/app/modules/non-session/landing-page/sample-page/component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExampleComponent": () => (/* binding */ ExampleComponent)
/* harmony export */ });
/* harmony import */ var src_app_framework_modules_formdata_form_formData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/framework-modules/formdata/form/formData */ 70784);
/* harmony import */ var src_app_framework_modules_formdata_gen_customerForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/framework-modules/formdata/gen/customerForm */ 12740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_framework_modules_formdata_form_serviceAgent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/framework-modules/formdata/form/serviceAgent */ 47877);
/* harmony import */ var _framework_modules_elements_mv_field_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../framework-modules/elements/mv-field-generator/component */ 15184);





class ExampleComponent {
    constructor(sa) {
        this.sa = sa;
        this.form = src_app_framework_modules_formdata_gen_customerForm__WEBPACK_IMPORTED_MODULE_1__.CustomerForm.getInstance();
        this.fd = new src_app_framework_modules_formdata_form_formData__WEBPACK_IMPORTED_MODULE_0__.FormData(this.form, this.sa);
    }
}
ExampleComponent.ɵfac = function ExampleComponent_Factory(t) { return new (t || ExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_framework_modules_formdata_form_serviceAgent__WEBPACK_IMPORTED_MODULE_2__.ServiceAgent)); };
ExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExampleComponent, selectors: [["app-login"]], inputs: { inputData: "inputData", parentPanel: "parentPanel", session: "session" }, decls: 1, vars: 1, consts: [[3, "fd"]], template: function ExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-mv-field-generator", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fd", ctx.fd);
    } }, directives: [_framework_modules_elements_mv_field_generator_component__WEBPACK_IMPORTED_MODULE_3__.MvFieldGeneratorComponent], styles: [".background[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.powered[_ngcontent-%COMP%] {\n  font-family: Roboto-Light;\n  font-size: 0.78vw;\n  color: #FFFFFF;\n  padding-top: 1.6875rem;\n  padding-right: 1.875vw;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding-top: 5.625rem;\n  padding-right: 12.5vw;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 9.625rem;\n  width: 10.625vw;\n}\n\n.username[_ngcontent-%COMP%] {\n  margin-left: 70.57vw;\n  margin-right: 7.26vw;\n  padding-top: 3.74vh;\n}\n\n.password[_ngcontent-%COMP%] {\n  margin-left: 70.57vw;\n  margin-right: 7.26vw;\n  padding-top: 3vh;\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  padding-top: 0.625rem;\n  cursor: pointer;\n  padding-right: 7.26vw;\n  font-family: Roboto-Regular;\n  font-size: 0.625rem;\n  color: #89E3FD;\n  line-height: 1.375rem;\n  text-decoration: underline;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  padding-top: 1.6875rem;\n  padding-left: 85.54vw;\n}\n\n.apply-admission[_ngcontent-%COMP%] {\n  border: 1px solid #EC8026;\n  border-radius: 5px 0 5px 0;\n  background: none;\n  font-family: Roboto-Regular;\n  font-size: 12px;\n  color: white;\n  width: 11.95vw;\n  float: right;\n  margin-bottom: 4.58vh;\n  margin-top: 14.6vh;\n  margin-right: 7.26vw;\n  text-align: center;\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n\n.banner[_ngcontent-%COMP%] {\n  height: 10vh;\n  position: fixed;\n  z-index: 1000;\n  top: 20vh;\n  padding: 1vh;\n  color: white;\n  text-align: center;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.heading-1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-family: \"Roboto-Thin\" !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBRUUsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUhKOztBQU1FO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBSEo7O0FBTUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0FBSEo7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtBQURGOztBQUdDO0VBQ0MseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBSUM7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLHFDQUFBO0FBREYiLCJmaWxlIjoiY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zYXNzL3ZhcmlhYmxlcyc7XG5cblxuICAuYmFja2dyb3VuZHtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL2xvZ2luX2JnLnBuZycpO1xuICAgIGhlaWdodDogMTAwdmg7IFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAucG93ZXJlZHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLUxpZ2h0O1xuICAgIGZvbnQtc2l6ZTowLjc4dnc7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZy10b3A6IDEuNjg3NXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjg3NXZ3O1xuICB9XG5cbi5sb2dve1xuICAgIHBhZGRpbmctdG9wOjUuNjI1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6MTIuNXZ3O1xufVxuLmxvZ28gaW1ne1xuICAgIGhlaWdodDogOS42MjVyZW07XG4gICAgd2lkdGg6IDEwLjYyNXZ3O1xufVxuXG4udXNlcm5hbWV7XG4gIG1hcmdpbi1sZWZ0OjcwLjU3dnc7XG4gIG1hcmdpbi1yaWdodDo3LjI2dnc7XG4gIHBhZGRpbmctdG9wOjMuNzR2aDtcbn1cbi5wYXNzd29yZHtcbiAgbWFyZ2luLWxlZnQ6NzAuNTd2dztcbiAgbWFyZ2luLXJpZ2h0OjcuMjZ2dztcbiAgcGFkZGluZy10b3A6M3ZoO1xufVxuXG4uZm9yZ290LXBhc3N3b3Jke1xuICBwYWRkaW5nLXRvcDogMC42MjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1yaWdodDo3LjI2dnc7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcjtcbiAgZm9udC1zaXplOiAwLjYyNXJlbTtcbiAgY29sb3I6ICM4OUUzRkQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5sb2dpbi1idXR0b257XG4gIHBhZGRpbmctdG9wOjEuNjg3NXJlbTtcbiAgcGFkZGluZy1sZWZ0Ojg1LjU0dnc7XG59XG4gLmFwcGx5LWFkbWlzc2lvbntcbiAgYm9yZGVyOiAxcHggc29saWQgI0VDODAyNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgNXB4IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMS45NXZ3O1xuICBmbG9hdDpyaWdodDtcbiAgbWFyZ2luLWJvdHRvbTo0LjU4dmg7XG4gIG1hcmdpbi10b3A6MTQuNnZoO1xuICBtYXJnaW4tcmlnaHQ6Ny4yNnZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gfVxuXG5cbiAuYmFubmVye1xuICBoZWlnaHQ6IDEwdmg7IFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7IFxuICB0b3A6IDIwdmg7IFxuICBwYWRkaW5nOjF2aDtcbiAgY29sb3I6IHdoaXRlOyBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbn1cblxuLmhlYWRpbmctMXtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tVGhpblwiICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ }),

/***/ 12813:
/*!**********************************************!*\
  !*** ./src/app/services/constantsService.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstantsService": () => (/* binding */ ConstantsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ConstantsService {
}
ConstantsService.ROUTE_NON_SESSION = "non-session";
ConstantsService.ROUTE_SESSION = "session";
ConstantsService.ɵfac = function ConstantsService_Factory(t) { return new (t || ConstantsService)(); };
ConstantsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConstantsService, factory: ConstantsService.ɵfac });


/***/ }),

/***/ 59496:
/*!********************************************!*\
  !*** ./src/app/services/messageService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class MessageService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showSuccess(message) {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        config.panelClass = ['snackbar-success'];
        config.duration = 3000;
        this.snackBar.open(message, null, config);
    }
    showError(message) {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        config.panelClass = ['snackbar-error'];
        config.duration = 3000;
        this.snackBar.open(message, null, config);
    }
    showInfo(message) {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        config.panelClass = ['snackbar-info'];
        config.duration = 3000;
        this.snackBar.open(message, null, config);
    }
    showDetail(message) {
        const config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        config.horizontalPosition = 'end';
        config.verticalPosition = 'bottom';
        this.snackBar.open(message, null, config);
    }
    close() {
        this.snackBar.dismiss();
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBar)); };
MessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac });


/***/ }),

/***/ 43512:
/*!*******************************************!*\
  !*** ./src/app/services/routerService.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterService": () => (/* binding */ RouterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _constantsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constantsService */ 12813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);




class RouterService {
    constructor(router) {
        this.router = router;
        this.currentRoute = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject("");
        /* ----------------------------------General Routes-------------------------------*/
        this.openNonSession = function () {
            this.doNavigation(_constantsService__WEBPACK_IMPORTED_MODULE_0__.ConstantsService.ROUTE_NON_SESSION);
        };
        this.routeChangeListener = this.currentRoute.asObservable();
        this.router.navigate;
    }
}
RouterService.ɵfac = function RouterService_Factory(t) { return new (t || RouterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
RouterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RouterService, factory: RouterService.ɵfac });
;


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map