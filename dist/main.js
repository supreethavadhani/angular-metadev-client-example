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
/* harmony import */ var _app_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.menu */ 8337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var mv_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mv-core */ 4818);




class AppComponent {
    constructor(router) {
        this.router = router;
        this.appName = "Customer Management ERP";
        this.navMenu = _app_menu__WEBPACK_IMPORTED_MODULE_0__.navMenu;
        // this.router.navigate(['customerList']);
    }
    routeTo($event) {
        this.router.navigate([$event]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([])], decls: 6, vars: 2, consts: [[3, "appName"], [1, "row"], [1, "col-md-2"], [3, "navMenu", "emitRoute"], [1, "col-md-10"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-mv-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "app-mv-sidenav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("emitRoute", function AppComponent_Template_app_mv_sidenav_emitRoute_3_listener($event) { return ctx.routeTo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appName", ctx.appName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("navMenu", ctx.navMenu);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, mv_core__WEBPACK_IMPORTED_MODULE_3__.MvSideNavComponent, mv_core__WEBPACK_IMPORTED_MODULE_3__.MvToolbarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8337:
/*!*****************************!*\
  !*** ./src/app/app.menu.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navMenu": () => (/* binding */ navMenu)
/* harmony export */ });
const navMenu = [
    {
        "name": "customers", "routeTo": "customerList"
    },
];


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ 8693);
/* harmony import */ var mv_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mv-core */ 4818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _app_routes__WEBPACK_IMPORTED_MODULE_1__.AppRouting,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        mv_core__WEBPACK_IMPORTED_MODULE_7__.MVComponentsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _app_routes__WEBPACK_IMPORTED_MODULE_1__.AppRouting,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        mv_core__WEBPACK_IMPORTED_MODULE_7__.MVComponentsModule] }); })();


/***/ }),

/***/ 8693:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouting": () => (/* binding */ AppRouting)
/* harmony export */ });
/* harmony import */ var _Users_supreethavadhani_workspace_metadev_client_example_src_app_pages_customerEntry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/pages/customerEntry-component */ 1741);
/* harmony import */ var _Users_supreethavadhani_workspace_metadev_client_example_src_app_pages_customerList_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app/pages/customerList-component */ 708);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: 'customerList', component: _Users_supreethavadhani_workspace_metadev_client_example_src_app_pages_customerList_component__WEBPACK_IMPORTED_MODULE_1__.customerListComponent },
    { path: 'customerEntry', component: _Users_supreethavadhani_workspace_metadev_client_example_src_app_pages_customerEntry_component__WEBPACK_IMPORTED_MODULE_0__.customerEntryComponent },
];
class AppRouting {
}
AppRouting.ɵfac = function AppRouting_Factory(t) { return new (t || AppRouting)(); };
AppRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRouting });
AppRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 8370:
/*!************************************************************!*\
  !*** ./src/app/framework-modules/formdata/gen/allForms.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allForms": () => (/* binding */ allForms)
/* harmony export */ });
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userForm */ 2377);
/* harmony import */ var _userRegistrationForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userRegistrationForm */ 4395);
/* harmony import */ var _customerListForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customerListForm */ 7452);
/* harmony import */ var _userContextForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userContextForm */ 6986);




const allForms = {
    "user": _userForm__WEBPACK_IMPORTED_MODULE_0__.UserForm,
    "userRegistration": _userRegistrationForm__WEBPACK_IMPORTED_MODULE_1__.UserRegistrationForm,
    "customerList": _customerListForm__WEBPACK_IMPORTED_MODULE_2__.CustomerListForm,
    "userContext": _userContextForm__WEBPACK_IMPORTED_MODULE_3__.UserContextForm,
};


/***/ }),

/***/ 7452:
/*!********************************************************************!*\
  !*** ./src/app/framework-modules/formdata/gen/customerListForm.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListFd": () => (/* binding */ CustomerListFd),
