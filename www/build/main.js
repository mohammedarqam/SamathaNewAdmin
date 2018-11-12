webpackJsonp([22],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteStudentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteStudentsPage = /** @class */ (function () {
    function DeleteStudentsPage(navCtrl, viewCtrl, loadingCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.anmKeys = this.navParams.get("delAnms");
        this.anms = [];
        this.getSchools();
    }
    DeleteStudentsPage.prototype.getSchools = function () {
        var _this = this;
        this.anmKeys.forEach(function (snp) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Organisms/Students").child(snp).once("value", function (itemSnap) {
                var temp = itemSnap.val();
                temp.key = itemSnap.key;
                _this.anms.push(temp);
            });
            console.log(_this.anms);
        });
    };
    DeleteStudentsPage.prototype.deleteAnms = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.anmKeys.forEach(function (snip) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Organisms/Students").child(snip).remove();
        });
        this.close();
        loading.dismiss();
        this.presentToast("Students Deleted");
    };
    DeleteStudentsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    DeleteStudentsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
    };
    DeleteStudentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-delete-students',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Students\delete-students\delete-students.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Delete Students</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear (click)="close()">Cancel</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-card >\n\n    <ion-card-content>\n\n      <h2>Are you sure you want to delete these Students ?</h2>\n\n      <ion-item *ngFor="let a of anms">\n\n          {{a.StudentName}}\n\n      </ion-item>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <button ion-button color="danger"  (click)="deleteStudents()">Delete</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Students\delete-students\delete-students.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DeleteStudentsPage);
    return DeleteStudentsPage;
}());

//# sourceMappingURL=delete-students.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditStudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditStudentPage = /** @class */ (function () {
    function EditStudentPage(navCtrl, loadingCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.student = this.navParams.get("Student");
        this.getSev();
        console.log(this.student);
    }
    EditStudentPage.prototype.checkData = function () {
        if (this.student.StudentName) {
            if (this.student.ParentName) {
                if (this.student.Mobile) {
                    if (this.student.Age > 10) {
                        if (this.student.Class) {
                            if (this.student.Height) {
                                if (this.student.Weight) {
                                    if (this.student.HBL) {
                                        if (this.student.Aadhar) {
                                            if (this.student.Address) {
                                                if (this.student.Community) {
                                                    this.enterData();
                                                }
                                                else {
                                                    this.presentToast("Enter community");
                                                }
                                            }
                                            else {
                                                this.presentToast("Enter Address");
                                            }
                                        }
                                        else {
                                            this.presentToast("Aadhar Number Not Valid");
                                        }
                                    }
                                    else {
                                        this.presentToast("Enter HB Level");
                                    }
                                }
                                else {
                                    this.presentToast("Enter Weight");
                                }
                            }
                            else {
                                this.presentToast("Enter Height");
                            }
                        }
                        else {
                            this.presentToast("Enter class");
                        }
                    }
                    else {
                        this.presentToast("Age not Valid");
                    }
                }
                else {
                    this.presentToast("Mobile Number not Valid");
                }
            }
            else {
                this.presentToast("Enter Parent Name");
            }
        }
        else {
            this.presentToast("Enter Student Name");
        }
    };
    EditStudentPage.prototype.getSev = function () {
        var hbnew = +this.student.HBL;
        if (hbnew <= 6) {
            this.student.Severity = "Severely Anaemic";
            this.followUpDays = "30";
            this.sevC = "s";
        }
        if (hbnew == 7 || hbnew == 8) {
            this.student.Severity = "Moderately Anaemic";
            this.followUpDays = "45";
            this.sevC = "mo";
        }
        if (hbnew == 9 || hbnew == 10) {
            this.student.Severity = "Mildly  Anaemic";
            this.followUpDays = "45";
            this.sevC = "mi";
        }
        if (hbnew >= 11) {
            this.student.Severity = "Healthy";
            this.followUpDays = "60";
            this.sevC = "h";
        }
    };
    EditStudentPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: "middle",
            duration: 4000,
            showCloseButton: false,
        });
        toast.present();
    };
    EditStudentPage.prototype.enterData = function () {
        var _this = this;
        var kk = this.student.key;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        delete this.student.key;
        delete this.student.colori;
        delete this.student.SchoolName;
        delete this.student.VillageName;
        delete this.student.MandalName;
        delete this.student.ANMName;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Organisms/Students").child(kk).set(this.student).then(function () {
            _this.presentToast("Student Updated");
            _this.navCtrl.pop();
            loading.dismiss();
        }).catch(function (e) {
            console.log("Error Found");
            console.log(e);
            loading.dismiss();
        });
    };
    EditStudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-student',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Students\edit-student\edit-student.html"*/'<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>Edit Student</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n        <ion-card [color]="sevC">\n\n            <ion-card-content text-center >\n\n              {{student.Severity}}\n\n            </ion-card-content>\n\n          </ion-card>\n\n      <ion-card>\n\n    <ion-card-content>\n\n      <ion-item>\n\n        <ion-label floating>Student Name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="student.StudentName"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Parent Name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="student.ParentName"></ion-input>\n\n      </ion-item>\n\n      <ion-row>\n\n        <ion-item>\n\n          <ion-label floating >Community</ion-label> \n\n          <ion-select [(ngModel)]="student.Community" >\n\n            <ion-option value="SC">SC</ion-option>\n\n            <ion-option value="ST">ST</ion-option>\n\n            <ion-option value="BC">BC</ion-option>\n\n            <ion-option value="OC">OC</ion-option>\n\n            <ion-option value="Minority">Minority</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-row>\n\n        <ion-item>\n\n        <ion-label floating>HBL</ion-label>\n\n        <ion-input type="number" [(ngModel)]="student.HBL" (ionChange)="getSev()" ></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Age</ion-label>\n\n        <ion-input type="number" [(ngModel)]="student.Age"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Class</ion-label>\n\n        <ion-input type="number" [(ngModel)]="student.Class"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Mobile</ion-label>\n\n        <ion-input type="number" [(ngModel)]="student.Mobile"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Height</ion-label>\n\n        <ion-input type="number" [(ngModel)]="student.Height"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Weight</ion-label>\n\n        <ion-input type="number" [(ngModel)]="student.Weight"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Aadhar</ion-label>\n\n        <ion-input type="number" [(ngModel)]="student.Aadhar"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Address</ion-label>\n\n        <ion-input type="text" [(ngModel)]="student.Address"></ion-input>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-col>\n\n\n\n<ion-col col-6>\n\n    <button float-right ion-button (click)="checkData()">Update</button>\n\n    <ion-card>\n\n    <ion-card-content>\n\n\n\n\n\n      <ion-item>\n\n        <p ion-text item-start color="primary">Mandal</p>\n\n        <p item-end>{{student.MandalName}}</p>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n        <p ion-text item-start color="primary">Village</p>\n\n        <p item-end>{{student.VillageName}}</p>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <p ion-text item-start color="primary">School</p>\n\n        <p item-end>{{student.SchoolName}}</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <p ion-text item-start color="primary">ANM</p>\n\n        <p item-end>{{student.ANMName}}</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <p ion-text item-start color="primary">Entry Date</p>\n\n        <p item-end>{{student.EntryDate | date : \'mediumDate\'}}</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <p ion-text item-start color="primary">Follow Up Date</p>\n\n        <p item-end>{{student.FollowUpDate | date : \'mediumDate\'}}</p>\n\n      </ion-item>\n\n\n\n      \n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-col>\n\n\n\n</ion-row>\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Students\edit-student\edit-student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EditStudentPage);
    return EditStudentPage;
}());

//# sourceMappingURL=edit-student.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMandalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_mandals_add_mandals__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mandal_details_mandal_details__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xlsx__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewMandalsPage = /** @class */ (function () {
    function ViewMandalsPage(navCtrl, db, toastCtrl, alertCtrl, modalCtrl, menuCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.pageName = "Mandals";
        this.areaRef = this.db.list('Subs/Mandals');
        this.area = [];
        this.areasLoaded = [];
        this.menuCtrl.enable(true);
        this.getAreas();
    }
    ViewMandalsPage.prototype.getAreas = function () {
        var _this = this;
        this.areaRef.snapshotChanges().subscribe(function (snap) {
            var tempArray = [];
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                var severeRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Counters/Mandals").child(snp.key).child("Severity");
                severeRef.child("Severely Anaemic").once("value", function (svereSnap) { temp.Severe = svereSnap.numChildren(); });
                severeRef.child("Moderately Anaemic").once("value", function (svereSnap) { temp.Moderate = svereSnap.numChildren(); });
                severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) { temp.Mildly = svereSnap.numChildren(); });
                severeRef.child("Healthy").once("value", function (svereSnap) { temp.Healthy = svereSnap.numChildren(); });
                tempArray.push(temp);
            });
            _this.area = tempArray;
            _this.areasLoaded = tempArray;
        });
    };
    ViewMandalsPage.prototype.initializeItems = function () {
        this.area = this.areasLoaded;
    };
    ViewMandalsPage.prototype.getItems = function (searchbar) {
        this.initializeItems();
        var q = searchbar;
        if (!q) {
            return;
        }
        this.area = this.area.filter(function (v) {
            if (v.Name && q) {
                if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    ViewMandalsPage.prototype.gtAddArea = function () {
        var areaAdd = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_mandals_add_mandals__["a" /* AddMandalsPage */], null, { enableBackdropDismiss: false });
        areaAdd.present();
    };
    ViewMandalsPage.prototype.gtMandalDetails = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mandal_details_mandal_details__["a" /* MandalDetailsPage */], { mandal: a });
    };
    ViewMandalsPage.prototype.exporti = function () {
        var newArea = this.area;
        newArea.forEach(function (snip) {
            delete snip.TimeStamp;
            delete snip.key;
        });
        var sheet = __WEBPACK_IMPORTED_MODULE_6_xlsx__["utils"].json_to_sheet(newArea);
        var wb = {
            SheetNames: ["export"],
            Sheets: {
                "export": sheet
            }
        };
        var wbout = __WEBPACK_IMPORTED_MODULE_6_xlsx__["write"](wb, {
            bookType: 'xlsx',
            bookSST: false,
            type: 'binary'
        });
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i)
                view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
        var self = this;
        __WEBPACK_IMPORTED_MODULE_7_file_saver__(blob, this.pageName + '.xlsx');
    };
    ViewMandalsPage.prototype.prnt = function () {
        window.print();
        return false;
    };
    ViewMandalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-mandals',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Mandals\view-mandals\view-mandals.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{pageName}} </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n\n\n      <ion-col col-6>\n\n        <ion-searchbar item-end animated="true" placeholder="Search a Mandal" [(ngModel)]="searchbar" (ionInput)="getItems(searchbar)"></ion-searchbar>\n\n      </ion-col>\n\n      <ion-col col-6> \n\n        <button ion-button float-right (click)="prnt()">\n\n          Print\n\n          <ion-icon padding-left name="md-print"></ion-icon>\n\n        </button>\n\n        <button ion-button float-right (click)="exporti()">\n\n          Export\n\n          <ion-icon padding-left name="share-alt"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n  <ion-grid>\n\n    <ion-list-header color="primary">\n\n      <ion-row>\n\n        <ion-col col-1>\n\n        </ion-col>\n\n        <ion-col col-2 >\n\n          <p class="headBar">Name</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Severely Anaemic</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Moderately Anaemic</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Mildly Anaemic</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Healthy</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list-header>\n\n  </ion-grid>\n\n\n\n\n\n  <ion-grid>\n\n    <ion-item *ngFor="let a of area;let i = index">\n\n      <ion-row>\n\n        <ion-col col-1>\n\n          <p ion-text text-center><strong>{{i+1}}</strong></p>\n\n        </ion-col>\n\n        <ion-col col-2 (click)="gtMandalDetails(a)" class="curs">\n\n          <h2 ion-text text-center color="primary">{{a.Name}}</h2>\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n          <h2>{{a.Severe}}</h2><br />\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n          <h2>{{a.Moderate}}</h2><br />\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n          <h2>{{a.Mildly}}</h2><br />\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n          <h2>{{a.Healthy}}</h2><br />\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="danger" (click)="gtAddArea()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Mandals\view-mandals\view-mandals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ViewMandalsPage);
    return ViewMandalsPage;
}());

//# sourceMappingURL=view-mandals.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAmnsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_amns_add_amns__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anm_details_anm_details__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__del_anm_del_anm__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Schools_school_details_school_details__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_xlsx__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_file_saver__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ViewAmnsPage = /** @class */ (function () {
    function ViewAmnsPage(navCtrl, db, alertCtrl, menuCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.pgName = "ANMs";
        this.anmRef = this.db.list("Organisms/Anms");
        this.anms = [];
        this.anmsLoaded = [];
        this.selArray = [];
        this.menuCtrl.enable(true);
        this.getAnms();
    }
    ViewAmnsPage.prototype.getAnms = function () {
        var _this = this;
        this.anmRef.snapshotChanges().subscribe(function (snap) {
            var tempArray = [];
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("Organisms").child("Anm Assigns").child(temp.key).once("value", function (itemSnap) {
                    var sklsArr = [];
                    itemSnap.forEach(function (snip) {
                        var tempo = snip.val();
                        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("SubsIndex/Schools").child(snip.val().School).child("Students").once("value", function (its) {
                            tempo.Childs = its.numChildren();
                        });
                        sklsArr.push(tempo);
                    });
                    temp.Schools = sklsArr;
                    console.log(temp);
                });
                tempArray.push(temp);
            });
            _this.anms = tempArray;
            _this.anmsLoaded = tempArray;
        });
    };
    ViewAmnsPage.prototype.initializeItems = function () {
        this.anms = this.anmsLoaded;
    };
    ViewAmnsPage.prototype.getItems = function (searchbar) {
        this.initializeItems();
        var q = searchbar;
        if (!q) {
            return;
        }
        this.anms = this.anms.filter(function (v) {
            if (v.Name && q) {
                if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    ViewAmnsPage.prototype.addToArr = function (a) {
        switch (a.Checked) {
            case true:
                this.selArray.push(a.key);
                break;
            case false:
                this.rmFrmArray(a.key);
                break;
        }
    };
    ViewAmnsPage.prototype.rmFrmArray = function (key) {
        var ind = this.selArray.indexOf(key);
        this.selArray.splice(ind, 1);
    };
    ViewAmnsPage.prototype.delMulC = function () {
        var partnerView = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__del_anm_del_anm__["a" /* DelAnmPage */], { delAnms: this.selArray }, { enableBackdropDismiss: false });
        partnerView.present();
    };
    ViewAmnsPage.prototype.gtSchooolDetails = function (s) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("Subs/Schools").child(s.School).once("value", function (itemSnap) {
            _this.selSchool = itemSnap.val();
            _this.selSchool.key = itemSnap.key;
            var severeRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("Counters/Schools").child(itemSnap.key).child("Severity");
            severeRef.child("Severely Anaemic").once("value", function (svereSnap) { _this.selSchool.Severe = svereSnap.numChildren(); });
            severeRef.child("Moderately Anaemic").once("value", function (svereSnap) { _this.selSchool.Moderate = svereSnap.numChildren(); });
            severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) { _this.selSchool.Mildly = svereSnap.numChildren(); });
            severeRef.child("Healthy").once("value", function (svereSnap) { _this.selSchool.Healthy = svereSnap.numChildren(); });
        }).then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__Schools_school_details_school_details__["a" /* SchoolDetailsPage */], { school: _this.selSchool });
        });
    };
    ViewAmnsPage.prototype.gtAnmDetails = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__anm_details_anm_details__["a" /* AnmDetailsPage */], { anm: a });
    };
    ViewAmnsPage.prototype.gtAddANM = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_amns_add_amns__["a" /* AddAmnsPage */]);
    };
    ViewAmnsPage.prototype.exporti = function () {
        var newArea = this.anms;
        newArea.forEach(function (snip) {
            delete snip.key;
            // snip.Schools.forEach(sn=>{
            //   console.log(sn.SchoolName)
            // })
        });
        var sheet = __WEBPACK_IMPORTED_MODULE_8_xlsx__["utils"].json_to_sheet(newArea);
        var wb = {
            SheetNames: ["export"],
            Sheets: {
                "export": sheet
            }
        };
        var wbout = __WEBPACK_IMPORTED_MODULE_8_xlsx__["write"](wb, {
            bookType: 'xlsx',
            bookSST: false,
            type: 'binary'
        });
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i)
                view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
        var self = this;
        __WEBPACK_IMPORTED_MODULE_9_file_saver__(blob, this.pgName + '.xlsx');
    };
    ViewAmnsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-amns',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\view-amns\view-amns.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{pgName}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-searchbar item-end animated="true" placeholder="Search an ANM ..." [(ngModel)]="searchbar" (ionInput)="getItems(searchbar)"></ion-searchbar>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button float-right (click)="exporti()">\n\n          Export\n\n          <ion-icon padding-left name="share-alt"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n  <ion-grid>\n\n    <ion-navbar color="primary">\n\n      <ion-row>\n\n        <ion-col col-1>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Name</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Phone No.</p>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <p class="headBar" text-center>Schools</p>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <p class="headBar" text-center>Schools</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-navbar>\n\n  </ion-grid>\n\n\n\n  <!-- <button ion-button float-right color="light" *ngIf="selArray.length" (click)="clearSel()">Clear Selection</button> -->\n\n\n\n  <ion-grid>\n\n    <ion-card *ngFor="let a of anms;let i = index">\n\n      <ion-card-content>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <ion-checkbox [(ngModel)]="a.Checked" (ionChange)="addToArr(a)"></ion-checkbox>\n\n          </ion-col>\n\n          <ion-col col-1>\n\n            <p ion-text><strong>{{i+1}}</strong></p>\n\n          </ion-col>\n\n          <ion-col col-2 (click)="gtAnmDetails(a)" class="curs" ion-text color="primary">\n\n            <h1>{{a.Name}}</h1>\n\n          </ion-col>\n\n          <ion-col col-2 text-center>\n\n            <h2 ion-text color="primary">{{a.Phone}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-4 text-center class="curs">\n\n            <h2 (click)="gtSchooolDetails(s)" *ngFor="let s of a.Schools" padding-bottom ion-text color="primary">{{s.SchoolName}}\n\n              ({{s.Childs}}) </h2>\n\n          </ion-col>\n\n\n\n\n\n\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-grid>\n\n\n\n\n\n  <ion-fab right bottom *ngIf="!selArray.length">\n\n    <button ion-fab color="primary" (click)="gtAddANM()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n  <ion-fab right bottom *ngIf="selArray.length">\n\n    <button ion-fab color="danger" (click)="delMulC()">\n\n      <ion-icon name="md-trash"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\view-amns\view-amns.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ViewAmnsPage);
    return ViewAmnsPage;
}());

