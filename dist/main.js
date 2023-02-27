"use strict";
(self["webpackChunkmetadevClient"] = self["webpackChunkmetadevClient"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _services_routerService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/routerService */ 3512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




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
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _modules_base_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/base.module */ 7556);
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.router */ 5285);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_router__WEBPACK_IMPORTED_MODULE_2__.AppRouting,
        _modules_base_module__WEBPACK_IMPORTED_MODULE_1__.BaseModule.forRoot(),
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_router__WEBPACK_IMPORTED_MODULE_2__.AppRouting, _modules_base_module__WEBPACK_IMPORTED_MODULE_1__.BaseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 5285:
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouting": () => (/* binding */ AppRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _services_constantsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/constantsService */ 2813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const appRoutes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent
    },
    {
        path: _services_constantsService__WEBPACK_IMPORTED_MODULE_1__.ConstantsService.ROUTE_NON_SESSION, loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_non-session_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/non-session/module */ 5121)).then(m => m.NonSessionModule)
    }
];
class AppRouting {
}
AppRouting.ɵfac = function AppRouting_Factory(t) { return new (t || AppRouting)(); };
AppRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRouting });
AppRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(appRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 2740:
/*!****************************************************************!*\
  !*** ./src/app/framework-modules/formdata/gen/customerForm.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerFd": () => (/* binding */ CustomerFd),
/* harmony export */   "CustomerForm": () => (/* binding */ CustomerForm)
/* harmony export */ });
/* harmony import */ var mv_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mv-core */ 4818);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class CustomerForm extends mv_core__WEBPACK_IMPORTED_MODULE_0__.Form {
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
            label: 'email',
            isRequired: true,
            valueType: 0,
            errorId: 'invalidEmail',
            maxLength: 1000
        };
        this.addressLine1 = {
            name: 'addressLine1',
            controlType: 'Input',
            label: 'Address Line 1',
            valueType: 0,
            errorId: 'invalidText',
            maxLength: 1000
        };
        this.gender = {
            name: 'gender',
            controlType: 'Dropdown',
            label: 'Gender',
            isRequired: true,
            listName: 'gender',
            valueList: [
                { value: 'Male', text: 'Male' },
                { value: 'Female', text: 'Female' },
                { value: 'Others', text: 'Others' },
                { value: 'Not Applicable', text: 'Not Applicable' }
            ],
            valueType: 0,
            errorId: 'invalidText',
            maxLength: 1000
        };
        this.prefferedName = {
            name: 'prefferedName',
            controlType: 'Input',
            label: 'Prefered Name ',
            valueType: 0,
            errorId: 'invalidText',
            maxLength: 1000
        };
        this.phone = {
            name: 'phone',
            controlType: 'Input',
            label: 'Phone Name ',
            valueType: 0,
            errorId: 'invalidText',
            maxLength: 1000
        };
        this.university = {
            name: 'university',
            controlType: 'Input',
            label: 'University Name ',
            valueType: 0,
            errorId: 'invalidText',
            maxLength: 1000
        };
        this.serveGuests = true;
        this.fields = new Map();
        this.controls = new Map();
        this.controls.set('customerId', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(-1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.max(9999999999999)]);
        this.fields.set('customerId', this.customerId);
        this.controls.set('name', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(150)]);
        this.fields.set('name', this.name);
        this.controls.set('email', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('email', this.email);
        this.controls.set('addressLine1', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('addressLine1', this.addressLine1);
        this.controls.set('gender', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('gender', this.gender);
        this.controls.set('prefferedName', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('prefferedName', this.prefferedName);
        this.controls.set('phone', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('phone', this.phone);
        this.controls.set('university', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('university', this.university);
        this.opsAllowed = { create: true, filter: true, get: true };
        this.listFields = ['gender'];
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
class CustomerFd extends mv_core__WEBPACK_IMPORTED_MODULE_0__.FormData {
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

/***/ 7556:
/*!****************************************!*\
  !*** ./src/app/modules/base.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseModule": () => (/* binding */ BaseModule)
/* harmony export */ });
/* harmony import */ var _services_routerService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/routerService */ 3512);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_messageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/messageService */ 9496);
/* harmony import */ var _non_session_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./non-session/component */ 9342);
/* harmony import */ var _non_session_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./non-session/landing-page/component */ 6683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








class BaseModule {
    static forRoot() {
        return {
            ngModule: BaseModule,
            providers: [
                _services_routerService__WEBPACK_IMPORTED_MODULE_0__.RouterService,
                _services_messageService__WEBPACK_IMPORTED_MODULE_1__.MessageService
            ]
        };
    }
}
BaseModule.ɵfac = function BaseModule_Factory(t) { return new (t || BaseModule)(); };
BaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BaseModule });
BaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, 
        /**
         * App Components
         */
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BaseModule, { declarations: [
        /**
         * All components to be declared here
         */
        /**
        * Landing Componenet
        */
        _non_session_component__WEBPACK_IMPORTED_MODULE_2__.NonSessionComponent,
        _non_session_landing_page_component__WEBPACK_IMPORTED_MODULE_3__.LandingComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule], exports: [
        /**
         * App Components
         */
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        /**
         * All components to be declared here
         */
        /**
        * Landing Componenet
        */
        _non_session_component__WEBPACK_IMPORTED_MODULE_2__.NonSessionComponent,
        _non_session_landing_page_component__WEBPACK_IMPORTED_MODULE_3__.LandingComponent] }); })();