/* harmony export */   "CustomerListForm": () => (/* binding */ CustomerListForm)
/* harmony export */ });
/* harmony import */ var mv_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mv-core */ 4818);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class CustomerListForm extends mv_core__WEBPACK_IMPORTED_MODULE_0__.Form {
    constructor() {
        super();
        this.customerId = {
            name: 'customerId',
            controlType: 'Hidden',
            label: '',
            valueType: 1,
            errorId: 'invalidId',
            maxValue: 9999999999999
        };
        this.customerName = {
            name: 'customerName',
            controlType: 'Input',
            label: 'Customer Name',
            isRequired: true,
            valueType: 0,
            errorId: 'invalidName',
            maxLength: 150
        };
        this.customerEmail = {
            name: 'customerEmail',
            controlType: 'Input',
            label: 'Customer Email',
            isRequired: true,
            valueType: 0,
            errorId: 'invalidEmail',
            maxLength: 1000
        };
        this.addressLine = {
            name: 'addressLine',
            controlType: 'Input',
            label: 'Address Line 1',
            isRequired: true,
            valueType: 0,
            errorId: 'invalidText',
            maxLength: 1000
        };
        this.uniName = {
            name: 'uniName',
            controlType: 'Input',
            label: 'University Name',
            isRequired: true,
            valueType: 0,
            errorId: 'invalidName',
            maxLength: 150
        };
        this.fields = new Map();
        this.controls = new Map();
        this.controls.set('customerId', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.max(9999999999999)]);
        this.fields.set('customerId', this.customerId);
        this.controls.set('customerName', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(150)]);
        this.fields.set('customerName', this.customerName);
        this.controls.set('customerEmail', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('customerEmail', this.customerEmail);
        this.controls.set('addressLine', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('addressLine', this.addressLine);
        this.controls.set('uniName', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(150)]);
        this.fields.set('uniName', this.uniName);
        this.opsAllowed = { create: true, filter: true };
        this.keyFields = ["customerId"];
    }
    static getInstance() {
        return CustomerListForm._instance;
    }
    getName() {
        return 'customerList';
    }
}
CustomerListForm._instance = new CustomerListForm();
class CustomerListFd extends mv_core__WEBPACK_IMPORTED_MODULE_0__.FormData {
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

/***/ 6986:
/*!*******************************************************************!*\
  !*** ./src/app/framework-modules/formdata/gen/userContextForm.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserContextFd": () => (/* binding */ UserContextFd),
/* harmony export */   "UserContextForm": () => (/* binding */ UserContextForm)
/* harmony export */ });
/* harmony import */ var mv_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mv-core */ 4818);

class UserContextForm extends mv_core__WEBPACK_IMPORTED_MODULE_0__.Form {
    constructor() {
        super();
        this.fields = new Map();
        this.controls = new Map();
        this.keyFields = ["userId"];
    }
    static getInstance() {
        return UserContextForm._instance;
    }
    getName() {
        return 'userContext';
    }
}
UserContextForm._instance = new UserContextForm();
class UserContextFd extends mv_core__WEBPACK_IMPORTED_MODULE_0__.FormData {
    constructor(form, sa) {
        super(form, sa);
    }
}


/***/ }),

/***/ 2377:
/*!************************************************************!*\
  !*** ./src/app/framework-modules/formdata/gen/userForm.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserFd": () => (/* binding */ UserFd),