//# sourceMappingURL=view-amns.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_xlsx__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Students_student_details_student_details__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Subs_Schools_school_details_school_details__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Subs_Mandals_mandal_details_mandal_details__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Subs_Villages_village_details_village_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Subs_Anms_anm_details_anm_details__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Students_delete_students_delete_students__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Students_edit_student_edit_student__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, db, loadingCtrl, modalCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.pageName = "Dashboard";
        this.districtSel = "Wanaparthy";
        this.students = [];
        this.filteredStudents = [];
        this.mandals = [];
        this.villages = [];
        this.schools = [];
        this.mandalSel = "all";
        this.villageSel = "all";
        this.schoolSel = "all";
        this.casteSel = "all";
        this.anL = "all";
        this.age = "all";
        this.clSel = 'all';
        this.totAnms = 0;
        this.filters = {};
        this.selArray = [];
        //nums
        this.totSev = 0;
        this.totMod = 0;
        this.totMild = 0;
        this.totHeal = 0;
        this.totSC = 0;
        this.totST = 0;
        this.totBC = 0;
        this.totOC = 0;
        this.totMin = 0;
        this.totSch = 0;
        this.primaryStudents = this.db.list('Organisms/Students', function (ref) { return ref.orderByChild("StudentName"); });
        this.primaryVillages = this.db.list("Subs/Villages", function (ref) { return ref.orderByChild("Name"); });
        this.menuCtrl.enable(true);
        this.gtAnms();
        this.getMandals();
        this.getVillages();
        this.getSchools();
    }
    DashboardPage.prototype.ngOnInit = function () {
        this.getStudents();
    };
    DashboardPage.prototype.getStudents = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.students = [];
        this.primaryStudents.snapshotChanges()
            .subscribe(function (itemSnap) {
            itemSnap.forEach(function (snip) {
                var temp = snip.payload.val();
                temp.key = snip.key;
                _this.students.push(temp);
            });
            _this.applyFilters();
        });
        this.getMandals();
        this.getVillages();
        this.getSchools();
        loading.dismiss();
    };
    DashboardPage.prototype.applyFilters = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.filteredStudents = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.students, __WEBPACK_IMPORTED_MODULE_4_lodash__["conforms"](this.filters));
        this.allNumsZero();
        this.filteredStudents.forEach(function (temp) {
            switch (temp.Severity) {
                case 'Severely Anaemic':
                    temp.colori = "s";
                    _this.totSev = _this.totSev + 1;
                    break;
                case 'Moderately Anaemic':
                    temp.colori = "mo";
                    _this.totMod = _this.totMod + 1;
                    break;
                case 'Mildly  Anaemic':
                    temp.colori = "mi";
                    _this.totMild = _this.totMild + 1;
                    break;
                case 'Healthy':
                    temp.colori = "h";
                    _this.totHeal = _this.totHeal + 1;
                    break;
            }
            switch (temp.Community) {
                case "SC":
                    _this.totSC = _this.totSC + 1;
                    break;
                case "ST":
                    _this.totST = _this.totST + 1;
                    break;
                case "BC":
                    _this.totBC = _this.totBC + 1;
                    break;
                case "OC":
                    _this.totOC = _this.totOC + 1;
                    break;
                case "Minority":
                    _this.totMin = _this.totMin + 1;
                    break;
            }
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Schools").child(temp.Schools).once("value", function (s) {
                temp.SchoolName = s.val().Name;
            });
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Villages").child(temp.Village).once("value", function (s) {
                temp.VillageName = s.val().Name;
            });
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Mandals").child(temp.Mandal).once("value", function (s) {
                temp.MandalName = s.val().Name;
            });
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Anms").child(temp.ANM).once("value", function (s) {
                temp.ANMName = s.val().Name;
            }).then(function () {
                loading.dismiss();
            });
        });
    };
    DashboardPage.prototype.addToArr = function (a) {
        switch (a.Checked) {
            case true:
                this.selArray.push(a.key);
                break;
            case false:
                this.rmFrmArray(a.key);
                break;
        }
    };
    DashboardPage.prototype.rmFrmArray = function (key) {
        var ind = this.selArray.indexOf(key);
        this.selArray.splice(ind, 1);
    };
    DashboardPage.prototype.delMulC = function () {
        var partnerView = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__Students_delete_students_delete_students__["a" /* DeleteStudentsPage */], { delAnms: this.selArray }, { enableBackdropDismiss: false });
        partnerView.present();
    };
    /// filter property by equality to rule
    DashboardPage.prototype.filterExact = function (property, rule) {
        if (rule == "all")
            this.removeFilter(property);
        else {
            this.filters[property] = function (val) { return val == rule; };
            this.applyFilters();
        }
    };
    DashboardPage.prototype.editStudent = function (a) {
        // console.log(a);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__Students_edit_student_edit_student__["a" /* EditStudentPage */], { Student: a });
    };
    DashboardPage.prototype.allNumsZero = function () {
        this.totSev = 0;
        this.totMod = 0;
        this.totMild = 0;
        this.totHeal = 0;
        this.totSC = 0;
        this.totST = 0;
        this.totBC = 0;
        this.totOC = 0;
        this.totMin = 0;
        this.totSch = 0;
    };
    /// removes filter
    DashboardPage.prototype.removeFilter = function (property) {
        delete this.filters[property];
        this[property] = null;
        this.applyFilters();
    };
    DashboardPage.prototype.getMandals = function () {
        var _this = this;
        this.db.list("Subs/Mandals", function (ref) { return ref.orderByChild("Name"); })
            .snapshotChanges().subscribe(function (itemSnap) {
            _this.mandals = [];
            itemSnap.forEach(function (item) {
                var temp = item.payload.val();
                temp.key = item.key;
                _this.mandals.push(temp);
            });
        });
    };
    DashboardPage.prototype.getVillages = function () {
        var _this = this;
        this.primaryVillages.snapshotChanges().subscribe(function (itemSnap) {
            _this.villages = [];
            itemSnap.forEach(function (item) {
                var temp = item.payload.val();
                temp.key = item.key;
                _this.villages.push(temp);
            });
        });
    };
    DashboardPage.prototype.getSchools = function () {
        var _this = this;
        this.db.list("Subs/Schools", function (ref) { return ref.orderByChild("Name"); })
            .snapshotChanges().subscribe(function (itemSnap) {
            _this.schools = [];
            itemSnap.forEach(function (item) {
                var temp = item.payload.val();
                temp.key = item.key;
                _this.schools.push(temp);
            });
        });
    };
    DashboardPage.prototype.checkMandal = function () {
        if (this.mandalSel == "all") {
            this.getMandals();
            this.getVillages();
            this.getSchools();
            this.getStudents();
            this.villageSel = "all";
            this.schoolSel = "all";
        }
        else {
            this.villageSel = "all";
            this.schoolSel = "all";
            this.manWiseVills();
            this.getMandalwiseStudents(this.mandalSel);
        }
    };
    DashboardPage.prototype.manWiseVills = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.db.list("SubsIndex/Mandals/" + this.mandalSel + "/Villages", function (ref) { return ref.orderByChild("Name"); })
            .snapshotChanges().subscribe(function (itemSnap) {
            _this.villages = [];
            itemSnap.forEach(function (item) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Villages/").child(item.key).orderByChild("Name").once("value", function (iSnap) {
                    var temp = iSnap.val();
                    temp.key = iSnap.key;
                    _this.villages.push(temp);
                }).then(function () {
                    _this.db.list("SubsIndex/Mandals/" + _this.mandalSel + "/Schools", function (ref) { return ref.orderByChild("Name"); })
                        .snapshotChanges().subscribe(function (itemSnap) {
                        _this.schools = [];
                        itemSnap.forEach(function (item) {
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Schools/").child(item.key).orderByChild("Name").once("value", function (iSnap) {
                                var temp = iSnap.val();
                                temp.key = iSnap.val();
                                _this.students.push(temp);
                            }).then(function () {
                                loading.dismiss();
                            });
                        });
                    });
                });
            });
        });
    };
    DashboardPage.prototype.checkVillage = function () {
        if (this.villageSel == "all") {
            this.getVillages();
            this.getSchools();
            this.getStudents();
            this.schoolSel = "all";
        }
        else {
            this.schoolSel = "all";
            this.villWiseVills();
            this.getVillagewiseStudents(this.villageSel);
        }
    };
    DashboardPage.prototype.villWiseVills = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.db.list("SubsIndex/Villages/" + this.villageSel + "/Schools", function (ref) { return ref.orderByChild("Name"); })
            .snapshotChanges().subscribe(function (itemSnap) {
            _this.schools = [];
            itemSnap.forEach(function (item) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Schools/").child(item.key).orderByChild("Name").once("value", function (iSnap) {
                    var temp = iSnap.val();
                    temp.key = iSnap.val();
                    _this.schools.push(temp);
                }).then(function () {
                    loading.dismiss();
                });
            });
        });
    };
    DashboardPage.prototype.gtAnms = function () {
        var _this = this;
        this.db.list("Organisms/Anms").snapshotChanges().subscribe(function (snap) {
            _this.totAnms = snap.length;
        });
    };
    DashboardPage.prototype.exporti = function () {
        var newArea = this.students;
        newArea.forEach(function (snip) {
            delete snip.key;
            delete snip.ANM;
            delete snip.Mandal;
            delete snip.Village;
            delete snip.Schools;
        });
        var sheet = __WEBPACK_IMPORTED_MODULE_5_xlsx__["utils"].json_to_sheet(newArea);
        var wb = {
            SheetNames: ["export"],
            Sheets: {
                "export": sheet
            }
        };
        var wbout = __WEBPACK_IMPORTED_MODULE_5_xlsx__["write"](wb, {
            bookType: 'xlsx',
            bookSST: false,
            type: 'binary'
        });
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i)
                view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
        var self = this;
        __WEBPACK_IMPORTED_MODULE_6_file_saver__(blob, this.pageName + '.xlsx');
    };
    DashboardPage.prototype.gtStudentDetails = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__Students_student_details_student_details__["a" /* StudentDetailsPage */], { student: a });
    };
    DashboardPage.prototype.getMandalwiseStudents = function (mand) {
        var _this = this;
        var severeRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Counters/Mandals").child(mand).child("Severity");
        this.students = [];
        severeRef.child("Severely Anaemic").once("value", function (svereSnap) {
            svereSnap.forEach(function (ssp) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
            });
        }).then(function () {
            severeRef.child("Moderately Anaemic").once("value", function (svereSnap) {
                svereSnap.forEach(function (ssp) {
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
                });
            }).then(function () {
                severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) {
                    svereSnap.forEach(function (ssp) {
                        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
                    });
                }).then(function () {
                    severeRef.child("Healthy").once("value", function (svereSnap) {
                        svereSnap.forEach(function (ssp) {
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
                        });
                    }).then(function () {
                        _this.applyFilters();
                    });
                });
            });
        });
    };
    DashboardPage.prototype.getVillagewiseStudents = function (mand) {
        var _this = this;
        var severeRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Counters/Villages").child(mand).child("Severity");
        this.students = [];
        severeRef.child("Severely Anaemic").once("value", function (svereSnap) {
            svereSnap.forEach(function (ssp) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
            });
        }).then(function () {
            severeRef.child("Moderately Anaemic").once("value", function (svereSnap) {
                svereSnap.forEach(function (ssp) {
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
                });
            }).then(function () {
                severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) {
                    svereSnap.forEach(function (ssp) {
                        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
                    });
                }).then(function () {
                    severeRef.child("Healthy").once("value", function (svereSnap) {
                        svereSnap.forEach(function (ssp) {
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
                        });
                    }).then(function () {
                        _this.applyFilters();
                    });
                });
            });
        });
    };
    DashboardPage.prototype.checkSchool = function () {
        if (this.schoolSel == "all") {
            this.getSchools();
            this.getStudents();
        }
        else {
            this.getVillagewiseStudents(this.schoolSel);
        }
    };
    DashboardPage.prototype.getSchoolwiseStudents = function (mand) {
        var _this = this;
        var severeRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("SubsIndex/Schools").child(mand).child("Students");
        this.students = [];
        severeRef.once("value", function (svereSnap) {
            svereSnap.forEach(function (ssp) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
            });
        }).then(function () {
            _this.applyFilters();
        });
    };
    DashboardPage.prototype.gtSchoolDetails = function (a) {
        var schho;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Schools").child(a.Schools).once("value", function (itemSnap) {
            schho = itemSnap.val();
            schho.key = itemSnap.key;
            var severeRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Counters/Schools").child(schho.key).child("Severity");
            severeRef.child("Severely Anaemic").once("value", function (svereSnap) { schho.Severe = svereSnap.numChildren(); });
            severeRef.child("Moderately Anaemic").once("value", function (svereSnap) { schho.Moderate = svereSnap.numChildren(); });
            severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) { schho.Mildly = svereSnap.numChildren(); });
            severeRef.child("Healthy").once("value", function (svereSnap) { schho.Healthy = svereSnap.numChildren(); });
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__Subs_Schools_school_details_school_details__["a" /* SchoolDetailsPage */], { school: schho });
    };
    DashboardPage.prototype.gtMandalDetails = function (a) {
        var schho;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Mandals").child(a.Mandal).once("value", function (itemSnap) {
            schho = itemSnap.val();
            schho.key = itemSnap.key;
            var severeRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Counters/Mandals").child(schho.key).child("Severity");
            severeRef.child("Severely Anaemic").once("value", function (svereSnap) { schho.Severe = svereSnap.numChildren(); });
            severeRef.child("Moderately Anaemic").once("value", function (svereSnap) { schho.Moderate = svereSnap.numChildren(); });
            severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) { schho.Mildly = svereSnap.numChildren(); });
            severeRef.child("Healthy").once("value", function (svereSnap) { schho.Healthy = svereSnap.numChildren(); });
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__Subs_Mandals_mandal_details_mandal_details__["a" /* MandalDetailsPage */], { mandal: schho });
    };
    DashboardPage.prototype.gtVillageDetails = function (a) {
        var schho;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Villages").child(a.Village).once("value", function (itemSnap) {
            schho = itemSnap.val();
            var severeRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Counters/Villages").child(a.Village).child("Severity");
            severeRef.child("Severely Anaemic").once("value", function (svereSnap) { schho.Severe = svereSnap.numChildren(); });
            severeRef.child("Moderately Anaemic").once("value", function (svereSnap) { schho.Moderate = svereSnap.numChildren(); });
            severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) { schho.Mildly = svereSnap.numChildren(); });
            severeRef.child("Healthy").once("value", function (svereSnap) { schho.Healthy = svereSnap.numChildren(); });
            schho.key = itemSnap.key;
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__Subs_Villages_village_details_village_details__["a" /* VillageDetailsPage */], { village: schho });
    };
    DashboardPage.prototype.gtANMDetails = function (a) {
        var schho;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Anms").child(a.ANM).once("value", function (itemSnap) {
            schho = itemSnap.val();
            schho.key = itemSnap.key;
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__Subs_Anms_anm_details_anm_details__["a" /* AnmDetailsPage */], { anm: schho });
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Extra\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons end>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <p ion-text color="whiter">{{adminName}} </p>\n\n    </ion-buttons>\n\n    <ion-title>{{pageName}} </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="darkBg">\n\n\n\n  <ion-grid class="whiteBg">\n\n    <ion-row>\n\n\n\n      <ion-col col-2>\n\n        <ion-item no-lines >\n\n          <ion-label stacked>Mandals</ion-label>\n\n          <ion-select class="darkBg" [(ngModel)]="mandalSel" (ionChange)="checkMandal()">\n\n            <ion-option value="all">All</ion-option>\n\n            <ion-option *ngFor="let m of mandals" [value]="m.key">{{m.Name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-2>\n\n        <ion-item no-lines>\n\n          <ion-label stacked>Villages</ion-label>\n\n          <ion-select class="darkBg" [(ngModel)]="villageSel" (ionChange)="checkVillage()" >\n\n            <ion-option value="all">All</ion-option>\n\n            <ion-option *ngFor="let v of villages" [value]="v.key">{{v.Name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <ion-item no-lines>\n\n          <ion-label stacked>Schools</ion-label>\n\n          <ion-select class="darkBg" [(ngModel)]="schoolSel" (ionChange)="checkSchool()" >\n\n            <ion-option value="all">All</ion-option>\n\n            <ion-option *ngFor="let s of schools" [value]="s.key">{{s.Name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n\n\n\n\n\n\n      <ion-col col-2>\n\n        <ion-item no-lines>\n\n          <ion-label stacked>Community</ion-label>\n\n          <ion-select [(ngModel)]="casteSel" class="darkBg" (ionChange)="filterExact(\'Community\',casteSel)">\n\n            <ion-option value="all">All</ion-option>\n\n            <ion-option value="SC">SC</ion-option>\n\n            <ion-option value="ST">ST</ion-option>\n\n            <ion-option value="BC">BC</ion-option>\n\n            <ion-option value="OC">OC</ion-option>\n\n            <ion-option value="Minority">Minority</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        <ion-item no-lines>\n\n          <ion-label stacked>Age</ion-label>\n\n          <ion-select class="darkBg" [(ngModel)]="age" (ionChange)="filterExact(\'Age\',age)">\n\n            <ion-option value="all">All</ion-option>\n\n            <ion-option value="10">10</ion-option>\n\n            <ion-option value="11">11</ion-option>\n\n            <ion-option value="12">12</ion-option>\n\n            <ion-option value="13">13</ion-option>\n\n            <ion-option value="14">14</ion-option>\n\n            <ion-option value="15">15</ion-option>\n\n            <ion-option value="16">16</ion-option>\n\n            <ion-option value="17">17</ion-option>\n\n            <ion-option value="18">18</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <ion-item no-lines>\n\n          <ion-label stacked>Severity</ion-label>\n\n          <ion-select [(ngModel)]="anL" class="darkBg" (ionChange)="filterExact(\'Severity\', this.anL)">\n\n            <ion-option value="all">All</ion-option>\n\n            <ion-option value="Severely Anaemic">Severely Anaemic</ion-option>\n\n            <ion-option value="Moderately Anaemic">Moderately Anaemic</ion-option>\n\n            <ion-option value="Mildly  Anaemic">Mildly Anaemic</ion-option>\n\n            <ion-option value="Healthy">Healthy</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        <ion-item no-lines>\n\n          <ion-label stacked>Class</ion-label>\n\n          <ion-select class="darkBg" (ionChange)="filterExact(\'Class\',clSel)" [(ngModel)]="clSel">\n\n            <ion-option value="all">All</ion-option>\n\n            <ion-option value="6">6th</ion-option>\n\n            <ion-option value="7">7th</ion-option>\n\n            <ion-option value="8">8th</ion-option>\n\n            <ion-option value="9">9th</ion-option>\n\n            <ion-option value="10">10th</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n\n\n\n  </ion-grid>\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-3 margin-horizontal push-1>\n\n        <h1 padding-left> Anaemia Level</h1>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-row>\n\n              <ion-col  class="br1 severe" col-6>\n\n                Severely<br />\n\n                <p class="nums">{{totSev}}</p>\n\n              </ion-col>\n\n              <ion-col class="moder" col-6>\n\n                Moderately\n\n                <p class="nums">{{totMod}}</p>\n\n              </ion-col>\n\n              <ion-col col-6 class="mild" >\n\n                Mildly\n\n                <p class="nums">{{totMild}}</p>\n\n              </ion-col>\n\n              <ion-col class="br4 heal" col-6>\n\n                Healthy\n\n                <p class="nums">{{totHeal}}</p>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-3 margin-horizontal push-1>\n\n        <h1 padding-left>Community</h1>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-row>\n\n              <ion-col class="br1 br4" col-6>\n\n                SC<br />\n\n                <p class="nums">{{totSC}}</p>\n\n              </ion-col>\n\n              <ion-col col-6 class="br1 br4" >\n\n                ST\n\n                <p class="nums">{{totST}}</p>\n\n              </ion-col>\n\n              <ion-col col-6 class="br1 br4" >\n\n                BC\n\n                <p class="nums">{{totBC}}</p>\n\n              </ion-col>\n\n              <ion-col class="br1 br4 " col-6>\n\n                OC\n\n                <p class="nums">{{totOC}}</p>\n\n              </ion-col>\n\n              <ion-col class="br1 br4" col-6>\n\n                Minority\n\n                <p class="nums">{{totMin}}</p>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-3 margin-horizontal push-1>\n\n        <h1 padding-left>Total Students</h1>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-row>\n\n              <ion-col class="br1 br4" col-12>\n\n                <!-- No. of Students<br /> -->\n\n                <p class="nums">{{filteredStudents.length}}</p>\n\n              </ion-col>\n\n              <!-- <ion-col class="br4 br1" col-6>\n\n                No. of  Schools\n\n                <p class="nums">0</p>\n\n              </ion-col>\n\n              <ion-col class="br4 br1" col-6>\n\n                No. of  ANMs\n\n                <p class="nums">{{totAnms}}</p>\n\n              </ion-col> -->\n\n            </ion-row>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n\n\n\n\n    </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <ion-navbar color="primary">\n\n      <ion-row>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1 no-padding >\n\n          <p class="headBar">Name</p>\n\n        </ion-col>\n\n        <ion-col col-1 no-padding >\n\n          <p class="headBar">Age</p>\n\n        </ion-col>\n\n        <ion-col col-1 no-padding >\n\n          <p class="headBar">Community</p>\n\n        </ion-col>\n\n        <ion-col col-1 no-padding >\n\n          <p class="headBar">Class</p>\n\n        </ion-col>\n\n        <ion-col col-1 no-padding >\n\n          <p class="headBar">School</p>\n\n        </ion-col>\n\n        <ion-col col-1 no-padding >\n\n          <p class="headBar">Village</p>\n\n        </ion-col>\n\n        <ion-col col-1 no-padding >\n\n          <p class="headBar">Mandal</p>\n\n        </ion-col>\n\n        <ion-col col-1 no-padding >\n\n          <p class="headBar">Severity</p>\n\n        </ion-col>\n\n                <ion-col col-1 no-padding >\n\n          <p class="headBar">Phone</p>\n\n        </ion-col>\n\n\n\n        <ion-col col-1 no-padding>\n\n          <p class="headBar">ANM</p>\n\n        </ion-col>\n\n        <ion-col col-1 no-padding>\n\n          <p class="headBar">Actions</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-navbar>\n\n  </ion-grid>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-searchbar item-end animated="true" placeholder="Search a Student .." [(ngModel)]="searchbar" ></ion-searchbar>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button float-right (click)="exporti()">\n\n          Export\n\n          <ion-icon padding-left name="share-alt"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <ion-card *ngFor="let a of filteredStudents;let i = index" [color]="a.colori" >\n\n      <ion-card-content>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <ion-checkbox [(ngModel)]="a.Checked" (ionChange)="addToArr(a)"></ion-checkbox>\n\n            <p ion-text><strong>{{i+1}}</strong></p>\n\n          </ion-col>\n\n          <ion-col col-1  (click)="gtStudentDetails(a)" class="curs">\n\n            {{a.StudentName}}\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <h2  >{{a.Age }}</h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <h2  >{{a.Community }}</h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <h2  >{{a.Class}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 (click)="gtSchoolDetails(a)" class="curs" >\n\n            <h2  >{{a.SchoolName}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 (click)="gtVillageDetails(a)" class="curs" >\n\n            <h2  >{{a.VillageName}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 (click)="gtMandalDetails(a)" class="curs" >\n\n            <h2  >{{a.MandalName}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <h2  >{{a.Severity}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <h2  >{{a.Mobile}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 (click)="gtANMDetails(a)" class="curs" >\n\n            <h2  >{{a.ANMName}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <button ion-button (click)="editStudent(a)" text-center>\n\n              <ion-icon name="md-create"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n\n\n\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-grid>\n\n  <ion-fab right bottom *ngIf="selArray.length">\n\n    <button ion-fab color="danger" (click)="delMulC()">\n\n      <ion-icon name="md-trash"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Extra\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignSchoolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Schools_school_details_school_details__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AssignSchoolPage = /** @class */ (function () {
    function AssignSchoolPage(navCtrl, toastCtrl, db, alertCtrl, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.anmJ = this.navParams.get("anm");
        this.mandals = [];
        this.mandalRef = this.db.list('Subs/Mandals', function (ref) { return ref.orderByChild("Name"); });
        this.villages = [];
        this.schools = [];
        this.anmJobRef = this.db.list("Organisms/Anm Assigns/" + this.anmJ.key);
        this.assignedJobs = [];
        console.log(this.anmJ);
        this.getAssignedSchools();
        this.getMandals();
    }
    AssignSchoolPage.prototype.assignSchool = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Organisms/Anm Assigns").child(this.anmJ.key).push({
            Mandal: this.mandalSel,
            Village: this.villageSel,
            School: this.schoolSel.key,
            SchoolName: this.schoolSel.Name,
        }).then(function () {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Schools").child(_this.schoolSel.key).child("ANM").child(_this.anmJ.key).set(true).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Villages").child(_this.villageSel).child("Anms").child(_this.anmJ.key).set(true).then(function () {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.mandalSel).child("Anms").child(_this.anmJ.key).set(true).then(function () {
                        _this.presentToast(_this.schoolSel.Name + " is assigned to " + _this.anmJ.Name);
                    });
                });
            });
        });
    };
    AssignSchoolPage.prototype.getAssignedSchools = function () {
        var _this = this;
        this.anmJobRef.snapshotChanges().subscribe(function (snap) {
            _this.assignedJobs = [];
            snap.forEach(function (snip) {
                var temp = snip.payload.val();
                temp.key = snip.key;
                _this.assignedJobs.push(temp);
            });
        });
    };
    AssignSchoolPage.prototype.gtSchoolDetails = function (s) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs").child("Schools").child(s.School).once("value", function (snap) {
            var temp = snap.val();
            temp.key = snap.key;
            _this.detSchool = temp;
        }).then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__Schools_school_details_school_details__["a" /* SchoolDetailsPage */], { school: _this.detSchool });
        });
    };
    AssignSchoolPage.prototype.removeSchoolC = function (js) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Unassign School ?',
            message: 'This action cannot be Undone ',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        _this.removeSchool(js);
                    }
                }
            ]
        });
        alert.present();
    };
    AssignSchoolPage.prototype.removeSchool = function (lj) {
        var _this = this;
        console.log(lj);
        console.log(this.anmJ);
        var loading = this.loadingCtrl.create({
            content: 'Loading Villages ...'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Organisms/Anm Assigns").child(this.anmJ.key).child(lj.key).remove().then(function () {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Schools").child(lj.School).child("ANM").remove().then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(lj.Mandal).child("Anms").child(_this.anmJ.key).remove().then(function () {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Villages").child(lj.Village).child("Anms").child(_this.anmJ.key).remove().then(function () {
                        loading.dismiss();
                        _this.presentToast("School UnAssigned");
                    });
                });
            });
        });
    };
    AssignSchoolPage.prototype.getMandals = function () {
        var _this = this;
        this.mandalRef.snapshotChanges().subscribe(function (snap) {
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                _this.mandals.push(temp);
            });
        });
    };
    AssignSchoolPage.prototype.getVillages = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Villages ...'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(this.mandalSel).child("Villages").once("value", function (snap) {
            _this.villages = [];
            if (!snap.exists()) {
                _this.presentToast("No Villages Found");
                loading.dismiss();
            }
            snap.forEach(function (snp) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Villages").child(snp.key).once("value", function (vil) {
                    var temp = vil.val();
                    temp.key = vil.key;
                    _this.villages.push(temp);
                }).then(function () {
                    loading.dismiss();
                });
            });
        });
    };
    AssignSchoolPage.prototype.getSchools = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Schools ...'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Villages").child(this.villageSel).child("Schools").once("value", function (snap) {
            _this.schools = [];
            if (!snap.exists()) {
                _this.presentToast("No Schools Found");
                loading.dismiss();
            }
            snap.forEach(function (snp) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Schools").child(snp.key).once("value", function (vil) {
                    var temp = vil.val();
                    temp.key = vil.key;
                    _this.schools.push(temp);
                }).then(function () {
                    loading.dismiss();
                });
            });
        });
    };
    AssignSchoolPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: "middle"
        });
        toast.present();
    };
    AssignSchoolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-assign-school',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\assign-school\assign-school.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Schools Assignments</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <ion-item no-lines class="content">\n\n          <h1 class="title" item-start>{{anmJ.FirstName}}&nbsp;{{anmJ.LastName}}</h1>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-card-title color="primary">Current Schools</ion-card-title>\n\n            <ion-item *ngFor="let j of assignedJobs" >\n\n              <p item-start class="curs" (click)="gtSchoolDetails(j)" >{{j.SchoolName}} </p>\n\n              <ion-buttons end>\n\n                <button ion-button color="danger" clear (click)="removeSchoolC(j)">Remove</button>\n\n              </ion-buttons>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-card-content>\n\n\n\n            <ion-card-title color="primary" >Assign School</ion-card-title>\n\n\n\n            <ion-item>\n\n              <ion-label floating>Select Mandal</ion-label>\n\n              <ion-select [(ngModel)]="mandalSel" (ionChange)="getVillages()">\n\n                <ion-option *ngFor="let m of mandals" [value]="m.key">{{m.Name}} </ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item >\n\n              <ion-label floating>Select Village</ion-label>\n\n              <ion-select [(ngModel)]="villageSel" (ionChange)="getSchools()">\n\n                <ion-option *ngFor="let v of villages" [value]="v.key">{{v.Name}} </ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item >\n\n              <ion-label floating>Select School</ion-label>\n\n              <ion-select [(ngModel)]="schoolSel">\n\n                <ion-option *ngFor="let s of schools" [value]="s">{{s.Name}} </ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n\n\n            <button ion-button *ngIf="schoolSel" float-right (click)="assignSchool()">Assign</button>\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\assign-school\assign-school.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AssignSchoolPage);
    return AssignSchoolPage;
}());