/***/ }),

/***/ 9342:
/*!**************************************************!*\
  !*** ./src/app/modules/non-session/component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonSessionComponent": () => (/* binding */ NonSessionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ 461);
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page/component */ 6683);




const _c0 = ["primaryContainer"];
/**
 * temp during development. will come from menuService
 */
const ROUTES = {
    Landing: _landing_page_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent,
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
NonSessionComponent.ɵfac = function NonSessionComponent_Factory(t) { return new (t || NonSessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver)); };
NonSessionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NonSessionComponent, selectors: [["app-non-session"]], viewQuery: function NonSessionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 2, vars: 0, consts: [["primaryContainer", ""]], template: function NonSessionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, null, 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 461:
/*!***************************************************!*\
  !*** ./src/app/modules/non-session/interfaces.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6683:
/*!***************************************************************!*\
  !*** ./src/app/modules/non-session/landing-page/component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces */ 461);
/* harmony import */ var _sample_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample-page/component */ 1625);




const _c0 = ["secondaryContainer"];
/**
 Const to map the screen-component to screen-name to rended the facotry
 */
const MENU = {
    Login: { comp: _sample_page_component__WEBPACK_IMPORTED_MODULE_1__.ExampleComponent },
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
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver)); };
LandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing-page"]], viewQuery: function LandingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, inputs: { inputData: "inputData", parentPanel: "parentPanel" }, decls: 2, vars: 0, consts: [["secondaryContainer", ""]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, null, 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1625:
/*!***************************************************************************!*\
  !*** ./src/app/modules/non-session/landing-page/sample-page/component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExampleComponent": () => (/* binding */ ExampleComponent)
/* harmony export */ });
/* harmony import */ var mv_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mv-core */ 4818);
/* harmony import */ var src_app_framework_modules_formdata_gen_customerForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/framework-modules/formdata/gen/customerForm */ 2740);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces */ 461);
/* harmony import */ var src_app_modules_templates_template_1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/templates/template-1/component */ 7431);
/* harmony import */ var src_app_modules_templates_template_2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/templates/template-2/component */ 312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const _c0 = ["gridTable"];
class ExampleComponent {
    constructor(sa) {
        this.form = new src_app_framework_modules_formdata_gen_customerForm__WEBPACK_IMPORTED_MODULE_0__.CustomerForm();
        this.fd = new src_app_framework_modules_formdata_gen_customerForm__WEBPACK_IMPORTED_MODULE_0__.CustomerFd(this.form, sa);
    }
    ngOnInit() {
        this.metaDataInit();
    }
    metaDataInit() {
        this.tableData = {
            data: [],
            metaData: {
                column_names: [
                    "name",
                    "addressLine1",
                    "phone"
                ],
                display_names: {
                    "name": "Customer Name",
                    "addressLine1": "Address Line 1",
                    "phone": "Phone Number"
                },
            },
        };
    }
    fetchData() {
        const filter = {
            conditions: {},
            sort: {},
            maxRows: 10
        };
        this.fd.filter(filter).subscribe({
            next: data => {
                console.log(data);
                this.tableData.data = data;
                this.gtable.update();
            },
            error: msg => console.error("Error from server ", msg)
        });
    }
}
ExampleComponent.ɵfac = function ExampleComponent_Factory(t) { return new (t || ExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](mv_core__WEBPACK_IMPORTED_MODULE_5__.ServiceAgent)); };
ExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExampleComponent, selectors: [["app-login"]], viewQuery: function ExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.gtable = _t.first);
    } }, inputs: { inputData: "inputData", parentPanel: "parentPanel", session: "session" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]], decls: 2, vars: 2, consts: [[3, "fd"]], template: function ExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-template-one", 0)(1, "app-template-two", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fd", ctx.fd);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fd", ctx.fd);
    } }, dependencies: [src_app_modules_templates_template_1_component__WEBPACK_IMPORTED_MODULE_2__.TemplateOneComponent, mv_core__WEBPACK_IMPORTED_MODULE_5__.MVClientCoreAppModule, mv_core__WEBPACK_IMPORTED_MODULE_5__.MVComponentsModule, src_app_modules_templates_template_2_component__WEBPACK_IMPORTED_MODULE_3__.TemplateTwoComponent], encapsulation: 2 });


/***/ }),

/***/ 7431:
/*!***********************************************************!*\
  !*** ./src/app/modules/templates/template-1/component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateOneComponent": () => (/* binding */ TemplateOneComponent)
/* harmony export */ });
/* harmony import */ var mv_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mv-core */ 4818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);