/* harmony export */   "UserForm": () => (/* binding */ UserForm)
/* harmony export */ });
/* harmony import */ var mv_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mv-core */ 4818);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class UserForm extends mv_core__WEBPACK_IMPORTED_MODULE_0__.Form {
    constructor() {
        super();
        this.userId = {
            name: 'userId',
            controlType: 'Hidden',
            label: 'userId',
            valueType: 1,
            errorId: 'invalidFlexibleId',
            minValue: -1,
            maxValue: 9999999999999
        };
        this.instituteId = {
            name: 'instituteId',
            controlType: 'Hidden',
            label: 'instituteId',
            valueType: 1,
            errorId: 'invalidTenentKey',
            maxValue: 9999999999999
        };
        this.trustId = {
            name: 'trustId',
            controlType: 'Hidden',
            label: 'trustId',
            valueType: 1,
            errorId: 'invalidId',
            maxValue: 9999999999999
        };
        this.userType = {
            name: 'userType',
            controlType: 'Dropdown',
            label: 'User Type',
            isRequired: true,
            listName: 'userType',
            valueList: [
                { value: 'student', text: 'student' },
                { value: 'staff', text: 'staff' },
                { value: 'admin', text: 'admin' },
                { value: 'guardian', text: 'guardian' },
                { value: 'trustee', text: 'trustee' }
            ],
            valueType: 0,
            defaultValue: 'Student',
            errorId: 'invalidUserType',
            maxLength: 20
        };
        this.loginId = {
            name: 'loginId',
            controlType: 'Input',
            label: 'Login Id',
            isRequired: true,
            valueType: 0,
            errorId: 'invalidLoginId',
            maxLength: 50
        };
        this.loginToken = {
            name: 'loginToken',
            controlType: 'Output',
            label: 'Login Token',
            valueType: 0,
            errorId: 'invalidText',
            maxLength: 1000
        };
        this.loginEnabled = {
            name: 'loginEnabled',
            controlType: 'Checkbox',
            label: 'Login Enabled',
            isRequired: true,
            valueType: 3,
            defaultValue: false,
            errorId: 'invalidBool'
        };
        this.resetPasswordCount = {
            name: 'resetPasswordCount',
            controlType: 'Output',
            label: 'Reset Password Count',
            valueType: 1,
            errorId: 'invalidInteger',
            maxValue: 9999999999999
        };
        this.loginCount = {
            name: 'loginCount',
            controlType: 'Output',
            label: 'Login Count',
            valueType: 1,
            errorId: 'invalidInteger',
            maxValue: 9999999999999
        };
        this.confirmationToken = {
            name: 'confirmationToken',
            controlType: 'Output',
            label: 'Confirmation Token',
            valueType: 0,
            errorId: 'invalidText',
            maxLength: 1000
        };
        this.currentLoginIp = {
            name: 'currentLoginIp',
            controlType: 'Output',
            label: 'Current Login IP',
            valueType: 0,
            errorId: 'invalidIp',
            maxLength: 1000
        };
        this.previousLoginIp = {
            name: 'previousLoginIp',
            controlType: 'Output',
            label: 'Previous Login IP',
            valueType: 0,
            errorId: 'invalidIp',
            maxLength: 1000
        };
        this.currentLoginAt = {
            name: 'currentLoginAt',
            controlType: 'Output',
            label: 'CurrentLogin At',
            valueType: 5,
            errorId: 'invalidTimestamp'
        };
        this.previousLoginAt = {
            name: 'previousLoginAt',
            controlType: 'Output',
            label: 'Previous Login At',
            valueType: 5,
            errorId: 'invalidTimestamp'
        };
        this.resetPasswordSentAt = {
            name: 'resetPasswordSentAt',
            controlType: 'Output',
            label: 'Reset Password Sent At',
            valueType: 5,
            errorId: 'invalidTimestamp'
        };
        this.createdAt = {
            name: 'createdAt',
            controlType: 'Hidden',
            label: 'createdAt',
            valueType: 5,
            errorId: 'invalidTimestamp'
        };
        this.updatedAt = {
            name: 'updatedAt',
            controlType: 'Hidden',
            label: 'updatedAt',
            valueType: 5,
            errorId: 'invalidTimestamp'
        };
        this.fields = new Map();
        this.controls = new Map();
        this.controls.set('userId', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(-1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.max(9999999999999)]);
        this.fields.set('userId', this.userId);
        this.controls.set('instituteId', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.max(9999999999999)]);
        this.fields.set('instituteId', this.instituteId);
        this.controls.set('trustId', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.max(9999999999999)]);
        this.fields.set('trustId', this.trustId);
        this.controls.set('userType', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(20)]);
        this.fields.set('userType', this.userType);
        this.controls.set('loginId', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(50)]);
        this.fields.set('loginId', this.loginId);
        this.controls.set('loginToken', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('loginToken', this.loginToken);
        this.controls.set('loginEnabled', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
        this.fields.set('loginEnabled', this.loginEnabled);
        this.controls.set('resetPasswordCount', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.max(9999999999999)]);
        this.fields.set('resetPasswordCount', this.resetPasswordCount);
        this.controls.set('loginCount', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.max(9999999999999)]);
        this.fields.set('loginCount', this.loginCount);
        this.controls.set('confirmationToken', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('confirmationToken', this.confirmationToken);
        this.controls.set('currentLoginIp', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('currentLoginIp', this.currentLoginIp);
        this.controls.set('previousLoginIp', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('previousLoginIp', this.previousLoginIp);
        this.controls.set('currentLoginAt', []);
        this.fields.set('currentLoginAt', this.currentLoginAt);
        this.controls.set('previousLoginAt', []);
        this.fields.set('previousLoginAt', this.previousLoginAt);
        this.controls.set('resetPasswordSentAt', []);
        this.fields.set('resetPasswordSentAt', this.resetPasswordSentAt);
        this.controls.set('createdAt', []);
        this.fields.set('createdAt', this.createdAt);
        this.controls.set('updatedAt', []);
        this.fields.set('updatedAt', this.updatedAt);
        this.opsAllowed = { get: true, filter: true };
        this.listFields = ['userType'];
        this.keyFields = ["userId"];
    }
    static getInstance() {
        return UserForm._instance;
    }
    getName() {
        return 'user';
    }
}
UserForm._instance = new UserForm();
class UserFd extends mv_core__WEBPACK_IMPORTED_MODULE_0__.FormData {
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

/***/ 4395:
/*!************************************************************************!*\
  !*** ./src/app/framework-modules/formdata/gen/userRegistrationForm.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRegistrationFd": () => (/* binding */ UserRegistrationFd),
/* harmony export */   "UserRegistrationForm": () => (/* binding */ UserRegistrationForm)
/* harmony export */ });
/* harmony import */ var mv_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mv-core */ 4818);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class UserRegistrationForm extends mv_core__WEBPACK_IMPORTED_MODULE_0__.Form {
    constructor() {
        super();
        this.otp = {
            name: 'otp',
            controlType: 'Input',
            label: 'Enter the OTP received on your mobile',
            isRequired: true,
            valueType: 0,
            errorId: 'invalidText',
            maxLength: 1000
        };
        this.email = {
            name: 'email',
            controlType: 'Input',
            label: 'Enter Your E-mail',
            isRequired: true,
            valueType: 0,
            errorId: 'invalidEmail',
            maxLength: 1000
        };
        this.newPassword = {
            name: 'newPassword',
            controlType: 'Password',
            label: 'Password',
            isRequired: true,
            valueType: 0,
            errorId: 'invalidText',
            maxLength: 1000
        };
        this.confirmPassword = {
            name: 'confirmPassword',
            controlType: 'Password',
            label: 'Re-enter Password',
            isRequired: true,
            valueType: 0,
            errorId: 'invalidText',
            maxLength: 1000
        };
        this.serveGuests = true;
        this.fields = new Map();
        this.controls = new Map();
        this.controls.set('otp', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('otp', this.otp);
        this.controls.set('email', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('email', this.email);
        this.controls.set('newPassword', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('newPassword', this.newPassword);
        this.controls.set('confirmPassword', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(1000)]);
        this.fields.set('confirmPassword', this.confirmPassword);
        this.opsAllowed = { update: true };
    }
    static getInstance() {
        return UserRegistrationForm._instance;
    }
    getName() {
        return 'userRegistration';
    }
}
UserRegistrationForm._instance = new UserRegistrationForm();
class UserRegistrationFd extends mv_core__WEBPACK_IMPORTED_MODULE_0__.FormData {
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

/***/ 6918:
/*!****************************************************************************!*\
  !*** ./src/app/framework-modules/formdata/template/EntryPage/component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntryPageComponent": () => (/* binding */ EntryPageComponent)
/* harmony export */ });
/* harmony import */ var mv_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mv-core */ 4818);
/* harmony import */ var _Users_supreethavadhani_workspace_metadev_client_example_src_app_framework_modules_formdata_gen_allForms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/framework-modules/formdata/gen/allForms */ 8370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);