//# sourceMappingURL=assign-school.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAnmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditAnmPage = /** @class */ (function () {
    function EditAnmPage(navCtrl, viewCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.anm = this.navParams.get("anm");
        this.fName = this.anm.FirstName;
        this.lName = this.anm.LastName;
        this.gender = this.anm.Gender;
        this.phone = this.anm.Phone;
        console.log(this.anm);
    }
    EditAnmPage.prototype.checkData = function () {
        if (this.fName) {
            if (this.lName) {
                if (this.gender) {
                    if (this.phone.length != 10) {
                        this.updateANM();
                    }
                    else
                        (this.presentToast("Phone Empty not Valid"));
                }
                else
                    (this.presentToast("Select Gender"));
            }
            else {
                this.presentToast("Last Name Empty");
            }
        }
        else {
            this.presentToast("First Name Empty");
        }
    };
    EditAnmPage.prototype.updateANM = function () {
        if (this.fName != this.anm.FirstName) {
            console.log("changeFName");
        }
        if (this.lName != this.anm.LastName) {
            console.log("changeLName");
        }
        if (this.gender != this.anm.Gender) {
            console.log("cahnge Gender");
        }
        if (this.phone != this.anm.Phone) {
            console.log("ChangePhone");
        }
    };
    EditAnmPage.prototype.oldANM = function () {
        console.log(this.anm);
    };
    EditAnmPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    EditAnmPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: "middle"
        });
        toast.present();
    };
    EditAnmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-anm',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\edit-anm\edit-anm.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Edit ANM</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear icon-only (click)="close()">\n\n        <ion-icon name="md-close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-slides>\n\n    <ion-slide>\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <button ion-button (click)="oldANM()">Old Get</button>\n\n          <ion-item>\n\n            <ion-label floating>First Name</ion-label>\n\n            <ion-input type="text" [(ngModel)]="fName"  autofocus></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Last Name</ion-label>\n\n            <ion-input type="text" [(ngModel)]="lName"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Gender</ion-label>\n\n            <ion-select [(ngModel)]="gender">\n\n              <ion-option value="Male">Male</ion-option>\n\n              <ion-option value="Female">Female</ion-option>\n\n              <ion-option value="Other">Other</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Phone</ion-label>\n\n            <ion-input type="number" [(ngModel)]="phone"></ion-input>\n\n          </ion-item>\n\n          <button ion-button (click)="checkData()">Update</button>\n\n\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\edit-anm\edit-anm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EditAnmPage);
    return EditAnmPage;
}());

//# sourceMappingURL=edit-anm.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Subs_Mandals_view_mandals_view_mandals__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, menuCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.user = [];
        this.menuCtrl.enable(false);
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__Subs_Mandals_view_mandals_view_mandals__["a" /* ViewMandalsPage */]);
            }
        });
    };
    LoginPage.prototype.checkData = function () {
        if (this.email) {
            if (this.pass) {
                this.login();
            }
            else {
                this.presentToast("Password Not Provided");
            }
        }
        else {
            this.presentToast("Email Not Provided");
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Logging In...'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(this.email, this.pass).then(function () {
            loading.dismiss();
        }).catch(function (e) {
            var err = e.message;
            _this.presentToast(err);
            loading.dismiss();
        });
    };
    LoginPage.prototype.notAdmin = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(function () {
            _this.presentToast("You are not an Admin");
            _this.email = null;
            _this.pass = null;
        });
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: "middle",
            showCloseButton: false,
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Extra\login\login.html"*/'<ion-content padding>\n\n  <div class="bg-main">\n\n  </div>\n\n\n\n    <div class="logs">\n\n          <!-- <img src="assets/imgs/samlog.png" /> -->\n\n          <ion-item>\n\n            <ion-label stacked>Email</ion-label>\n\n            <ion-input type="email" (keyup.enter)="checkData()"  [(ngModel)]="email" autofocus ></ion-input>\n\n          </ion-item>\n\n          <ion-item >\n\n            <ion-label stacked>Password</ion-label>\n\n            <ion-input type="password" (keyup.enter)="checkData()"  [(ngModel)]="pass"></ion-input>\n\n          </ion-item>\n\n          <ion-slides>\n\n            <ion-slide>\n\n          <button ion-button color="primary" margin-top padding-left  (click)="checkData()">Login</button>\n\n          </ion-slide>\n\n          </ion-slides>`\n\n          </div>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Extra\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMandalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddMandalsPage = /** @class */ (function () {
    function AddMandalsPage(navCtrl, viewCtrl, db, toastCtrl, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.areaRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Mandals");
        this.mandals = [];
        this.getAreas();
    }
    AddMandalsPage.prototype.checkData = function () {
        if (this.name) {
            this.checkDataInDB();
        }
        else {
            this.presentToast("Mandal Name Empty");
        }
    };
    AddMandalsPage.prototype.checkDataInDB = function () {
        if (this.mandals.indexOf(this.name) > -1) {
            this.presentToast("Mandal Already Exists");
        }
        else {
            this.addCat();
        }
    };
    AddMandalsPage.prototype.addCat = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Adding Mandal ...'
        });
        loading.present();
        this.areaRef.push({
            Name: this.name,
            TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format()
        }).then(function () {
            _this.close();
            loading.dismiss();
        });
    };
    AddMandalsPage.prototype.getAreas = function () {
        var _this = this;
        this.areaRef.once("value", function (snap) {
            _this.mandals = [];
            snap.forEach(function (snp) {
                _this.mandals.push(snp.val().Name);
            });
            console.log(_this.mandals);
        });
    };
    //Support Functions
    AddMandalsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AddMandalsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: "middle"
        });
        toast.present();
    };
    AddMandalsPage.prototype.capsName = function (name) {
        this.name = name.toUpperCase();
    };
    AddMandalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-mandals',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Mandals\add-mandals\add-mandals.html"*/'<ion-header>\n\n    <ion-navbar color="primary" >\n\n      <ion-title>Add Mandal</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button clear icon-only (click)="close()">\n\n          <ion-icon name="md-close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  \n\n    <ion-card>\n\n      <ion-card-content>\n\n\n\n        <ion-item>\n\n          <ion-label  floating>Mandal Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="name" (keyup.enter)="checkData()" (ionChange)="capsName(name)" autofocus ></ion-input>\n\n        </ion-item>\n\n        \n\n  \n\n      </ion-card-content>\n\n    </ion-card>\n\n  \n\n    <button ion-button block (click)="checkData()">Add</button>\n\n  \n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Mandals\add-mandals\add-mandals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AddMandalsPage);
    return AddMandalsPage;
}());