class TemplateOneComponent {
    constructor() {
    }
    saveForm() {
        this.fd.saveAsNew().subscribe(data => {
            console.log("saved");
        }, err => {
            console.log(err);
        });
    }
}
TemplateOneComponent.ɵfac = function TemplateOneComponent_Factory(t) { return new (t || TemplateOneComponent)(); };
TemplateOneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateOneComponent, selectors: [["app-template-one"]], inputs: { fd: "fd" }, exportAs: ["TemplateOneComponent"], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]], decls: 7, vars: 1, consts: [[1, "col-md-8", 2, "margin", "auto"], [1, "col-md-8", 2, "margin", "auto", "padding-top", "3rem"], [3, "formData"], [2, "text-align", "center", "padding-top", "2rem"], ["name", "Save", 3, "click"]], template: function TemplateOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Customer Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-mv-form-generator", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "app-mv-primary-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateOneComponent_Template_app_mv_primary_button_click_6_listener() { return ctx.saveForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formData", ctx.fd);
    } }, dependencies: [mv_core__WEBPACK_IMPORTED_MODULE_1__.MVClientCoreAppModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, mv_core__WEBPACK_IMPORTED_MODULE_1__.MvFormGeneratorComponent, mv_core__WEBPACK_IMPORTED_MODULE_1__.MvPrimaryButtonComponent, mv_core__WEBPACK_IMPORTED_MODULE_1__.MVComponentsModule], encapsulation: 2 });


/***/ }),

/***/ 312:
/*!***********************************************************!*\
  !*** ./src/app/modules/templates/template-2/component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateTwoComponent": () => (/* binding */ TemplateTwoComponent)
/* harmony export */ });
/* harmony import */ var mv_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mv-core */ 4818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const _c0 = ["gridTable"];
class TemplateTwoComponent {
    constructor(sa) {
    }
    fetchData() {
        const filter = {
            conditions: {},
            sort: {},
            maxRows: 10
        };
        this.fd.filter(filter).subscribe({
            next: data => {
                console.log(this.fd);
                console.log(data);
                this.tableData.data = data;
                this.gtable.update();
            },
            error: msg => console.error("Error from server ", msg)
        });
    }
}
TemplateTwoComponent.ɵfac = function TemplateTwoComponent_Factory(t) { return new (t || TemplateTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](mv_core__WEBPACK_IMPORTED_MODULE_1__.ServiceAgent)); };
TemplateTwoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateTwoComponent, selectors: [["app-template-two"]], viewQuery: function TemplateTwoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gtable = _t.first);
    } }, inputs: { fd: "fd" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]], decls: 3, vars: 1, consts: [["name", "Get Data", 3, "click"], ["data", "", 2, "width", "1000px", 3, "tableGridData"], ["gridTable", ""]], template: function TemplateTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-mv-primary-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateTwoComponent_Template_app_mv_primary_button_click_0_listener() { return ctx.fetchData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mv-table", 1, 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableGridData", ctx.tableData);
    } }, dependencies: [mv_core__WEBPACK_IMPORTED_MODULE_1__.MVClientCoreAppModule, mv_core__WEBPACK_IMPORTED_MODULE_1__.MvPrimaryButtonComponent, mv_core__WEBPACK_IMPORTED_MODULE_1__.MvTableComponent, mv_core__WEBPACK_IMPORTED_MODULE_1__.MVComponentsModule], encapsulation: 2 });


/***/ }),

/***/ 2813:
/*!**********************************************!*\
  !*** ./src/app/services/constantsService.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstantsService": () => (/* binding */ ConstantsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ConstantsService {
}
ConstantsService.ROUTE_NON_SESSION = "non-session";
ConstantsService.ROUTE_SESSION = "session";
ConstantsService.ɵfac = function ConstantsService_Factory(t) { return new (t || ConstantsService)(); };
ConstantsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConstantsService, factory: ConstantsService.ɵfac });


/***/ }),

/***/ 9496:
/*!********************************************!*\
  !*** ./src/app/services/messageService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



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

/***/ 3512:
/*!*******************************************!*\
  !*** ./src/app/services/routerService.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterService": () => (/* binding */ RouterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _constantsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constantsService */ 2813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





class RouterService {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.currentRoute = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject("");
        /* ----------------------------------General Routes-------------------------------*/
        this.openNonSession = function () {
            this.doNavigation(_constantsService__WEBPACK_IMPORTED_MODULE_0__.ConstantsService.ROUTE_NON_SESSION);
        };
        this.doNavigation = function (route) {
            this.currentRoute.next(route);
            this.router.navigate([route]);
        };
        this.doNavigateReplacement = function (route) {
            this.currentRoute.next(route);
            this.router.navigate([route], {
                replaceUrl: true
            });
        };
        this.router.navigate;
    }
}
RouterService.ɵfac = function RouterService_Factory(t) { return new (t || RouterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location)); };
RouterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RouterService, factory: RouterService.ɵfac });


/***/ }),

/***/ 2340:
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map