class EntryPageComponent {
    constructor(sa, router) {
        this.sa = sa;
        this.router = router;
    }
    ngOnInit() {
        this.fd = mv_core__WEBPACK_IMPORTED_MODULE_1__.FormService.getFormFd(this.formName, this.sa, _Users_supreethavadhani_workspace_metadev_client_example_src_app_framework_modules_formdata_gen_allForms__WEBPACK_IMPORTED_MODULE_0__.allForms);
        this.formHeader = this.fd.form.getName().toUpperCase();
    }
    createSaveRecord() {
        this.fd.saveAsNew().subscribe(data => {
            console.log("saved");
            this.router.navigate([this.routes.filter(routeTo => routeTo['name'] == "Save Record")[0]['routeTo']]);
        }, err => {
            console.log(err);
        });
    }
    navigateNavigateBack() {
        this.fd = mv_core__WEBPACK_IMPORTED_MODULE_1__.FormService.getFormFd(this.formName, this.sa, _Users_supreethavadhani_workspace_metadev_client_example_src_app_framework_modules_formdata_gen_allForms__WEBPACK_IMPORTED_MODULE_0__.allForms);
        this.router.navigate([this.routes.filter(routeTo => routeTo['name'] == "Navigate Back")[0]['routeTo']]);
    }
}
EntryPageComponent.ɵfac = function EntryPageComponent_Factory(t) { return new (t || EntryPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](mv_core__WEBPACK_IMPORTED_MODULE_1__.ServiceAgent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
EntryPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EntryPageComponent, selectors: [["app-entry-page"]], inputs: { formName: "formName", routes: "routes" }, exportAs: ["EntryPageComponent"], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]], decls: 9, vars: 2, consts: [[1, "col-md-10", 2, "margin", "auto", "margin-top", "2rem", "box-shadow", "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"], [2, "margin", "2rem", "text-align", "center"], [2, "color", "#004faa"], [3, "formData"], [2, "text-align", "center", "padding-top", "2rem"], ["name", "Save Record", 3, "click"], ["name", "Navigate Back", 3, "click"]], template: function EntryPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-mv-form-generator", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "app-mv-primary-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EntryPageComponent_Template_app_mv_primary_button_click_7_listener() { return ctx.createSaveRecord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "app-mv-secondary-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EntryPageComponent_Template_app_mv_secondary_button_click_8_listener() { return ctx.navigateNavigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.formHeader, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formData", ctx.fd);
    } }, dependencies: [mv_core__WEBPACK_IMPORTED_MODULE_1__.MVClientCoreAppModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, mv_core__WEBPACK_IMPORTED_MODULE_1__.MvFormGeneratorComponent, mv_core__WEBPACK_IMPORTED_MODULE_1__.MvPrimaryButtonComponent, mv_core__WEBPACK_IMPORTED_MODULE_1__.MvSecondaryButtonComponent, mv_core__WEBPACK_IMPORTED_MODULE_1__.MVComponentsModule], encapsulation: 2 });