//# sourceMappingURL=add-mandals.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_xlsx__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Students_student_details_student_details__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Subs_Schools_school_details_school_details__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Subs_Mandals_mandal_details_mandal_details__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Subs_Villages_village_details_village_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Subs_Anms_anm_details_anm_details__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Students_delete_students_delete_students__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Students_edit_student_edit_student__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var StudentsPage = /** @class */ (function () {
    function StudentsPage(navCtrl, db, loadingCtrl, modalCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.pageName = "Students";
        this.districtSel = "Wanaparthy";
        this.students = [];
        this.filteredStudents = [];
        this.mandals = [];
        this.villages = [];
        this.schools = [];
        this.mandalSel = "all";
        this.villageSel = "all";
        this.schoolSel = "all";
        this.casteSel = "all";
        this.anL = "all";
        this.age = "all";
        this.clSel = 'all';
        this.totAnms = 0;
        this.filters = {};
        this.selArray = [];
        //nums
        this.totSev = 0;
        this.totMod = 0;
        this.totMild = 0;
        this.totHeal = 0;
        this.totSC = 0;
        this.totST = 0;
        this.totBC = 0;
        this.totOC = 0;
        this.totMin = 0;
        this.totSch = 0;
        this.primaryStudents = this.db.list('Organisms/Students', function (ref) { return ref.orderByChild("StudentName"); });
        this.primaryVillages = this.db.list("Subs/Villages", function (ref) { return ref.orderByChild("Name"); });
        this.menuCtrl.enable(true);
        this.gtAnms();
        this.getMandals();
        this.getVillages();
        this.getSchools();
    }
    StudentsPage.prototype.ngOnInit = function () {
        this.getStudents();
    };
    StudentsPage.prototype.getStudents = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.students = [];
        this.primaryStudents.snapshotChanges()
            .subscribe(function (itemSnap) {
            itemSnap.forEach(function (snip) {
                var temp = snip.payload.val();
                temp.key = snip.key;
                _this.students.push(temp);
            });
            _this.applyFilters();
        });
        this.getMandals();
        this.getVillages();
        this.getSchools();
        loading.dismiss();
    };
    StudentsPage.prototype.applyFilters = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.filteredStudents = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.students, __WEBPACK_IMPORTED_MODULE_4_lodash__["conforms"](this.filters));
        this.allNumsZero();
        this.filteredStudents.forEach(function (temp) {
            switch (temp.Severity) {
                case 'Severely Anaemic':
                    temp.colori = "s";
                    _this.totSev = _this.totSev + 1;
                    break;
                case 'Moderately Anaemic':
                    temp.colori = "mo";
                    _this.totMod = _this.totMod + 1;
                    break;
                case 'Mildly  Anaemic':
                    temp.colori = "mi";
                    _this.totMild = _this.totMild + 1;
                    break;
                case 'Healthy':
                    temp.colori = "h";
                    _this.totHeal = _this.totHeal + 1;
                    break;
            }
            switch (temp.Community) {
                case "SC":
                    _this.totSC = _this.totSC + 1;
                    break;
                case "ST":
                    _this.totST = _this.totST + 1;
                    break;
                case "BC":
                    _this.totBC = _this.totBC + 1;
                    break;
                case "OC":
                    _this.totOC = _this.totOC + 1;
                    break;
                case "Minority":
                    _this.totMin = _this.totMin + 1;
                    break;
            }
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Schools").child(temp.Schools).once("value", function (s) {
                temp.SchoolName = s.val().Name;
            });
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Villages").child(temp.Village).once("value", function (s) {
                temp.VillageName = s.val().Name;
            });
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Mandals").child(temp.Mandal).once("value", function (s) {
                temp.MandalName = s.val().Name;
            });
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Anms").child(temp.ANM).once("value", function (s) {
                temp.ANMName = s.val().Name;
            }).then(function () {
                loading.dismiss();
            });
        });
    };
    StudentsPage.prototype.addToArr = function (a) {
        switch (a.Checked) {
            case true:
                this.selArray.push(a.key);
                break;
            case false:
                this.rmFrmArray(a.key);
                break;
        }
    };
    StudentsPage.prototype.rmFrmArray = function (key) {
        var ind = this.selArray.indexOf(key);
        this.selArray.splice(ind, 1);
    };
    StudentsPage.prototype.delMulC = function () {
        var partnerView = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__Students_delete_students_delete_students__["a" /* DeleteStudentsPage */], { delAnms: this.selArray }, { enableBackdropDismiss: false });
        partnerView.present();
    };
    /// filter property by equality to rule
    StudentsPage.prototype.filterExact = function (property, rule) {
        if (rule == "all")
            this.removeFilter(property);
        else {
            this.filters[property] = function (val) { return val == rule; };
            this.applyFilters();
        }
    };
    StudentsPage.prototype.editStudent = function (a) {
        // console.log(a);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__Students_edit_student_edit_student__["a" /* EditStudentPage */], { Student: a });
    };
    StudentsPage.prototype.allNumsZero = function () {
        this.totSev = 0;
        this.totMod = 0;
        this.totMild = 0;
        this.totHeal = 0;
        this.totSC = 0;
        this.totST = 0;
        this.totBC = 0;
        this.totOC = 0;
        this.totMin = 0;
        this.totSch = 0;
    };
    /// removes filter
    StudentsPage.prototype.removeFilter = function (property) {
        delete this.filters[property];
        this[property] = null;
        this.applyFilters();
    };
    StudentsPage.prototype.getMandals = function () {
        var _this = this;
        this.db.list("Subs/Mandals", function (ref) { return ref.orderByChild("Name"); })
            .snapshotChanges().subscribe(function (itemSnap) {
            _this.mandals = [];
            itemSnap.forEach(function (item) {
                var temp = item.payload.val();
                temp.key = item.key;
                _this.mandals.push(temp);
            });
        });
    };
    StudentsPage.prototype.getVillages = function () {
        var _this = this;
        this.primaryVillages.snapshotChanges().subscribe(function (itemSnap) {
            _this.villages = [];
            itemSnap.forEach(function (item) {
                var temp = item.payload.val();
                temp.key = item.key;
                _this.villages.push(temp);
            });
        });
    };
    StudentsPage.prototype.getSchools = function () {
        var _this = this;
        this.db.list("Subs/Schools", function (ref) { return ref.orderByChild("Name"); })
            .snapshotChanges().subscribe(function (itemSnap) {
            _this.schools = [];
            itemSnap.forEach(function (item) {
                var temp = item.payload.val();
                temp.key = item.key;
                _this.schools.push(temp);
            });
        });
    };
    StudentsPage.prototype.checkMandal = function () {
        if (this.mandalSel == "all") {
            this.getMandals();
            this.getVillages();
            this.getSchools();
            this.getStudents();
            this.villageSel = "all";
            this.schoolSel = "all";
        }
        else {
            this.villageSel = "all";
            this.schoolSel = "all";
            this.manWiseVills();
            this.getMandalwiseStudents(this.mandalSel);
        }
    };
    StudentsPage.prototype.manWiseVills = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.db.list("SubsIndex/Mandals/" + this.mandalSel + "/Villages", function (ref) { return ref.orderByChild("Name"); })
            .snapshotChanges().subscribe(function (itemSnap) {
            _this.villages = [];
            itemSnap.forEach(function (item) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Villages/").child(item.key).orderByChild("Name").once("value", function (iSnap) {
                    var temp = iSnap.val();
                    temp.key = iSnap.key;
                    _this.villages.push(temp);
                }).then(function () {
                    _this.db.list("SubsIndex/Mandals/" + _this.mandalSel + "/Schools", function (ref) { return ref.orderByChild("Name"); })
                        .snapshotChanges().subscribe(function (itemSnap) {
                        _this.schools = [];
                        itemSnap.forEach(function (item) {
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Schools/").child(item.key).orderByChild("Name").once("value", function (iSnap) {
                                var temp = iSnap.val();
                                temp.key = iSnap.val();
                                _this.schools.push(temp);
                            }).then(function () {
                                loading.dismiss();
                            });
                        });
                    });
                });
            });
        });
    };
    StudentsPage.prototype.checkVillage = function () {
        if (this.villageSel == "all") {
            this.getVillages();
            this.getSchools();
            this.getStudents();
            this.schoolSel = "all";
        }
        else {
            this.schoolSel = "all";
            this.villWiseVills();
            this.getVillagewiseStudents(this.villageSel);
        }
    };
    StudentsPage.prototype.villWiseVills = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.db.list("SubsIndex/Villages/" + this.villageSel + "/Schools", function (ref) { return ref.orderByChild("Name"); })
            .snapshotChanges().subscribe(function (itemSnap) {
            _this.schools = [];
            itemSnap.forEach(function (item) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Schools/").child(item.key).orderByChild("Name").once("value", function (iSnap) {
                    var temp = iSnap.val();
                    temp.key = iSnap.val();
                    _this.schools.push(temp);
                }).then(function () {
                    loading.dismiss();
                });
            });
        });
    };
    StudentsPage.prototype.gtAnms = function () {
        var _this = this;
        this.db.list("Organisms/Anms").snapshotChanges().subscribe(function (snap) {
            _this.totAnms = snap.length;
        });
    };
    StudentsPage.prototype.exporti = function () {
        var newArea = this.students;
        newArea.forEach(function (snip) {
            delete snip.key;
            delete snip.ANM;
            delete snip.Mandal;
            delete snip.Village;
            delete snip.Schools;
        });
        var sheet = __WEBPACK_IMPORTED_MODULE_5_xlsx__["utils"].json_to_sheet(newArea);
        var wb = {
            SheetNames: ["export"],
            Sheets: {
                "export": sheet
            }
        };
        var wbout = __WEBPACK_IMPORTED_MODULE_5_xlsx__["write"](wb, {
            bookType: 'xlsx',
            bookSST: false,
            type: 'binary'
        });
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i)
                view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
        var self = this;
        __WEBPACK_IMPORTED_MODULE_6_file_saver__(blob, this.pageName + '.xlsx');
    };
    StudentsPage.prototype.gtStudentDetails = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__Students_student_details_student_details__["a" /* StudentDetailsPage */], { student: a });
    };
    StudentsPage.prototype.getMandalwiseStudents = function (mand) {
        var _this = this;
        var severeRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Counters/Mandals").child(mand).child("Severity");
        this.students = [];
        severeRef.child("Severely Anaemic").once("value", function (svereSnap) {
            svereSnap.forEach(function (ssp) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
            });
        }).then(function () {
            severeRef.child("Moderately Anaemic").once("value", function (svereSnap) {
                svereSnap.forEach(function (ssp) {
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
                });
            }).then(function () {
                severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) {
                    svereSnap.forEach(function (ssp) {
                        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
                    });
                }).then(function () {
                    severeRef.child("Healthy").once("value", function (svereSnap) {
                        svereSnap.forEach(function (ssp) {
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
                        });
                    }).then(function () {
                        _this.applyFilters();
                    });
                });
            });
        });
    };
    StudentsPage.prototype.getVillagewiseStudents = function (mand) {
        var _this = this;
        var severeRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Counters/Villages").child(mand).child("Severity");
        this.students = [];
        severeRef.child("Severely Anaemic").once("value", function (svereSnap) {
            svereSnap.forEach(function (ssp) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
            });
        }).then(function () {
            severeRef.child("Moderately Anaemic").once("value", function (svereSnap) {
                svereSnap.forEach(function (ssp) {
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
                });
            }).then(function () {
                severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) {
                    svereSnap.forEach(function (ssp) {
                        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
                    });
                }).then(function () {
                    severeRef.child("Healthy").once("value", function (svereSnap) {
                        svereSnap.forEach(function (ssp) {
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
                        });
                    }).then(function () {
                        _this.applyFilters();
                    });
                });
            });
        });
    };
    StudentsPage.prototype.checkSchool = function () {
        if (this.schoolSel == "all") {
            this.getSchools();
            this.getStudents();
        }
        else {
            this.getVillagewiseStudents(this.schoolSel);
        }
    };
    StudentsPage.prototype.getSchoolwiseStudents = function (mand) {
        var _this = this;
        var severeRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("SubsIndex/Schools").child(mand).child("Students");
        this.students = [];
        severeRef.once("value", function (svereSnap) {
            svereSnap.forEach(function (ssp) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Students").child(ssp.key).once("value", function (itemSnap) { var temp = itemSnap.val(); temp.key = itemSnap.key; _this.students.push(temp); });
            });
        }).then(function () {
            _this.applyFilters();
        });
    };
    StudentsPage.prototype.gtSchoolDetails = function (a) {
        var schho;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Schools").child(a.Schools).once("value", function (itemSnap) {
            schho = itemSnap.val();
            schho.key = itemSnap.key;
            var severeRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Counters/Schools").child(schho.key).child("Severity");
            severeRef.child("Severely Anaemic").once("value", function (svereSnap) { schho.Severe = svereSnap.numChildren(); });
            severeRef.child("Moderately Anaemic").once("value", function (svereSnap) { schho.Moderate = svereSnap.numChildren(); });
            severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) { schho.Mildly = svereSnap.numChildren(); });
            severeRef.child("Healthy").once("value", function (svereSnap) { schho.Healthy = svereSnap.numChildren(); });
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__Subs_Schools_school_details_school_details__["a" /* SchoolDetailsPage */], { school: schho });
    };
    StudentsPage.prototype.gtMandalDetails = function (a) {
        var schho;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Mandals").child(a.Mandal).once("value", function (itemSnap) {
            schho = itemSnap.val();
            schho.key = itemSnap.key;
            var severeRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Counters/Mandals").child(schho.key).child("Severity");
            severeRef.child("Severely Anaemic").once("value", function (svereSnap) { schho.Severe = svereSnap.numChildren(); });
            severeRef.child("Moderately Anaemic").once("value", function (svereSnap) { schho.Moderate = svereSnap.numChildren(); });
            severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) { schho.Mildly = svereSnap.numChildren(); });
            severeRef.child("Healthy").once("value", function (svereSnap) { schho.Healthy = svereSnap.numChildren(); });
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__Subs_Mandals_mandal_details_mandal_details__["a" /* MandalDetailsPage */], { mandal: schho });
    };
    StudentsPage.prototype.gtVillageDetails = function (a) {
        var schho;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Subs/Villages").child(a.Village).once("value", function (itemSnap) {
            schho = itemSnap.val();
            var severeRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Counters/Villages").child(a.Village).child("Severity");
            severeRef.child("Severely Anaemic").once("value", function (svereSnap) { schho.Severe = svereSnap.numChildren(); });
            severeRef.child("Moderately Anaemic").once("value", function (svereSnap) { schho.Moderate = svereSnap.numChildren(); });
            severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) { schho.Mildly = svereSnap.numChildren(); });
            severeRef.child("Healthy").once("value", function (svereSnap) { schho.Healthy = svereSnap.numChildren(); });
            schho.key = itemSnap.key;
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__Subs_Villages_village_details_village_details__["a" /* VillageDetailsPage */], { village: schho });
    };
    StudentsPage.prototype.gtANMDetails = function (a) {
        var schho;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("Organisms/Anms").child(a.ANM).once("value", function (itemSnap) {
            schho = itemSnap.val();
            schho.key = itemSnap.key;
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__Subs_Anms_anm_details_anm_details__["a" /* AnmDetailsPage */], { anm: schho });
    };
    StudentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-students',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Students\students\students.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-buttons end>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <p ion-text color="whiter">{{adminName}} </p>\n\n      </ion-buttons>\n\n      <ion-title>{{pageName}} </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content class="darkBg">\n\n  \n\n    <ion-grid class="whiteBg">\n\n      <ion-row>\n\n  \n\n        <ion-col col-2>\n\n          <ion-item no-lines >\n\n            <ion-label stacked>Mandals</ion-label>\n\n            <ion-select class="darkBg" [(ngModel)]="mandalSel" (ionChange)="checkMandal()">\n\n              <ion-option value="all">All</ion-option>\n\n              <ion-option *ngFor="let m of mandals" [value]="m.key">{{m.Name}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n  \n\n        <ion-col col-2>\n\n          <ion-item no-lines>\n\n            <ion-label stacked>Villages</ion-label>\n\n            <ion-select class="darkBg" [(ngModel)]="villageSel" (ionChange)="checkVillage()" >\n\n              <ion-option value="all">All</ion-option>\n\n              <ion-option *ngFor="let v of villages" [value]="v.key">{{v.Name}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <ion-item no-lines>\n\n            <ion-label stacked>Schools</ion-label>\n\n            <ion-select class="darkBg" [(ngModel)]="schoolSel" (ionChange)="checkSchool()" >\n\n              <ion-option value="all">All</ion-option>\n\n              <ion-option *ngFor="let s of schools" [value]="s.key">{{s.Name}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n  \n\n  \n\n  \n\n  \n\n        <ion-col col-2>\n\n          <ion-item no-lines>\n\n            <ion-label stacked>Community</ion-label>\n\n            <ion-select [(ngModel)]="casteSel" class="darkBg" (ionChange)="filterExact(\'Community\',casteSel)">\n\n              <ion-option value="all">All</ion-option>\n\n              <ion-option value="SC">SC</ion-option>\n\n              <ion-option value="ST">ST</ion-option>\n\n              <ion-option value="BC">BC</ion-option>\n\n              <ion-option value="OC">OC</ion-option>\n\n              <ion-option value="Minority">Minority</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          <ion-item no-lines>\n\n            <ion-label stacked>Age</ion-label>\n\n            <ion-select class="darkBg" [(ngModel)]="age" (ionChange)="filterExact(\'Age\',age)">\n\n              <ion-option value="all">All</ion-option>\n\n              <ion-option value="10">10</ion-option>\n\n              <ion-option value="11">11</ion-option>\n\n              <ion-option value="12">12</ion-option>\n\n              <ion-option value="13">13</ion-option>\n\n              <ion-option value="14">14</ion-option>\n\n              <ion-option value="15">15</ion-option>\n\n              <ion-option value="16">16</ion-option>\n\n              <ion-option value="17">17</ion-option>\n\n              <ion-option value="18">18</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <ion-item no-lines>\n\n            <ion-label stacked>Severity</ion-label>\n\n            <ion-select [(ngModel)]="anL" class="darkBg" (ionChange)="filterExact(\'Severity\', this.anL)">\n\n              <ion-option value="all">All</ion-option>\n\n              <ion-option value="Severely Anaemic">Severely Anaemic</ion-option>\n\n              <ion-option value="Moderately Anaemic">Moderately Anaemic</ion-option>\n\n              <ion-option value="Mildly  Anaemic">Mildly Anaemic</ion-option>\n\n              <ion-option value="Healthy">Healthy</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          <ion-item no-lines>\n\n            <ion-label stacked>Class</ion-label>\n\n            <ion-select class="darkBg" (ionChange)="filterExact(\'Class\',clSel)" [(ngModel)]="clSel">\n\n              <ion-option value="all">All</ion-option>\n\n              <ion-option value="6">6th</ion-option>\n\n              <ion-option value="7">7th</ion-option>\n\n              <ion-option value="8">8th</ion-option>\n\n              <ion-option value="9">9th</ion-option>\n\n              <ion-option value="10">10th</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n  \n\n      </ion-row>\n\n  \n\n  \n\n    </ion-grid>\n\n  \n\n  \n\n  \n\n    <ion-grid>\n\n      <ion-navbar color="primary">\n\n        <ion-row>\n\n          <ion-col col-1></ion-col>\n\n          <ion-col col-1 no-padding >\n\n            <p class="headBar">Name</p>\n\n          </ion-col>\n\n          <ion-col col-1 no-padding >\n\n            <p class="headBar">Age</p>\n\n          </ion-col>\n\n          <ion-col col-1 no-padding >\n\n            <p class="headBar">Community</p>\n\n          </ion-col>\n\n          <ion-col col-1 no-padding >\n\n            <p class="headBar">Class</p>\n\n          </ion-col>\n\n          <ion-col col-1 no-padding >\n\n            <p class="headBar">School</p>\n\n          </ion-col>\n\n          <ion-col col-1 no-padding >\n\n            <p class="headBar">Village</p>\n\n          </ion-col>\n\n          <ion-col col-1 no-padding >\n\n            <p class="headBar">Mandal</p>\n\n          </ion-col>\n\n          <ion-col col-1 no-padding >\n\n            <p class="headBar">Severity</p>\n\n          </ion-col>\n\n                  <ion-col col-1 no-padding >\n\n            <p class="headBar">Phone</p>\n\n          </ion-col>\n\n  \n\n          <ion-col col-1 no-padding>\n\n            <p class="headBar">ANM</p>\n\n          </ion-col>\n\n          <ion-col col-1 no-padding>\n\n            <p class="headBar">Actions</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-navbar>\n\n    </ion-grid>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <ion-searchbar item-end animated="true" placeholder="Search a Student .." [(ngModel)]="searchbar" ></ion-searchbar>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button float-right (click)="exporti()">\n\n            Export\n\n            <ion-icon padding-left name="share-alt"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n  \n\n    </ion-grid>\n\n  \n\n    <ion-grid>\n\n      <ion-card *ngFor="let a of filteredStudents;let i = index" [color]="a.colori" >\n\n        <ion-card-content>\n\n          <ion-row>\n\n            <ion-col col-1>\n\n              <ion-checkbox [(ngModel)]="a.Checked" (ionChange)="addToArr(a)"></ion-checkbox>\n\n              <p ion-text><strong>{{i+1}}</strong></p>\n\n            </ion-col>\n\n            <ion-col col-1  (click)="gtStudentDetails(a)" class="curs">\n\n              {{a.StudentName}}\n\n            </ion-col>\n\n            <ion-col col-1 >\n\n              <h2  >{{a.Age }}</h2><br />\n\n            </ion-col>\n\n            <ion-col col-1 >\n\n              <h2  >{{a.Community }}</h2><br />\n\n            </ion-col>\n\n            <ion-col col-1 >\n\n              <h2  >{{a.Class}} </h2><br />\n\n            </ion-col>\n\n            <ion-col col-1 (click)="gtSchoolDetails(a)" class="curs" >\n\n              <h2  >{{a.SchoolName}} </h2><br />\n\n            </ion-col>\n\n            <ion-col col-1 (click)="gtVillageDetails(a)" class="curs" >\n\n              <h2  >{{a.VillageName}} </h2><br />\n\n            </ion-col>\n\n            <ion-col col-1 (click)="gtMandalDetails(a)" class="curs" >\n\n              <h2  >{{a.MandalName}} </h2><br />\n\n            </ion-col>\n\n            <ion-col col-1 >\n\n              <h2  >{{a.Severity}} </h2><br />\n\n            </ion-col>\n\n            <ion-col col-1 >\n\n              <h2  >{{a.Mobile}} </h2><br />\n\n            </ion-col>\n\n            <ion-col col-1 (click)="gtANMDetails(a)" class="curs" >\n\n              <h2  >{{a.ANMName}} </h2><br />\n\n            </ion-col>\n\n            <ion-col col-1 >\n\n              <button ion-button (click)="editStudent(a)" text-center>\n\n                <ion-icon name="md-create"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n  \n\n  \n\n          </ion-row>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-grid>\n\n    <ion-fab right bottom *ngIf="selArray.length">\n\n      <button ion-fab color="danger" (click)="delMulC()">\n\n        <ion-icon name="md-trash"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n  \n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Students\students\students.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], StudentsPage);
    return StudentsPage;
}());