/***/ }),

/***/ 1995:
/*!********************************************************************************!*\
  !*** ./src/app/framework-modules/formdata/template/tableTemplate/component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tableTemplateComponent": () => (/* binding */ tableTemplateComponent)
/* harmony export */ });
/* harmony import */ var _Users_supreethavadhani_workspace_metadev_client_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var mv_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mv-core */ 4818);
/* harmony import */ var _Users_supreethavadhani_workspace_metadev_client_example_src_app_framework_modules_formdata_gen_allForms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app/framework-modules/formdata/gen/allForms */ 8370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);







const _c0 = ["gridTable"];
class tableTemplateComponent {
  constructor(sa, router) {
    this.sa = sa;
    this.router = router;
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_supreethavadhani_workspace_metadev_client_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.fd = yield mv_core__WEBPACK_IMPORTED_MODULE_2__.FormService.getFormFd(_this.formName, _this.sa, _Users_supreethavadhani_workspace_metadev_client_example_src_app_framework_modules_formdata_gen_allForms__WEBPACK_IMPORTED_MODULE_1__.allForms);

      _this.fetchData();

      _this.formHeader = _this.fd.form.getName().toUpperCase();
    })();
  }

  fetchData() {
    this.tableData = this.gtable.getColumnData(this.fd);
    const filter = {
      conditions: {}
    };
    this.fd.filter(filter).subscribe({
      next: data => {
        this.tableData.data = data;
        this.gtable.update();
      },
      error: msg => console.error("Error from server ", msg)
    });
  }

  navigateaddnewrecord() {
    this.fd = mv_core__WEBPACK_IMPORTED_MODULE_2__.FormService.getFormFd(this.formName, this.sa, _Users_supreethavadhani_workspace_metadev_client_example_src_app_framework_modules_formdata_gen_allForms__WEBPACK_IMPORTED_MODULE_1__.allForms);
    this.router.navigate([this.routes.filter(routeTo => routeTo['name'] == "add new record")[0]['routeTo']]);
  }

  editClicked($event) {
    let primaryKey = Object.keys(this.fd.extractKeyFields())[0];
    let routeKey = {};
    routeKey[primaryKey] = this.tableData.data[$event][primaryKey];
    this.router.navigate([this.editRoute, routeKey]);
  }

}