//# sourceMappingURL=students.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAmnsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_amns_view_amns__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddAmnsPage = /** @class */ (function () {
    function AddAmnsPage(navCtrl, loadingCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.email = '';
        this.samePasses = false;
        this.getAdmin();
    }
    AddAmnsPage.prototype.getAdmin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var adminId = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Admin Data/Admins").child(adminId).once("value", function (snap) {
            _this.adminEmail = snap.val().Email;
            _this.adminPass = snap.val().Password;
        }).catch(function (err) {
            var e = err;
            _this.presentToast(e);
            loading.dismiss();
        }).then(function () {
            loading.dismiss();
        });
    };
    AddAmnsPage.prototype.checkData = function () {
    };
    AddAmnsPage.prototype.checkPasses = function () {
        if (this.pass.length) {
            if (this.cPass) {
                if (this.pass === this.cPass) {
                    this.samePasses = true;
                }
                else {
                    this.samePasses = false;
                }
            }
            else {
                this.samePasses = false;
            }
        }
        else {
            this.samePasses = false;
        }
    };
    AddAmnsPage.prototype.addAnm = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var genEmail = this.phone + "@samatha.anm";
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(genEmail, this.pass).then(function () {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Organisms").child("Anms").child(__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid).set({
                Name: _this.name,
                Gender: _this.gender,
                Email: _this.email,
                Phone: _this.phone,
                Password: _this.pass,
            }).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(_this.adminEmail, _this.adminPass).then(function () {
                    _this.presentToast("ANM Added Successfully !");
                }).then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__view_amns_view_amns__["a" /* ViewAmnsPage */]);
                    loading.dismiss();
                });
            });
        });
    };
    AddAmnsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
    };
    AddAmnsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-amns',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\add-amns\add-amns.html"*/'<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>Add ANMs</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card class="mainCard" >\n\n  <ion-card-content>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Full Name</ion-label>\n\n    <ion-input type="text" autofocus [(ngModel)]="name" ></ion-input>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n  <ion-label stacked>Gender</ion-label>\n\n  <ion-select [(ngModel)]="gender">\n\n    <ion-option value="Male">Male</ion-option>\n\n    <ion-option value="Female">Female</ion-option>\n\n    <ion-option value="Other">Other</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Email</ion-label>\n\n    <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Phone Number</ion-label>\n\n    <ion-input type="number" [(ngModel)]="phone"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Password</ion-label>\n\n    <ion-input type="text" (ionChange)="checkPasses()" [(ngModel)]="pass"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Confirm Password</ion-label>\n\n    <ion-input type="text" (ionChange)="checkPasses()" [(ngModel)]="cPass"></ion-input>\n\n  </ion-item>\n\n\n\n\n\n  <button ion-button round (click)="addAnm()">Add Anm</button>\n\n\n\n  \n\n  </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\add-amns\add-amns.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AddAmnsPage);
    return AddAmnsPage;
}());

//# sourceMappingURL=add-amns.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelAnmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DelAnmPage = /** @class */ (function () {
    function DelAnmPage(navCtrl, viewCtrl, loadingCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.anmKeys = this.navParams.get("delAnms");
        this.anms = [];
        this.getSchools();
    }
    DelAnmPage.prototype.getSchools = function () {
        var _this = this;
        this.anmKeys.forEach(function (snp) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Organisms/Anms").child(snp).once("value", function (itemSnap) {
                var temp = itemSnap.val();
                temp.key = itemSnap.key;
                _this.anms.push(temp);
            });
            console.log(_this.anms);
        });
    };
    DelAnmPage.prototype.deleteAnms = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.anmKeys.forEach(function (snip) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Anms").child(snip).remove();
        });
        this.close();
        loading.dismiss();
        this.presentToast("ANMs Deleted");
    };
    DelAnmPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    DelAnmPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
    };
    DelAnmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-del-anm',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\del-anm\del-anm.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Delete ANMs</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear (click)="close()">Cancel</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-card >\n\n    <ion-card-content>\n\n      <h2>Are you sure you want to delete these ANMs ?</h2>\n\n      <ion-item *ngFor="let a of anms">\n\n          {{a.Name}}\n\n      </ion-item>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <button ion-button color="danger"  (click)="deleteAnms()">Delete</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\del-anm\del-anm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DelAnmPage);
    return DelAnmPage;
}());

//# sourceMappingURL=del-anm.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSchoolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddSchoolsPage = /** @class */ (function () {
    function AddSchoolsPage(navCtrl, viewCtrl, toastCtrl, db, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.name = "";
        this.areaRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Schools");
        this.mandals = [];
        this.mandalRef = this.db.list('Subs/Mandals');
        this.villages = [];
        this.schoolRef = this.db.list('Subs/Schools');
        this.schools = [];
        this.getMandals();
        this.getSchools();
    }
    AddSchoolsPage.prototype.getMandals = function () {
        var _this = this;
        this.mandalRef.snapshotChanges().subscribe(function (snap) {
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                _this.mandals.push(temp);
            });
        });
    };
    AddSchoolsPage.prototype.getVillages = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Villages ...'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(this.mandalSel).child("Villages").orderByChild("Name").once("value", function (snap) {
            _this.villages = [];
            if (snap.exists()) {
                snap.forEach(function (snp) {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Villages").child(snp.key).once("value", function (vil) {
                        var temp = vil.val();
                        temp.key = vil.key;
                        _this.villages.push(temp);
                        _this.villages.reverse();
                    }).catch(function (er) {
                        console.log(er);
                    }).then(function () {
                        loading.dismiss();
                    });
                });
            }
            else {
                loading.dismiss();
                _this.presentToast("No Villages Found");
            }
        });
    };
    AddSchoolsPage.prototype.getSchools = function () {
        var _this = this;
        this.schoolRef.snapshotChanges().subscribe(function (snap) {
            _this.schools = [];
            snap.forEach(function (snip) {
                var temp = snip.payload.val();
                temp.key = snip.key;
                _this.schools.push(temp.Name);
            });
        });
    };
    AddSchoolsPage.prototype.checkData = function () {
        if (this.name) {
            this.checkDataInDb();
        }
        else {
            this.presentToast("School Name Empty");
        }
    };
    AddSchoolsPage.prototype.checkDataInDb = function () {
        if (this.schools.indexOf(this.name) > -1) {
            this.presentToast("School Already Exists");
        }
        else {
            this.addCat();
        }
    };
    AddSchoolsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AddSchoolsPage.prototype.addCat = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Adding School ...'
        });
        loading.present();
        this.areaRef.push({
            Name: this.name,
            Mandal: this.mandalSel,
            Village: this.villageSel,
            TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format()
        }).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.mandalSel).child("Schools").child(res.key).set(true).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Villages").child(_this.villageSel).child("Schools").child(res.key).set(true).then(function () {
                    _this.close();
                    loading.dismiss();
                });
            });
        });
    };
    AddSchoolsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: "middle"
        });
        toast.present();
    };
    AddSchoolsPage.prototype.capsName = function (name) {
        this.name = name.toUpperCase();
    };
    AddSchoolsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-schools',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Schools\add-schools\add-schools.html"*/'<ion-header>\n\n    <ion-navbar color="primary" >\n\n      <ion-title>Add School</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button clear icon-only (click)="close()">\n\n          <ion-icon name="md-close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  \n\n    <ion-card>\n\n      <ion-card-content>\n\n\n\n\n\n\n\n        <ion-item>\n\n          <ion-label floating>Select Mandal</ion-label>\n\n          <ion-select [(ngModel)]="mandalSel" (ionChange)="getVillages()" >\n\n            <ion-option *ngFor="let m of mandals" [value]="m.key">{{m.Name}} </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="villages.length" >\n\n          <ion-label floating>Select Village</ion-label>\n\n          <ion-select [(ngModel)]="villageSel">\n\n            <ion-option *ngFor="let v of villages" [value]="v.key">{{v.Name}} </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item *ngIf="villageSel" >\n\n          <ion-label  floating>School Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="name"  (ionChange)="capsName(name)" autofocus ></ion-input>\n\n        </ion-item>\n\n        \n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n  \n\n    <button ion-button *ngIf="name" block (click)="checkData()">Add</button>\n\n  \n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Schools\add-schools\add-schools.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AddSchoolsPage);
    return AddSchoolsPage;
}());

//# sourceMappingURL=add-schools.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSchoolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_schools_add_schools__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__school_details_school_details__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_xlsx__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewSchoolsPage = /** @class */ (function () {
    function ViewSchoolsPage(navCtrl, db, toastCtrl, alertCtrl, modalCtrl, menuCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.pgName = "Schools";
        this.areaRef = this.db.list('Subs/Schools', function (ref) { return ref.orderByChild("Name"); });
        this.area = [];
        this.areasLoaded = [];
        this.menuCtrl.enable(true);
        this.getAreas();
    }
    ViewSchoolsPage.prototype.getAreas = function () {
        var _this = this;
        this.areaRef.snapshotChanges().subscribe(function (snap) {
            var tempArray = [];
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                var severeRef = __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref("Counters/Schools").child(snp.key).child("Severity");
                severeRef.child("Severely Anaemic").once("value", function (svereSnap) { temp.Severe = svereSnap.numChildren(); });
                severeRef.child("Moderately Anaemic").once("value", function (svereSnap) { temp.Moderate = svereSnap.numChildren(); });
                severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) { temp.Mildly = svereSnap.numChildren(); });
                severeRef.child("Healthy").once("value", function (svereSnap) { temp.Healthy = svereSnap.numChildren(); });
                tempArray.push(temp);
            });
            _this.area = tempArray;
            _this.areasLoaded = tempArray;
        });
    };
    ViewSchoolsPage.prototype.initializeItems = function () {
        this.area = this.areasLoaded;
    };
    ViewSchoolsPage.prototype.getItems = function (searchbar) {
        this.initializeItems();
        var q = searchbar;
        if (!q) {
            return;
        }
        this.area = this.area.filter(function (v) {
            if (v.Name && q) {
                if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    ViewSchoolsPage.prototype.gtAddArea = function () {
        var areaAdd = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_schools_add_schools__["a" /* AddSchoolsPage */], null, { enableBackdropDismiss: false });
        areaAdd.present();
    };
    ViewSchoolsPage.prototype.gtSchoolDetails = function (s) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__school_details_school_details__["a" /* SchoolDetailsPage */], { school: s });
    };
    ViewSchoolsPage.prototype.exporti = function () {
        var newArea = this.area;
        newArea.forEach(function (snip) {
            delete snip.TimeStamp;
            delete snip.key;
            delete snip.Mandal;
            delete snip.Village;
        });
        var sheet = __WEBPACK_IMPORTED_MODULE_5_xlsx__["utils"].json_to_sheet(newArea);
        var wb = {
            SheetNames: ["export"],
            Sheets: {
                "export": sheet
            }
        };
        var wbout = __WEBPACK_IMPORTED_MODULE_5_xlsx__["write"](wb, {
            bookType: 'xlsx',
            bookSST: false,
            type: 'binary'
        });
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i)
                view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
        var self = this;
        __WEBPACK_IMPORTED_MODULE_6_file_saver__(blob, this.pgName + '.xlsx');
    };
    ViewSchoolsPage.prototype.prnt = function () {
        window.print();
        return false;
    };
    ViewSchoolsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-schools',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Schools\view-schools\view-schools.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{pgName}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-searchbar item-end animated="true" placeholder="Search a School ..." [(ngModel)]="searchbar" (ionInput)="getItems(searchbar)"></ion-searchbar>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n          <button ion-button float-right (click)="prnt()">\n\n              Print\n\n              <ion-icon padding-left name="md-print"></ion-icon>\n\n            </button>\n\n    \n\n        <button ion-button float-right (click)="exporti()">\n\n          Export\n\n          <ion-icon padding-left name="share-alt"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <ion-grid>\n\n    <ion-list-header color="primary">\n\n      <ion-row>\n\n        <ion-col col-1>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Name</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Severely Anaemic</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Moderately Anaemic</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Mildly Anaemic</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Healthy</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list-header>\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <ion-item *ngFor="let a of area;let i = index">\n\n      <ion-row>\n\n        <ion-col col-1>\n\n          <p ion-text text-center><strong>{{i+1}}</strong></p>\n\n        </ion-col>\n\n        <ion-col col-2 (click)="gtSchoolDetails(a)" class="curs">\n\n          <h2 ion-text text-center color="primary">{{a.Name}}</h2>\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n          <h2>{{a.Severe}}</h2><br />\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n          <h2>{{a.Moderate}}</h2><br />\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n          <h2>{{a.Mildly}}</h2><br />\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n          <h2>{{a.Healthy}}</h2><br />\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="danger" (click)="gtAddArea()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Schools\view-schools\view-schools.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ViewSchoolsPage);
    return ViewSchoolsPage;
}());

//# sourceMappingURL=view-schools.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVillagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddVillagesPage = /** @class */ (function () {
    function AddVillagesPage(navCtrl, viewCtrl, loadingCtrl, toastCtrl, db, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.navParams = navParams;
        this.areaRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Villages");
        this.mandals = [];
        this.mandalRef = this.db.list('Subs/Mandals');
        this.villRef = this.db.list('Subs/Villages');
        this.villages = [];
        this.getMandals();
        this.getVillages();
    }
    AddVillagesPage.prototype.getMandals = function () {
        var _this = this;
        this.mandalRef.snapshotChanges().subscribe(function (snap) {
            _this.mandals = [];
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                _this.mandals.push(temp);
            });
        });
    };
    AddVillagesPage.prototype.getVillages = function () {
        var _this = this;
        this.villRef.snapshotChanges().subscribe(function (snap) {
            _this.villages = [];
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                _this.villages.push(temp.Name);
            });
        });
    };
    AddVillagesPage.prototype.checkData = function () {
        if (this.name) {
            if (this.mandalSel) {
                this.checkDataInDb();
            }
            else {
                this.presentToast("Mandal not Selected");
            }
        }
        else {
            this.presentToast("Mandal Name Empty");
        }
    };
    AddVillagesPage.prototype.checkDataInDb = function () {
        if (this.villages.indexOf(this.name) > -1) {
            this.presentToast("Village Already Exists");
        }
        else {
            this.addCat();
        }
    };
    AddVillagesPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AddVillagesPage.prototype.addCat = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Adding Village ...'
        });
        this.areaRef.push({
            Name: this.name,
            Mandal: this.mandalSel,
            TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format()
        }).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.mandalSel).child("Villages").child(res.key).set(true).then(function () {
                _this.close();
                loading.dismiss();
            });
        });
    };
    AddVillagesPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: "middle"
        });
        toast.present();
    };
    AddVillagesPage.prototype.capsName = function (name) {
        this.name = name.toUpperCase();
    };
    AddVillagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-villages',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Villages\add-villages\add-villages.html"*/'<ion-header>\n\n    <ion-navbar color="primary" >\n\n      <ion-title>Add Village</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button clear icon-only (click)="close()">\n\n          <ion-icon name="md-close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  \n\n    <ion-card>\n\n      <ion-card-content>\n\n\n\n\n\n\n\n        <ion-item>\n\n          <ion-label floating>Select Mandal</ion-label>\n\n          <ion-select [(ngModel)]="mandalSel">\n\n            <ion-option *ngFor="let m of mandals" [value]="m.key">{{m.Name}} </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item *ngIf="mandalSel">\n\n          <ion-label  floating>Village Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="name" (keyup.enter)="checkData()" (ionChange)="capsName(name)" autofocus ></ion-input>\n\n        </ion-item>\n\n        \n\n  \n\n      </ion-card-content>\n\n    </ion-card>\n\n  \n\n    <button ion-button *ngIf="name" block (click)="checkData()">Add</button>\n\n  \n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Villages\add-villages\add-villages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AddVillagesPage);
    return AddVillagesPage;
}());

//# sourceMappingURL=add-villages.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewVillagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_villages_add_villages__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__village_details_village_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_xlsx__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewVillagesPage = /** @class */ (function () {
    function ViewVillagesPage(navCtrl, db, toastCtrl, alertCtrl, modalCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.pgName = "Villages";
        this.areaRef = this.db.list('Subs/Villages', function (ref) { return ref.orderByChild("Name"); });
        this.area = [];
        this.areasLoaded = [];
        this.getAreas();
    }
    ViewVillagesPage.prototype.getAreas = function () {
        var _this = this;
        this.areaRef.snapshotChanges().subscribe(function (snap) {
            var tempArray = [];
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                var severeRef = __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref("Counters/Villages").child(snp.key).child("Severity");
                severeRef.child("Severely Anaemic").once("value", function (svereSnap) { temp.Severe = svereSnap.numChildren(); });
                severeRef.child("Moderately Anaemic").once("value", function (svereSnap) { temp.Moderate = svereSnap.numChildren(); });
                severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) { temp.Mildly = svereSnap.numChildren(); });
                severeRef.child("Healthy").once("value", function (svereSnap) { temp.Healthy = svereSnap.numChildren(); });
                tempArray.push(temp);
            });
            tempArray.sort(function (sn) { return sn.Schools; });
            _this.area = tempArray;
            _this.areasLoaded = tempArray;
        });
    };
    ViewVillagesPage.prototype.initializeItems = function () {
        this.area = this.areasLoaded;
    };
    ViewVillagesPage.prototype.getItems = function (searchbar) {
        this.initializeItems();
        var q = searchbar;
        if (!q) {
            return;
        }
        this.area = this.area.filter(function (v) {
            if (v.Name && q) {
                if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    ViewVillagesPage.prototype.gtAddArea = function () {
        var areaAdd = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_villages_add_villages__["a" /* AddVillagesPage */], null, { enableBackdropDismiss: false });
        areaAdd.present();
    };
    ViewVillagesPage.prototype.gtVillageDetails = function (v) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__village_details_village_details__["a" /* VillageDetailsPage */], { village: v });
    };
    ViewVillagesPage.prototype.exporti = function () {
        var newArea = this.area;
        newArea.forEach(function (snip) {
            delete snip.TimeStamp;
            delete snip.key;
            delete snip.Mandal;
            delete snip.Village;
        });
        var sheet = __WEBPACK_IMPORTED_MODULE_5_xlsx__["utils"].json_to_sheet(newArea);
        var wb = {
            SheetNames: ["export"],
            Sheets: {
                "export": sheet
            }
        };
        var wbout = __WEBPACK_IMPORTED_MODULE_5_xlsx__["write"](wb, {
            bookType: 'xlsx',
            bookSST: false,
            type: 'binary'
        });
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i)
                view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
        var self = this;
        __WEBPACK_IMPORTED_MODULE_6_file_saver__(blob, this.pgName + '.xlsx');
    };
    ViewVillagesPage.prototype.prnt = function () {
        window.print();
        return false;
    };
    ViewVillagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-villages',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Villages\view-villages\view-villages.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{pgName}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-searchbar item-end animated="true" placeholder="Search a Village" [(ngModel)]="searchbar" (ionInput)="getItems(searchbar)"></ion-searchbar>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n                <button ion-button float-right (click)="prnt()">\n\n          Print\n\n          <ion-icon padding-left name="md-print"></ion-icon>\n\n        </button>\n\n\n\n        <button ion-button float-right (click)="exporti()">\n\n          Export\n\n          <ion-icon padding-left name="share-alt"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n  <ion-grid>\n\n    <ion-list-header color="primary">\n\n      <ion-row>\n\n        <ion-col col-1>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Name</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Severely Anaemic</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Moderately Anaemic</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Mildly Anaemic</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p class="headBar">Healthy</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list-header>\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <ion-item *ngFor="let a of area;let i = index">\n\n      <ion-row>\n\n        <ion-col col-1>\n\n          <p ion-text text-center><strong>{{i+1}}</strong></p>\n\n        </ion-col>\n\n        <ion-col col-2 (click)="gtVillageDetails(a)" class="curs">\n\n          <h2 ion-text text-center color="primary">{{a.Name}}</h2>\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n          <h2>{{a.Severe}}</h2><br />\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n          <h2>{{a.Moderate}}</h2><br />\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n          <h2>{{a.Mildly}}</h2><br />\n\n        </ion-col>\n\n        <ion-col col-2 text-center>\n\n          <h2>{{a.Healthy}}</h2><br />\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="danger" (click)="gtAddArea()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Villages\view-villages\view-villages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], ViewVillagesPage);
    return ViewVillagesPage;
}());

//# sourceMappingURL=view-villages.js.map

/***/ }),

/***/ 229:
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
webpackEmptyAsyncContext.id = 229;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Extra/dashboard/dashboard.module": [
		722,
		21
	],
	"../pages/Extra/login/login.module": [
		723,
		20
	],
	"../pages/Students/delete-students/delete-students.module": [
		724,
		19
	],
	"../pages/Students/edit-student/edit-student.module": [
		725,
		18
	],
	"../pages/Students/student-details/student-details.module": [
		726,
		17
	],
	"../pages/Students/students/students.module": [
		727,
		16
	],
	"../pages/Subs/Anms/add-amns/add-amns.module": [
		728,
		15
	],
	"../pages/Subs/Anms/anm-details/anm-details.module": [
		729,
		14
	],
	"../pages/Subs/Anms/assign-school/assign-school.module": [
		730,
		13
	],
	"../pages/Subs/Anms/del-anm/del-anm.module": [
		731,
		12
	],
	"../pages/Subs/Anms/edit-anm/edit-anm.module": [
		732,
		11
	],
	"../pages/Subs/Anms/view-amns/view-amns.module": [
		733,
		10
	],
	"../pages/Subs/Mandals/add-mandals/add-mandals.module": [
		734,
		9
	],
	"../pages/Subs/Mandals/mandal-details/mandal-details.module": [
		735,
		8
	],
	"../pages/Subs/Mandals/view-mandals/view-mandals.module": [
		736,
		7
	],
	"../pages/Subs/Schools/add-schools/add-schools.module": [
		737,
		6
	],
	"../pages/Subs/Schools/school-details/school-details.module": [
		738,
		5
	],
	"../pages/Subs/Schools/view-schools/view-schools.module": [
		739,
		4
	],
	"../pages/Subs/Villages/add-villages/add-villages.module": [
		740,
		3
	],
	"../pages/Subs/Villages/view-villages/view-villages.module": [
		741,
		2
	],
	"../pages/Subs/Villages/village-details/village-details.module": [
		742,
		1
	],
	"../pages/data-upload/data-upload.module": [
		721,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 270;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Students_student_details_student_details__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SchoolDetailsPage = /** @class */ (function () {
    function SchoolDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.school = this.navParams.get("school");
        this.anms = [];
        this.students = [];
        console.log(this.school);
        this.getMandal();
        this.getVillage();
        this.getAnms();
        this.getStudents();
    }
    SchoolDetailsPage.prototype.getAnms = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Schools").child(this.school.key).child("ANM").once("value", function (itemSnap) {
            itemSnap.forEach(function (item) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Organisms/Anms").child(item.key).once("value", function (ssSnip) {
                    var temp = ssSnip.val();
                    temp.key = ssSnip.key;
                    _this.anms.push(temp);
                });
            });
        });
    };
    SchoolDetailsPage.prototype.getStudents = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Schools").child(this.school.key).child("Students").once("value", function (itemSnapshot) {
            itemSnapshot.forEach(function (itemSnap) {
                console.log(itemSnap.key);
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Organisms/Students").child(itemSnap.key).once("value", function (itemSna) {
                    var temp = itemSna.val();
                    temp.key = itemSna.key;
                    switch (temp.Severity) {
                        case 'Severely Anaemic':
                            temp.colori = "s";
                            break;
                        case 'Moderately Anaemic':
                            temp.colori = "mo";
                            break;
                        case 'Mildly  Anaemic':
                            temp.colori = "mi";
                            break;
                        case 'Healthy':
                            temp.colori = "h";
                            break;
                    }
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Schools").child(temp.Schools).once("value", function (s) {
                        temp.SchoolName = s.val().Name;
                    });
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Villages").child(temp.Village).once("value", function (s) {
                        temp.VillageName = s.val().Name;
                    });
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Mandals").child(temp.Mandal).once("value", function (s) {
                        temp.MandalName = s.val().Name;
                    });
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Organisms/Anms").child(temp.ANM).once("value", function (s) {
                        temp.ANMName = s.val().Name;
                    });
                    _this.students.push(temp);
                });
            });
        });
    };
    SchoolDetailsPage.prototype.gtStudentDetails = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Students_student_details_student_details__["a" /* StudentDetailsPage */], { student: a });
    };
    SchoolDetailsPage.prototype.getMandal = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Mandals").child(this.school.Mandal).once("value", function (itemSnap) {
            _this.mandalName = itemSnap.val().Name;
        });
    };
    SchoolDetailsPage.prototype.getVillage = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Villages").child(this.school.Village).once("value", function (itemSnap) {
            _this.vName = itemSnap.val().Name;
        });
    };
    SchoolDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-school-details',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Schools\school-details\school-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>{{school.Name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n\n\n    <ion-col col-6>\n\n      <ion-row>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-item>\n\n              <h2 ion-text color="primary" item-start>Mandal</h2>\n\n              <h2 item-end>{{mandalName}}</h2>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-item>\n\n              <h2 ion-text color="primary" item-start>Village</h2>\n\n              <h2 item-end>{{vName}}</h2>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n    \n\n      </ion-row>\n\n\n\n\n\n\n\n\n\n    </ion-col>\n\n      \n\n\n\n\n\n    <ion-col col-6>\n\n\n\n      <ion-row >\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-card-title>{{school.Name}}</ion-card-title>\n\n\n\n            <ion-item>\n\n              <p ion-text color="primary" item-start >ANMs</p>\n\n              <p item-end *ngIf="!school.ANM">Unassigned</p>\n\n              <div item-end *ngIf="school.ANM" >\n\n              <p  *ngFor="let ss of anms;let i = index" >{{i+1}}.{{ss.Name}}</p>\n\n              </div>\n\n            </ion-item>\n\n            <ion-item>\n\n                <p item-start color="primary" ion-text>Total Students</p>\n\n                <p item-end>{{students.length}}</p>\n\n              </ion-item>\n\n              <ion-item>\n\n                <p item-start color="primary" ion-text>Severely Anaemic</p>\n\n                <p item-end>{{school.Severe}}</p>\n\n              </ion-item>\n\n              <ion-item>\n\n                <p item-start color="primary" ion-text>Moderately Anaemic</p>\n\n                <p item-end>{{school.Moderate}}</p>\n\n              </ion-item>\n\n              <ion-item>\n\n                <p item-start color="primary" ion-text>Mildly Anaemic</p>\n\n                <p item-end>{{school.Mildly}}</p>\n\n              </ion-item>\n\n              <ion-item>\n\n                <p item-start color="primary" ion-text>Healthy</p>\n\n                <p item-end>{{school.Healthy}}</p>\n\n              </ion-item>\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-row>\n\n\n\n\n\n    </ion-col>\n\n\n\n\n\n    \n\n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <ion-grid>\n\n    <ion-navbar color="primary">\n\n      <ion-row>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-1>\n\n          <p class="headBar">Name</p>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          <p class="headBar">Age</p>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          <p class="headBar">Class</p>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          <p class="headBar">School</p>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          <p class="headBar">Village</p>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          <p class="headBar">Mandal</p>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          <p class="headBar">Severity</p>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n          <p class="headBar">HBl</p>\n\n        </ion-col>\n\n                <ion-col col-1>\n\n          <p class="headBar">Phone</p>\n\n        </ion-col>\n\n\n\n        <ion-col col-1>\n\n          <p class="headBar">ANM</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-navbar>\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <ion-card *ngFor="let a of students;let i = index" [color]="a.colori" >\n\n      <ion-card-content>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <p ion-text><strong>{{i+1}}</strong></p>\n\n          </ion-col>\n\n          <ion-col col-1 ion-text (click)="gtStudentDetails(a)" class="curs">\n\n            <h2>{{a.StudentName}}</h2>\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <h2  >{{a.Age }}</h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <h2  >{{a.Class}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <h2  >{{a.SchoolName}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <h2  >{{a.VillageName}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <h2  >{{a.MandalName}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <h2  >{{a.Severity}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <h2  >{{a.HBL}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <h2  >{{a.Mobile}} </h2><br />\n\n          </ion-col>\n\n          <ion-col col-1 >\n\n            <h2  >{{a.ANMName}} </h2><br />\n\n          </ion-col>\n\n\n\n\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Schools\school-details\school-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SchoolDetailsPage);
    return SchoolDetailsPage;
}());

//# sourceMappingURL=school-details.js.map

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataUploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataUploadPage = /** @class */ (function () {
    function DataUploadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mandalsArray = ["Amarachinta", "Atmakur", "Chinnamabavi", "Ghanpur", "Gopalpet", "Kothakota", "Madanapur", "Pangal", "Pebbair", "Peddamandadi", "Revally", "SriRangapur", "Veepanagandla", "Wanaparthy"];
        //Villages Array
        this.Amarachinta = ["Amarachintha", "Masthipur", "Mulamallu", "Nandimullu", "Nagal Kadmoor", "Erladinne"];
        this.Atmakur = ["Atmakur", "Balakistapur", "Thippadampally", "Motlampally", "Rechinthala",];
        this.Chinnamabavi = ["Koppunur", "Veltoor", "Ayyavaripally", "Bekkem", "Gudem", "Gaddabaswapuram", "Kalluru", "Chellapadu", "Velagonda", "Peddamaroor", "Peddadagada", "Chinnadagada",];
        this.Ghanpur = ["Ghanpur A", "Appireddypally", "Manajipet", "Malkapur", "Solipur", "Upparpally", "Kamuluddinpoor", "Agaram", "Almaipaipally", "Mamidimada",];
        this.Gopalpet = ["Thadiparthy", "Gopalpet", "Buddaram", "Yedutla", "Edulla", "Jayanna Thirmalapur", "Munnanur", "Chennur",];
        this.Kothakota = ["Kothakota", "Vaddevata", "Kanimetta", "Palem", "Amadabakula", "Sankireddypally", "Apparala", "Pamapuram", "Mirasipally", "Natavelly",];
        this.Madanapur = ["Madanapur", "Konnur", "Ajjakollu", "Duppally", "Gopanapet",];
        this.Pangal = ["Remaddula", "Shakapur", "Kadirepadu", "Kethepally", "Vengalaipally", "Jamapur", "Bandapally", "Mahammadapur", "Chinthakunta", "Busireddypally", "Rainpally", "Chikkapally", "Annaram Tanda", "Annaram", "Bhavaji", "Pangal", "Goplapur",];
        this.Pebbair = ["Pebbair", "Shagapur", "Kanchiraopally", "Rangapur", "Ayyavaripally", "Pathepally", "Gumadam", "Yaparla", "Chelimilla", "Sugoor",];
        this.Peddamandadi = ["Manigilla", "Jagathpally", "Pamireddypally", "Veeraipally", "Balijepally", "Dondaguntapally", "Gatlakhanapur", "Peddamandadi", "Mojarla", "Madigatla", "Veltoor",];
        this.Revally = ["Chennaram", "Chirkapally", "Bandaravipakula", "Revally", "Keshampeta", "Chakalapally", "Polikepadu", "Thalupunuru", "Nagapur",];
        this.SriRangapur = ["Srirangapur", "Venkatapur", "Narsingaipally", "Venkatapur (S)", "Thatipamula", "Kambalapur",];
        this.Veepanagandla = ["Veepanagandla", "Govardanagiri", "Sanginenipally", "Thoomukunta", "Pulgarcherla", "Gopaldinne", "Kalvarala", "Bollaram",];
        this.Wanaparthy = ["Wanaparthy", "Rajanagaram", "Chandapur", "Savaigudem", "Nagavaram", "Marrikunta", "Rajapeta", "Peddagudem", "Kadukunta", "Kistagiri", "Chimanguntally", "Chityala", "Appaipally", "Khashimnagar",];
        this.areaRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Villages");
        this.Amarachintakey = "-LQruugyyNOpTn5WunYM";
        this.AtmakurKey = "-LQruuh8MWUNs4IUUTEh";
        this.ChinnamabaviKey = "-LQruuhAikqfU1K1wh0T";
        this.GhanpurKey = "-LQruuhBtxfvbQEdwG4n";
        this.GopalpetKey = "-LQruuhD3aC_qpEtIs6N";
        this.KothakotaKey = "-LQruuhEljPcYszSXeHl";
        this.MadanapurKey = "-LQruuhFnFh7BG0oOXWj";
        this.PangalKey = "-LQruuhGdcBhYTVLyBnV";
        this.PebbairKey = "-LQruuhHLnLMHCxw0h8v";
        this.PeddamandadiKey = "-LQruuhHLnLMHCxw0h8w";
        this.RevallyKey = "-LQruuhIYoGREgjZWbBb";
        this.SriRangapurKey = "-LQruuhIYoGREgjZWbBc";
        this.VeepanagandlaKey = "-LQruuhJZQvV1iXFSPLK";
        this.WanaparthyKey = "-LQruuhKjEYRqgn75PZn";
        this.geMandals();
    }
    DataUploadPage.prototype.geMandals = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Mandals").once("value", function (itemSnap) {
            itemSnap.forEach(function (snip) {
                var temp = snip.val();
                temp.key = snip.key;
                console.log(temp);
            });
        });
    };
    DataUploadPage.prototype.UploadMandals = function () {
        this.mandalsArray.forEach(function (manSnip) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Mandals").push({
                Name: manSnip,
                TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format()
            }).then(function () {
                console.log("Mandals Uploaded");
            });
        });
    };
    DataUploadPage.prototype.uploadVills = function () {
        this.UploadAmarachinta();
        this.UploadAtmakur();
        this.UploadChinnamabavi();
        this.UploadGhanpur();
        this.UploadGopalpet();
        this.UploadKothakota();
        this.UploadMadanapur();
        this.UploadPangal();
        this.UploadPebbair();
        this.UploadPeddamandadi();
        this.UploadRevally();
        this.UploadSriRangapur();
        this.UploadVeepanagandla();
        this.UploadWanaparthy();
    };
    DataUploadPage.prototype.UploadAmarachinta = function () {
        var _this = this;
        this.Amarachinta.forEach(function (er) { _this.areaRef.push({ Name: er, Mandal: _this.Amarachintakey, TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() }).then(function (res) { __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.Amarachintakey).child("Villages").child(res.key).set(true).then(function () { }).then(function () { console.log("Villages Added"); }); }); });
    };
    DataUploadPage.prototype.UploadAtmakur = function () {
        var _this = this;
        this.Atmakur.forEach(function (er) { _this.areaRef.push({ Name: er, Mandal: _this.AtmakurKey, TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() }).then(function (res) { __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.AtmakurKey).child("Villages").child(res.key).set(true).then(function () { }).then(function () { console.log("Villages Added"); }); }); });
    };
    DataUploadPage.prototype.UploadChinnamabavi = function () {
        var _this = this;
        this.Chinnamabavi.forEach(function (er) { _this.areaRef.push({ Name: er, Mandal: _this.ChinnamabaviKey, TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() }).then(function (res) { __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.ChinnamabaviKey).child("Villages").child(res.key).set(true).then(function () { }).then(function () { console.log("Villages Added"); }); }); });
    };
    DataUploadPage.prototype.UploadGhanpur = function () {
        var _this = this;
        this.Ghanpur.forEach(function (er) { _this.areaRef.push({ Name: er, Mandal: _this.GhanpurKey, TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() }).then(function (res) { __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.GhanpurKey).child("Villages").child(res.key).set(true).then(function () { }).then(function () { console.log("Villages Added"); }); }); });
    };
    DataUploadPage.prototype.UploadGopalpet = function () {
        var _this = this;
        this.Gopalpet.forEach(function (er) { _this.areaRef.push({ Name: er, Mandal: _this.GopalpetKey, TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() }).then(function (res) { __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.GopalpetKey).child("Villages").child(res.key).set(true).then(function () { }).then(function () { console.log("Villages Added"); }); }); });
    };
    DataUploadPage.prototype.UploadKothakota = function () {
        var _this = this;
        this.Kothakota.forEach(function (er) { _this.areaRef.push({ Name: er, Mandal: _this.KothakotaKey, TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() }).then(function (res) { __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.KothakotaKey).child("Villages").child(res.key).set(true).then(function () { }).then(function () { console.log("Villages Added"); }); }); });
    };
    DataUploadPage.prototype.UploadMadanapur = function () {
        var _this = this;
        this.Madanapur.forEach(function (er) { _this.areaRef.push({ Name: er, Mandal: _this.MadanapurKey, TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() }).then(function (res) { __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.MadanapurKey).child("Villages").child(res.key).set(true).then(function () { }).then(function () { console.log("Villages Added"); }); }); });
    };
    DataUploadPage.prototype.UploadPangal = function () {
        var _this = this;
        this.Pangal.forEach(function (er) { _this.areaRef.push({ Name: er, Mandal: _this.PangalKey, TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() }).then(function (res) { __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.PangalKey).child("Villages").child(res.key).set(true).then(function () { }).then(function () { console.log("Villages Added"); }); }); });
    };
    DataUploadPage.prototype.UploadPebbair = function () {
        var _this = this;
        this.Pebbair.forEach(function (er) { _this.areaRef.push({ Name: er, Mandal: _this.PebbairKey, TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() }).then(function (res) { __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.PebbairKey).child("Villages").child(res.key).set(true).then(function () { }).then(function () { console.log("Villages Added"); }); }); });
    };
    DataUploadPage.prototype.UploadPeddamandadi = function () {
        var _this = this;
        this.Peddamandadi.forEach(function (er) { _this.areaRef.push({ Name: er, Mandal: _this.PeddamandadiKey, TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() }).then(function (res) { __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.PeddamandadiKey).child("Villages").child(res.key).set(true).then(function () { }).then(function () { console.log("Villages Added"); }); }); });
    };
    DataUploadPage.prototype.UploadRevally = function () {
        var _this = this;
        this.Revally.forEach(function (er) { _this.areaRef.push({ Name: er, Mandal: _this.RevallyKey, TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() }).then(function (res) { __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.RevallyKey).child("Villages").child(res.key).set(true).then(function () { }).then(function () { console.log("Villages Added"); }); }); });
    };
    DataUploadPage.prototype.UploadSriRangapur = function () {
        var _this = this;
        this.SriRangapur.forEach(function (er) { _this.areaRef.push({ Name: er, Mandal: _this.SriRangapurKey, TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() }).then(function (res) { __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.SriRangapurKey).child("Villages").child(res.key).set(true).then(function () { }).then(function () { console.log("Villages Added"); }); }); });
    };
    DataUploadPage.prototype.UploadVeepanagandla = function () {
        var _this = this;
        this.Veepanagandla.forEach(function (er) { _this.areaRef.push({ Name: er, Mandal: _this.VeepanagandlaKey, TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() }).then(function (res) { __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.VeepanagandlaKey).child("Villages").child(res.key).set(true).then(function () { }).then(function () { console.log("Villages Added"); }); }); });
    };
    DataUploadPage.prototype.UploadWanaparthy = function () {
        var _this = this;
        this.Wanaparthy.forEach(function (er) { _this.areaRef.push({ Name: er, Mandal: _this.WanaparthyKey, TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format() }).then(function (res) { __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.WanaparthyKey).child("Villages").child(res.key).set(true).then(function () { }).then(function () { console.log("Villages Added"); }); }); });
    };
    DataUploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-data-upload',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\data-upload\data-upload.html"*/'<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>DataUpload</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n\n\n  <button ion-button (click)="UploadMandals()" >Upload Mandals</button>\n\n  <button ion-button (click)="uploadVills()">Upload Villages</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\data-upload\data-upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DataUploadPage);
    return DataUploadPage;
}());