tableTemplateComponent.ɵfac = function tableTemplateComponent_Factory(t) {
  return new (t || tableTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](mv_core__WEBPACK_IMPORTED_MODULE_2__.ServiceAgent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

tableTemplateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: tableTemplateComponent,
  selectors: [["app-table-template"]],
  viewQuery: function tableTemplateComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.gtable = _t.first);
    }
  },
  inputs: {
    formName: "formName",
    routes: "routes",
    editRoute: "editRoute"
  },
  exportAs: ["tableTemplateComponent"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 9,
  vars: 2,
  consts: [[1, "col-md-10", 2, "margin", "auto", "margin-top", "2rem", "box-shadow", "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"], [2, "margin", "2rem", "text-align", "center"], [2, "color", "#004faa"], ["data", "", 2, "width", "1000px", 3, "tableGridData", "editAction"], ["gridTable", ""], [2, "text-align", "center", "padding-top", "2rem"], ["name", "add new record", 3, "click"]],
  template: function tableTemplateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-mv-table", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("editAction", function tableTemplateComponent_Template_app_mv_table_editAction_5_listener($event) {
        return ctx.editClicked($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "app-mv-primary-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function tableTemplateComponent_Template_app_mv_primary_button_click_8_listener() {
        return ctx.navigateaddnewrecord();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.formHeader, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableGridData", ctx.tableData);
    }
  },
  dependencies: [mv_core__WEBPACK_IMPORTED_MODULE_2__.MVClientCoreAppModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, mv_core__WEBPACK_IMPORTED_MODULE_2__.MvPrimaryButtonComponent, mv_core__WEBPACK_IMPORTED_MODULE_2__.MvTableComponent, mv_core__WEBPACK_IMPORTED_MODULE_2__.MVComponentsModule],
  encapsulation: 2
});

/***/ }),

/***/ 1741:
/*!**************************************************!*\
  !*** ./src/app/pages/customerEntry-component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customerEntryComponent": () => (/* binding */ customerEntryComponent)
/* harmony export */ });
/* harmony import */ var src_app_framework_modules_formdata_template_EntryPage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/framework-modules/formdata/template/EntryPage/component */ 6918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class customerEntryComponent {
    constructor(route) {
        this.route = route;
        this.form = "customerList";
        this.routes = [{
                "name": "Save Record",
                "routeTo": "customerList"
            }, {
                "name": "Navigate Back",
                "routeTo": "customerList"
            },
        ];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            console.log(params);
            this.inputData = params;
        });
    }
}
customerEntryComponent.ɵfac = function customerEntryComponent_Factory(t) { return new (t || customerEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
customerEntryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: customerEntryComponent, selectors: [["app-customer-entry"]], inputs: { inputData: "inputData" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 1, vars: 2, consts: [[3, "formName", "routes"]], template: function customerEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-entry-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formName", ctx.form)("routes", ctx.routes);
    } }, dependencies: [src_app_framework_modules_formdata_template_EntryPage_component__WEBPACK_IMPORTED_MODULE_0__.EntryPageComponent], encapsulation: 2 });


/***/ }),

/***/ 708:
/*!*************************************************!*\
  !*** ./src/app/pages/customerList-component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customerListComponent": () => (/* binding */ customerListComponent)
/* harmony export */ });
/* harmony import */ var src_app_framework_modules_formdata_template_tableTemplate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/framework-modules/formdata/template/tableTemplate/component */ 1995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class customerListComponent {
    constructor(route) {
        this.route = route;
        this.form = "customerList";
        this.routes = [{
                "name": "add new record",
                "routeTo": "customerEntry"
            },
        ];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            console.log(params);
            this.inputData = params;
        });
    }
}
customerListComponent.ɵfac = function customerListComponent_Factory(t) { return new (t || customerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
customerListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: customerListComponent, selectors: [["app-Customer-list"]], inputs: { inputData: "inputData" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 1, vars: 2, consts: [[3, "formName", "routes"]], template: function customerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-table-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formName", ctx.form)("routes", ctx.routes);
    } }, dependencies: [src_app_framework_modules_formdata_template_tableTemplate_component__WEBPACK_IMPORTED_MODULE_0__.tableTemplateComponent], encapsulation: 2 });


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