//# sourceMappingURL=data-upload.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(592);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseCred */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Extra_dashboard_dashboard__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Extra_login_login__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_Subs_Mandals_view_mandals_view_mandals__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_Subs_Mandals_add_mandals_add_mandals__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_Subs_Villages_view_villages_view_villages__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_Subs_Villages_add_villages_add_villages__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_Subs_Schools_view_schools_view_schools__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_Subs_Schools_add_schools_add_schools__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_Subs_Anms_view_amns_view_amns__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_Subs_Anms_add_amns_add_amns__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_Subs_Mandals_mandal_details_mandal_details__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_Subs_Schools_school_details_school_details__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_Subs_Villages_village_details_village_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_Students_students_students__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_Students_student_details_student_details__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_Subs_Anms_anm_details_anm_details__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_Subs_Anms_assign_school_assign_school__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_charts__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_Subs_Anms_del_anm_del_anm__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_Subs_Anms_edit_anm_edit_anm__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_data_upload_data_upload__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_Students_delete_students_delete_students__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_Students_edit_student_edit_student__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var firebaseCred = {
    apiKey: "AIzaSyD_YDbb3sjzzqVc-N1cWBbWi9lJKYImzkQ",
    authDomain: "samatha-app.firebaseapp.com",
    databaseURL: "https://samatha-app.firebaseio.com",
    projectId: "samatha-app",
    storageBucket: "samatha-app.appspot.com",
    messagingSenderId: "1080627282737"
};
__WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](firebaseCred);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_Extra_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_Extra_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_Subs_Mandals_view_mandals_view_mandals__["a" /* ViewMandalsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_Subs_Mandals_add_mandals_add_mandals__["a" /* AddMandalsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_Subs_Villages_view_villages_view_villages__["a" /* ViewVillagesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_Subs_Villages_add_villages_add_villages__["a" /* AddVillagesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Subs_Schools_view_schools_view_schools__["a" /* ViewSchoolsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Subs_Schools_add_schools_add_schools__["a" /* AddSchoolsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Subs_Anms_view_amns_view_amns__["a" /* ViewAmnsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Subs_Anms_add_amns_add_amns__["a" /* AddAmnsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_Subs_Anms_anm_details_anm_details__["a" /* AnmDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_Subs_Mandals_mandal_details_mandal_details__["a" /* MandalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_Subs_Schools_school_details_school_details__["a" /* SchoolDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_Subs_Villages_village_details_village_details__["a" /* VillageDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_Students_students_students__["a" /* StudentsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_Students_student_details_student_details__["a" /* StudentDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_Subs_Anms_assign_school_assign_school__["a" /* AssignSchoolPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_Subs_Anms_del_anm_del_anm__["a" /* DelAnmPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_Subs_Anms_edit_anm_edit_anm__["a" /* EditAnmPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_data_upload_data_upload__["a" /* DataUploadPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_Students_delete_students_delete_students__["a" /* DeleteStudentsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_Students_edit_student_edit_student__["a" /* EditStudentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/data-upload/data-upload.module#DataUploadPageModule', name: 'DataUploadPage', segment: 'data-upload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Extra/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Extra/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Students/delete-students/delete-students.module#DeleteStudentsPageModule', name: 'DeleteStudentsPage', segment: 'delete-students', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Students/edit-student/edit-student.module#EditStudentPageModule', name: 'EditStudentPage', segment: 'edit-student', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Students/student-details/student-details.module#StudentDetailsPageModule', name: 'StudentDetailsPage', segment: 'student-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Students/students/students.module#StudentsPageModule', name: 'StudentsPage', segment: 'students', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Anms/add-amns/add-amns.module#AddAmnsPageModule', name: 'AddAmnsPage', segment: 'add-amns', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Anms/anm-details/anm-details.module#AnmDetailsPageModule', name: 'AnmDetailsPage', segment: 'anm-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Anms/assign-school/assign-school.module#AssignSchoolPageModule', name: 'AssignSchoolPage', segment: 'assign-school', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Anms/del-anm/del-anm.module#DelAnmPageModule', name: 'DelAnmPage', segment: 'del-anm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Anms/edit-anm/edit-anm.module#EditAnmPageModule', name: 'EditAnmPage', segment: 'edit-anm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Anms/view-amns/view-amns.module#ViewAmnsPageModule', name: 'ViewAmnsPage', segment: 'view-amns', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Mandals/add-mandals/add-mandals.module#AddMandalsPageModule', name: 'AddMandalsPage', segment: 'add-mandals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Mandals/mandal-details/mandal-details.module#MandalDetailsPageModule', name: 'MandalDetailsPage', segment: 'mandal-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Mandals/view-mandals/view-mandals.module#ViewMandalsPageModule', name: 'ViewMandalsPage', segment: 'view-mandals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Schools/add-schools/add-schools.module#AddSchoolsPageModule', name: 'AddSchoolsPage', segment: 'add-schools', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Schools/school-details/school-details.module#SchoolDetailsPageModule', name: 'SchoolDetailsPage', segment: 'school-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Schools/view-schools/view-schools.module#ViewSchoolsPageModule', name: 'ViewSchoolsPage', segment: 'view-schools', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Villages/add-villages/add-villages.module#AddVillagesPageModule', name: 'AddVillagesPage', segment: 'add-villages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Villages/view-villages/view-villages.module#ViewVillagesPageModule', name: 'ViewVillagesPage', segment: 'view-villages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Villages/village-details/village-details.module#VillageDetailsPageModule', name: 'VillageDetailsPage', segment: 'village-details', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(firebaseCred),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_25_ng2_charts__["ChartsModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_Extra_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_Extra_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_Subs_Mandals_view_mandals_view_mandals__["a" /* ViewMandalsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_Subs_Mandals_add_mandals_add_mandals__["a" /* AddMandalsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_Subs_Villages_view_villages_view_villages__["a" /* ViewVillagesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_Subs_Villages_add_villages_add_villages__["a" /* AddVillagesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Subs_Schools_view_schools_view_schools__["a" /* ViewSchoolsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Subs_Schools_add_schools_add_schools__["a" /* AddSchoolsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Subs_Anms_view_amns_view_amns__["a" /* ViewAmnsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Subs_Anms_add_amns_add_amns__["a" /* AddAmnsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_Subs_Anms_anm_details_anm_details__["a" /* AnmDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_Subs_Mandals_mandal_details_mandal_details__["a" /* MandalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_Subs_Schools_school_details_school_details__["a" /* SchoolDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_Subs_Villages_village_details_village_details__["a" /* VillageDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_Students_students_students__["a" /* StudentsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_Students_student_details_student_details__["a" /* StudentDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_Subs_Anms_assign_school_assign_school__["a" /* AssignSchoolPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_Subs_Anms_del_anm_del_anm__["a" /* DelAnmPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_Subs_Anms_edit_anm_edit_anm__["a" /* EditAnmPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_data_upload_data_upload__["a" /* DataUploadPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_Students_delete_students_delete_students__["a" /* DeleteStudentsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_Students_edit_student_edit_student__["a" /* EditStudentPage */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__["a" /* File */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 276,
	"./af.js": 276,
	"./ar": 277,
	"./ar-dz": 278,
	"./ar-dz.js": 278,
	"./ar-kw": 279,
	"./ar-kw.js": 279,
	"./ar-ly": 280,
	"./ar-ly.js": 280,
	"./ar-ma": 281,
	"./ar-ma.js": 281,
	"./ar-sa": 282,
	"./ar-sa.js": 282,
	"./ar-tn": 283,
	"./ar-tn.js": 283,
	"./ar.js": 277,
	"./az": 284,
	"./az.js": 284,
	"./be": 285,
	"./be.js": 285,
	"./bg": 286,
	"./bg.js": 286,
	"./bm": 287,
	"./bm.js": 287,
	"./bn": 288,
	"./bn.js": 288,
	"./bo": 289,
	"./bo.js": 289,
	"./br": 290,
	"./br.js": 290,
	"./bs": 291,
	"./bs.js": 291,
	"./ca": 292,
	"./ca.js": 292,
	"./cs": 293,
	"./cs.js": 293,
	"./cv": 294,
	"./cv.js": 294,
	"./cy": 295,
	"./cy.js": 295,
	"./da": 296,
	"./da.js": 296,
	"./de": 297,
	"./de-at": 298,
	"./de-at.js": 298,
	"./de-ch": 299,
	"./de-ch.js": 299,
	"./de.js": 297,
	"./dv": 300,
	"./dv.js": 300,
	"./el": 301,
	"./el.js": 301,
	"./en-au": 302,
	"./en-au.js": 302,
	"./en-ca": 303,
	"./en-ca.js": 303,
	"./en-gb": 304,
	"./en-gb.js": 304,
	"./en-ie": 305,
	"./en-ie.js": 305,
	"./en-il": 306,
	"./en-il.js": 306,
	"./en-nz": 307,
	"./en-nz.js": 307,
	"./eo": 308,
	"./eo.js": 308,
	"./es": 309,
	"./es-do": 310,
	"./es-do.js": 310,
	"./es-us": 311,
	"./es-us.js": 311,
	"./es.js": 309,
	"./et": 312,
	"./et.js": 312,
	"./eu": 313,
	"./eu.js": 313,
	"./fa": 314,
	"./fa.js": 314,
	"./fi": 315,
	"./fi.js": 315,
	"./fo": 316,
	"./fo.js": 316,
	"./fr": 317,
	"./fr-ca": 318,
	"./fr-ca.js": 318,
	"./fr-ch": 319,
	"./fr-ch.js": 319,
	"./fr.js": 317,
	"./fy": 320,
	"./fy.js": 320,
	"./gd": 321,
	"./gd.js": 321,
	"./gl": 322,
	"./gl.js": 322,
	"./gom-latn": 323,
	"./gom-latn.js": 323,
	"./gu": 324,
	"./gu.js": 324,
	"./he": 325,
	"./he.js": 325,
	"./hi": 326,
	"./hi.js": 326,
	"./hr": 327,
	"./hr.js": 327,
	"./hu": 328,
	"./hu.js": 328,
	"./hy-am": 329,
	"./hy-am.js": 329,
	"./id": 330,
	"./id.js": 330,
	"./is": 331,
	"./is.js": 331,
	"./it": 332,
	"./it.js": 332,
	"./ja": 333,
	"./ja.js": 333,
	"./jv": 334,
	"./jv.js": 334,
	"./ka": 335,
	"./ka.js": 335,
	"./kk": 336,
	"./kk.js": 336,
	"./km": 337,
	"./km.js": 337,
	"./kn": 338,
	"./kn.js": 338,
	"./ko": 339,
	"./ko.js": 339,
	"./ky": 340,
	"./ky.js": 340,
	"./lb": 341,
	"./lb.js": 341,
	"./lo": 342,
	"./lo.js": 342,
	"./lt": 343,
	"./lt.js": 343,
	"./lv": 344,
	"./lv.js": 344,
	"./me": 345,
	"./me.js": 345,
	"./mi": 346,
	"./mi.js": 346,
	"./mk": 347,
	"./mk.js": 347,
	"./ml": 348,
	"./ml.js": 348,
	"./mn": 349,
	"./mn.js": 349,
	"./mr": 350,
	"./mr.js": 350,
	"./ms": 351,
	"./ms-my": 352,
	"./ms-my.js": 352,
	"./ms.js": 351,
	"./mt": 353,
	"./mt.js": 353,
	"./my": 354,
	"./my.js": 354,
	"./nb": 355,
	"./nb.js": 355,
	"./ne": 356,
	"./ne.js": 356,
	"./nl": 357,
	"./nl-be": 358,
	"./nl-be.js": 358,
	"./nl.js": 357,
	"./nn": 359,
	"./nn.js": 359,
	"./pa-in": 360,
	"./pa-in.js": 360,
	"./pl": 361,
	"./pl.js": 361,
	"./pt": 362,
	"./pt-br": 363,
	"./pt-br.js": 363,
	"./pt.js": 362,
	"./ro": 364,
	"./ro.js": 364,
	"./ru": 365,
	"./ru.js": 365,
	"./sd": 366,
	"./sd.js": 366,
	"./se": 367,
	"./se.js": 367,
	"./si": 368,
	"./si.js": 368,
	"./sk": 369,
	"./sk.js": 369,
	"./sl": 370,
	"./sl.js": 370,
	"./sq": 371,
	"./sq.js": 371,
	"./sr": 372,
	"./sr-cyrl": 373,
	"./sr-cyrl.js": 373,
	"./sr.js": 372,
	"./ss": 374,
	"./ss.js": 374,
	"./sv": 375,
	"./sv.js": 375,
	"./sw": 376,
	"./sw.js": 376,
	"./ta": 377,
	"./ta.js": 377,
	"./te": 378,
	"./te.js": 378,
	"./tet": 379,
	"./tet.js": 379,
	"./tg": 380,
	"./tg.js": 380,
	"./th": 381,
	"./th.js": 381,
	"./tl-ph": 382,
	"./tl-ph.js": 382,
	"./tlh": 383,
	"./tlh.js": 383,
	"./tr": 384,
	"./tr.js": 384,
	"./tzl": 385,
	"./tzl.js": 385,
	"./tzm": 386,
	"./tzm-latn": 387,
	"./tzm-latn.js": 387,
	"./tzm.js": 386,
	"./ug-cn": 388,
	"./ug-cn.js": 388,
	"./uk": 389,
	"./uk.js": 389,
	"./ur": 390,
	"./ur.js": 390,
	"./uz": 391,
	"./uz-latn": 392,
	"./uz-latn.js": 392,
	"./uz.js": 391,
	"./vi": 393,
	"./vi.js": 393,
	"./x-pseudo": 394,
	"./x-pseudo.js": 394,
	"./yo": 395,
	"./yo.js": 395,
	"./zh-cn": 396,
	"./zh-cn.js": 396,
	"./zh-hk": 397,
	"./zh-hk.js": 397,
	"./zh-tw": 398,
	"./zh-tw.js": 398
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 626;

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VillageDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Schools_school_details_school_details__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Anms_anm_details_anm_details__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VillageDetailsPage = /** @class */ (function () {
    function VillageDetailsPage(navCtrl, db, navParams) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.navParams = navParams;
        this.village = this.navParams.get("village");
        this.schoolRef = this.db.list("SubsIndex/Villages/" + this.village.key + "/Schools");
        this.schools = [];
        this.showSchool = false;
        this.anmRef = this.db.list("SubsIndex/Villages/" + this.village.key + "/Anms");
        this.anms = [];
        this.showAnms = false;
        this.totStudents = 0;
        this.totStudents = this.village.Healthy + this.village.Mildly + this.village.Moderate + this.village.Severe;
        this.getMandal();
        console.log(this.village);
        this.getSchools();
        this.getAnms();
    }
    VillageDetailsPage.prototype.getMandal = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("Subs/Mandals").child(this.village.Mandal).once("value", function (snap) {
            _this.mandalName = snap.val().Name;
        });
    };
    VillageDetailsPage.prototype.getSchools = function () {
        var _this = this;
        this.schoolRef.snapshotChanges().subscribe(function (snap) {
            snap.forEach(function (snp) {
                _this.db.object("Subs/Schools/" + snp.key).snapshotChanges().subscribe(function (snap) {
                    var temp = snap.payload.val();
                    temp.key = snap.key;
                    _this.schools.push(temp);
                });
            });
        });
    };
    VillageDetailsPage.prototype.getAnms = function () {
        var _this = this;
        this.anmRef.snapshotChanges().subscribe(function (snap) {
            snap.forEach(function (snp) {
                _this.db.object("Organisms/Anms/" + snp.key).snapshotChanges().subscribe(function (snap) {
                    var temp = snap.payload.val();
                    temp.key = snap.key;
                    _this.anms.push(temp);
                });
            });
        });
    };
    VillageDetailsPage.prototype.toggleSchools = function () {
        this.showSchool = !this.showSchool;
    };
    VillageDetailsPage.prototype.gtSchoolsDetails = function (s) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Schools_school_details_school_details__["a" /* SchoolDetailsPage */], { school: s });
    };
    VillageDetailsPage.prototype.toggleAnms = function () {
        this.showAnms = !this.showAnms;
    };
    VillageDetailsPage.prototype.gtAnmsDetails = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__Anms_anm_details_anm_details__["a" /* AnmDetailsPage */], { anm: a });
    };
    VillageDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-village-details',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Villages\village-details\village-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{village.Name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n\n\n\n\n  <ion-content padding>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <ion-card>\n\n            <ion-navbar color="primary" (click)="toggleSchools()" class="curs">\n\n              <ion-title>Schools</ion-title>\n\n              <ion-buttons end>\n\n                <button ion-button large clear>{{village.Schools}}</button>\n\n                <h1 ion-text color="whiter">{{schools.length}}</h1>\n\n              </ion-buttons>\n\n            </ion-navbar>\n\n\n\n            <ion-card-content *ngIf="showSchool">\n\n              <ion-item *ngFor="let s of schools">\n\n                <button item-start clear ion-button (click)="gtSchoolsDetails(s)" color="dark" large>{{s.Name}}</button>\n\n              </ion-item>\n\n            </ion-card-content>\n\n\n\n\n\n          </ion-card>\n\n          <ion-card>\n\n            <ion-navbar color="primary" (click)="toggleAnms()" class="curs">\n\n              <ion-title>Anms</ion-title>\n\n              <ion-buttons end>\n\n                <button ion-button large clear>{{village.Anms}}</button>\n\n                <h1 ion-text color="whiter">{{anms.length}}</h1>\n\n              </ion-buttons>\n\n            </ion-navbar>\n\n\n\n            <ion-card-content *ngIf="showAnms">\n\n              <ion-item *ngFor="let a of anms">\n\n                <button item-start clear ion-button (click)="gtAnmsDetails(a)" color="dark" large>{{a.Name}}</button>\n\n              </ion-item>\n\n            </ion-card-content>\n\n\n\n\n\n          </ion-card>\n\n\n\n\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-card>\n\n            <ion-card-content>\n\n              <ion-card-title>\n\n                Village Stats\n\n              </ion-card-title>\n\n\n\n              <ion-item>\n\n                <p item-start color="primary" ion-text>Total Students</p>\n\n                <p item-end>{{totStudents}}</p>\n\n              </ion-item>\n\n              <ion-item>\n\n                <p item-start color="primary" ion-text>Severely Anaemic</p>\n\n                <p item-end>{{village.Severe}}</p>\n\n              </ion-item>\n\n              <ion-item>\n\n                <p item-start color="primary" ion-text>Moderately Anaemic</p>\n\n                <p item-end>{{village.Moderate}}</p>\n\n              </ion-item>\n\n              <ion-item>\n\n                <p item-start color="primary" ion-text>Mildly Anaemic</p>\n\n                <p item-end>{{village.Mildly}}</p>\n\n              </ion-item>\n\n              <ion-item>\n\n                <p item-start color="primary" ion-text>Healthy</p>\n\n                <p item-end>{{village.Healthy}}</p>\n\n              </ion-item>\n\n\n\n\n\n            </ion-card-content>\n\n          </ion-card>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Villages\village-details\village-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], VillageDetailsPage);
    return VillageDetailsPage;
}());

//# sourceMappingURL=village-details.js.map

/***/ }),

/***/ 643:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 644:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnmDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assign_school_assign_school__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_anm_edit_anm__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Schools_school_details_school_details__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AnmDetailsPage = /** @class */ (function () {
    function AnmDetailsPage(navCtrl, modalCtrl, db, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.navParams = navParams;
        this.anmP = this.navParams.get("anm");
        this.assignedJobs = [];
        this.anmJobRef = this.db.list("Organisms/Anm Assigns/" + this.anmP.key);
        console.log(this.anmP);
        this.getAssignedSchools();
    }
    AnmDetailsPage.prototype.editAnmDetails = function () {
        var editAnm = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__edit_anm_edit_anm__["a" /* EditAnmPage */], { anm: this.anmP }, { enableBackdropDismiss: false });
        editAnm.present();
    };
    AnmDetailsPage.prototype.assignSchools = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__assign_school_assign_school__["a" /* AssignSchoolPage */], { anm: this.anmP });
    };
    AnmDetailsPage.prototype.getAssignedSchools = function () {
        var _this = this;
        this.anmJobRef.snapshotChanges().subscribe(function (snap) {
            _this.assignedJobs = [];
            snap.forEach(function (snip) {
                var temp = snip.payload.val();
                temp.key = snip.key;
                _this.assignedJobs.push(temp);
            });
        });
    };
    AnmDetailsPage.prototype.gtSchoolDetails = function (s) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs").child("Schools").child(s.School).once("value", function (snap) {
            var temp = snap.val();
            temp.key = snap.key;
            var severeRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Counters/Schools").child(snap.key).child("Severity");
            severeRef.child("Severely Anaemic").once("value", function (svereSnap) { temp.Severe = svereSnap.numChildren(); });
            severeRef.child("Moderately Anaemic").once("value", function (svereSnap) { temp.Moderate = svereSnap.numChildren(); });
            severeRef.child("Mildly  Anaemic").once("value", function (svereSnap) { temp.Mildly = svereSnap.numChildren(); });
            severeRef.child("Healthy").once("value", function (svereSnap) { temp.Healthy = svereSnap.numChildren(); });
            _this.detSchool = temp;
        }).then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__Schools_school_details_school_details__["a" /* SchoolDetailsPage */], { school: _this.detSchool });
        });
    };
    AnmDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-anm-details',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\anm-details\anm-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{anmP.Name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <button ion-button float-right (click)="assignSchools()">Assign School</button>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <!-- <button ion-button float-right clear icon-only (click)="editAnmDetails()">\n\n              <ion-icon name="md-create"></ion-icon>\n\n            </button> -->\n\n            <ion-card-title>{{anmP.Name}}</ion-card-title>\n\n            <ion-item>\n\n              <p ion-text item-start color="primary">Phone Number</p>\n\n              <p item-end>{{anmP.Phone}}</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <p ion-text item-start color="primary">Gender</p>\n\n              <p item-end>{{anmP.Gender}}</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <p ion-text item-start color="primary">Email</p>\n\n              <p item-end>{{anmP.Email}}</p>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-card-title>Status</ion-card-title>\n\n            <ion-item>\n\n              <p ion-text item-start color="primary">Schools</p>\n\n              <p item-end>{{assignedJobs.length}}</p>\n\n            </ion-item>\n\n            <!-- <ion-item>\n\n              <p ion-text item-start color="primary">Students</p>\n\n              <p item-end>20</p>\n\n            </ion-item> -->\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-card-title color="primary">Current Schools</ion-card-title>\n\n            <ion-item *ngFor="let j of assignedJobs">\n\n              <p item-start color="primary" class="curs" (click)="gtSchoolDetails(j)" >{{j.SchoolName}} </p>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\anm-details\anm-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AnmDetailsPage);
    return AnmDetailsPage;
}());

//# sourceMappingURL=anm-details.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Extra_login_login__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Extra_dashboard_dashboard__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Subs_Mandals_view_mandals_view_mandals__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_Subs_Villages_view_villages_view_villages__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Subs_Schools_view_schools_view_schools__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Students_students_students__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_Subs_Anms_view_amns_view_amns__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, toastCtrl) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_Extra_dashboard_dashboard__["a" /* DashboardPage */];
        this.full = true;
        this.initializeApp();
        this.pages = [
            { title: 'DashBoard', component: __WEBPACK_IMPORTED_MODULE_4__pages_Extra_dashboard_dashboard__["a" /* DashboardPage */], icon: "flash", color: "yellowi" },
            { title: "Mandals", component: __WEBPACK_IMPORTED_MODULE_5__pages_Subs_Mandals_view_mandals_view_mandals__["a" /* ViewMandalsPage */], icon: "md-pin", color: "whiter" },
            { title: "Villages", component: __WEBPACK_IMPORTED_MODULE_6__pages_Subs_Villages_view_villages_view_villages__["a" /* ViewVillagesPage */], icon: "md-home", color: "whiter" },
            { title: "Schools", component: __WEBPACK_IMPORTED_MODULE_7__pages_Subs_Schools_view_schools_view_schools__["a" /* ViewSchoolsPage */], icon: "md-school", color: "whiter" },
            { title: "ANM's", component: __WEBPACK_IMPORTED_MODULE_9__pages_Subs_Anms_view_amns_view_amns__["a" /* ViewAmnsPage */], icon: "ios-people", color: "whiter" },
            { title: "Students", component: __WEBPACK_IMPORTED_MODULE_8__pages_Students_students_students__["a" /* StudentsPage */], icon: "ios-person", color: "whiter" },
        ];
        this.activePage = this.pages[0];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Admin Data").child("Admins").child(user.uid).once('value', function (itemSnap) {
                        if (itemSnap.exists()) {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_Extra_dashboard_dashboard__["a" /* DashboardPage */];
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(function () {
                                _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_Extra_login_login__["a" /* LoginPage */];
                                _this.presentToast("You are not registered a Admin");
                            });
                        }
                    });
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_Extra_login_login__["a" /* LoginPage */];
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
        this.activePage = page;
    };
    MyApp.prototype.checkActive = function (page) {
        return page == this.activePage;
    };
    MyApp.prototype.signOut = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_Extra_login_login__["a" /* LoginPage */]);
            _this.presentToast("Signed Out");
        }).catch(function (error) {
            console.log(error.message);
        });
    };
    MyApp.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: "middle",
            showCloseButton: false,
        });
        toast.present();
    };
    MyApp.prototype.collapse = function () {
        this.full = false;
    };
    MyApp.prototype.expand = function () {
        this.full = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\app\app.html"*/'<ion-split-pane  >\n\n  <ion-menu [content]="content" [class.fullPain]="!full" [class.halfPain]="full" >\n\n    <ion-header>\n\n      <ion-toolbar color="dark">\n\n        <!-- <img src="assets/imgs/sam-logo.png" padding-right/> -->\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="no-scroll bg-semidark">\n\n      <ion-list no-lines *ngIf="full" >\n\n        <button menuClose color="dark" padding-left [class.activeHighlight]="checkActive(p)" \n\n        ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          {{p.title}}\n\n          <ion-icon class="menu-icon" item-left [name]="p.icon" [color]="p.color" ></ion-icon>\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list no-lines *ngIf="!full" >\n\n        <button menuClose color="dark" [class.activeHighlight]="checkActive(p)" \n\n        ion-item *ngFor="let p of pages" (click)="openPage(p)" icon-only >\n\n          <ion-icon class="menu-icon" item-left [name]="p.icon" [color]="p.color" ></ion-icon>\n\n        </button>\n\n      </ion-list>\n\n\n\n    </ion-content>\n\n    <ion-footer class="menu-footer">\n\n      <ion-list no-lines>\n\n      <button ion-button block *ngIf="full"  (click)="signOut()" color="danger">\n\n        Sign Out\n\n      </button>\n\n      <button ion-item block icon-only *ngIf="!full" (click)="signOut()" color="danger">\n\n        <ion-icon name="md-power" item-left ></ion-icon>\n\n      </button>\n\n\n\n\n\n      <button menuClose color="dark" *ngIf="full" ion-item (click)="collapse()">\n\n        <ion-icon class="menu-icon" item-end name="md-arrow-dropleft" color="whiter" ></ion-icon>\n\n      </button>\n\n\n\n      <button menuClose color="dark" *ngIf="!full" ion-item (click)="expand()">\n\n        <ion-icon class="menu-icon" item-end name="md-arrow-dropright" color="whiter" ></ion-icon>\n\n      </button>\n\n      </ion-list>\n\n    </ion-footer>\n\n  </ion-menu>\n\n\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n  <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentDetailsPage = /** @class */ (function () {
    function StudentDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.student = this.navParams.get("student");
        console.log(this.student);
    }
    StudentDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-details',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Students\student-details\student-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Student Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-row>\n\n          <ion-card>\n\n            <ion-card-content>\n\n              <ion-card-title>{{student.StudentName}}</ion-card-title>\n\n\n\n              <ion-item>\n\n                <p item-start ion-text color="primary">Mobile </p>\n\n                <p item-end >{{student.Mobile}} </p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <p item-start ion-text color="primary">Age</p>\n\n                <p item-end >{{student.Age}} </p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <p item-start ion-text color="primary">HBL </p>\n\n                <p item-end >{{student.HBL}} </p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <p item-start ion-text color="primary">Community </p>\n\n                <p item-end >{{student.Community}} </p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <p item-start ion-text color="primary"> Aadhar</p>\n\n                <p item-end >{{student.Aadhar}} </p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <p item-start ion-text color="primary">Address </p>\n\n                <p item-end >{{student.Address}} </p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <p item-start ion-text color="primary">Community </p>\n\n                <p item-end >{{student.Community}} </p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <p item-start ion-text color="primary">Height</p>\n\n                <p item-end >{{student.Height}} </p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <p item-start ion-text color="primary">Weight </p>\n\n                <p item-end >{{student.Weight}} </p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <p item-start ion-text color="primary">Class </p>\n\n                <p item-end >{{student.Class}} </p>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <p item-start ion-text color="primary"> Date of Entry</p>\n\n                <p item-end >{{student.EntryDate | date: \'dd/MM/yyyy\' }} </p>\n\n              </ion-item>\n\n\n\n              \n\n              <!-- <ion-item>\n\n                <p item-start ion-text color="primary"> </p>\n\n                <p item-end >{{student.}} </p>\n\n              </ion-item> -->\n\n\n\n            </ion-card-content>\n\n          </ion-card>\n\n\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-row>\n\n          <ion-card>\n\n            <ion-card-content>\n\n              <ion-card-title>Follow Ups</ion-card-title>\n\n              <ion-item>\n\n                <p item-start ion-text color="primary">First Check Up </p>\n\n                <p item-end >{{student.EntryDate | date: \'dd/MM/yyyy\'}} </p>\n\n              </ion-item>\n\n              <ion-item>\n\n                <p item-start ion-text color="primary">Next Check Up </p>\n\n                <p item-end >{{student.FollowUpDate | date: \'dd/MM/yyyy\'}} </p>\n\n              </ion-item>\n\n\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-row>\n\n      </ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Students\student-details\student-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], StudentDetailsPage);
    return StudentDetailsPage;
}());

//# sourceMappingURL=student-details.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MandalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Villages_village_details_village_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Schools_school_details_school_details__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MandalDetailsPage = /** @class */ (function () {
    function MandalDetailsPage(navCtrl, db, navParams) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.navParams = navParams;
        this.mandal = this.navParams.get("mandal");
        this.villageRef = this.db.list("SubsIndex/Mandals/" + this.mandal.key + "/Villages");
        this.villages = [];
        this.showVillage = false;
        this.schoolRef = this.db.list("SubsIndex/Mandals/" + this.mandal.key + "/Schools");
        this.schools = [];
        this.showSchool = false;
        this.totStudents = 0;
        this.totStudents = +this.mandal.Healthy + this.mandal.Mildly + this.mandal.Moderate + this.mandal.Severe;
        console.log(this.mandal);
        this.getVillages();
        this.getSchools();
    }
    MandalDetailsPage.prototype.getVillages = function () {
        var _this = this;
        this.villageRef.snapshotChanges().subscribe(function (snap) {
            snap.forEach(function (snp) {
                _this.db.object("Subs/Villages/" + snp.key).snapshotChanges().subscribe(function (snap) {
                    var temp = snap.payload.val();
                    temp.key = snap.key;
                    _this.villages.push(temp);
                });
            });
        });
    };
    MandalDetailsPage.prototype.getSchools = function () {
        var _this = this;
        this.schoolRef.snapshotChanges().subscribe(function (snap) {
            snap.forEach(function (snp) {
                _this.db.object("Subs/Schools/" + snp.key).snapshotChanges().subscribe(function (snap) {
                    var temp = snap.payload.val();
                    temp.key = snap.key;
                    _this.schools.push(temp);
                });
            });
        });
    };
    MandalDetailsPage.prototype.gtVillageDetails = function (v) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Villages_village_details_village_details__["a" /* VillageDetailsPage */], { village: v });
    };
    MandalDetailsPage.prototype.gtSchoolsDetails = function (s) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__Schools_school_details_school_details__["a" /* SchoolDetailsPage */], { school: s });
    };
    MandalDetailsPage.prototype.toggleVillages = function () {
        this.showVillage = !this.showVillage;
    };
    MandalDetailsPage.prototype.toggleSchools = function () {
        this.showSchool = !this.showSchool;
    };
    MandalDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mandal-details',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Mandals\mandal-details\mandal-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>{{mandal.Name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n          <ion-card>\n\n              <ion-navbar color="primary" (click)="toggleVillages()" class="curs" >\n\n                <ion-title>Villages</ion-title>\n\n                <ion-buttons end>\n\n                <button ion-button large clear>{{villages.length}}</button>\n\n                </ion-buttons>\n\n              </ion-navbar>\n\n          \n\n              <ion-card-content *ngIf="showVillage" >\n\n                <ion-item *ngFor="let v of villages" >\n\n                  <button item-start clear ion-button (click)="gtVillageDetails(v)" color="dark" large>{{v.Name}}</button>\n\n                </ion-item>\n\n              </ion-card-content>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-navbar color="primary" (click)="toggleSchools()" class="curs" >\n\n                  <ion-title>Schools</ion-title>\n\n                  <ion-buttons end>\n\n                  <button ion-button large clear>{{mandal.Schools}}</button>\n\n                  <button ion-button large clear>{{schools.length}}</button>\n\n                  </ion-buttons>\n\n                </ion-navbar>\n\n            \n\n                <ion-card-content *ngIf="showSchool" >\n\n                  <ion-item *ngFor="let s of schools" >\n\n                    <button item-start clear ion-button (click)="gtSchoolsDetails(s)" color="dark" large>{{s.Name}}</button>\n\n                  </ion-item>\n\n                </ion-card-content>\n\n            \n\n            \n\n              </ion-card>\n\n            \n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-card-title>\n\n              Mandal Stats\n\n            </ion-card-title>\n\n\n\n            <ion-item>\n\n              <p item-start color="primary" ion-text>Total Students</p>\n\n              <p item-end>{{totStudents}}</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <p item-start color="primary" ion-text>Severely Anaemic</p>\n\n              <p item-end>{{mandal.Severe}}</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <p item-start color="primary" ion-text>Moderately Anaemic</p>\n\n              <p item-end>{{mandal.Moderate}}</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <p item-start color="primary" ion-text>Mildly Anaemic</p>\n\n              <p item-end>{{mandal.Mildly}}</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <p item-start color="primary" ion-text>Healthy</p>\n\n              <p item-end>{{mandal.Healthy}}</p>\n\n            </ion-item>\n\n\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Mandals\mandal-details\mandal-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MandalDetailsPage);
    return MandalDetailsPage;
}());

//# sourceMappingURL=mandal-details.js.map

/***/ })

},[459]);
//# sourceMappingURL=main.js.map