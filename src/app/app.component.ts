import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';

import * as firebase from 'firebase';
import { LoginPage } from '../pages/Extra/login/login';
import { DashboardPage } from '../pages/Extra/dashboard/dashboard';
import { ViewMandalsPage } from '../pages/Subs/Mandals/view-mandals/view-mandals';
import { ViewVillagesPage } from '../pages/Subs/Villages/view-villages/view-villages';
import { ViewSchoolsPage } from '../pages/Subs/Schools/view-schools/view-schools';
import { StudentsPage } from '../pages/Students/students/students';
import { ViewAmnsPage } from '../pages/Subs/Anms/view-amns/view-amns';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;
  activePage: any;

  full : boolean = false;

  pages: Array<{ title: string, component: any, icon: any, color : string }>;



  constructor(
    public platform: Platform,    
    public toastCtrl: ToastController,
    ) {
      this.initializeApp();

    this.pages = [
      { title: 'DashBoard', component: DashboardPage, icon: "flash",color: "yellowi" },
      { title: "Mandals", component: ViewMandalsPage, icon: "md-pin",color: "whiter" },
      { title: "Villages", component: ViewVillagesPage, icon: "md-home",color: "whiter" },
      { title: "Schools", component: ViewSchoolsPage, icon: "md-school",color: "whiter" },
      { title: "ANM's", component: ViewAmnsPage, icon: "ios-people",color: "whiter" },
      { title: "Students", component: StudentsPage, icon: "ios-person",color: "whiter" },
      
    ];
    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        firebase.database().ref("Admin Data").child("Admins").child(user.uid).once('value',itemSnap=>{
            if(itemSnap.exists()){
              this.rootPage = DashboardPage;
            }else{
              firebase.auth().signOut().then(()=>{
                this.rootPage = LoginPage;
                this.presentToast("You are not registered a Admin")
              })
            }
    });
      }
      else{
        this.rootPage = LoginPage;
      }
    });  
     });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;

  }
  checkActive(page) {
    return page == this.activePage;
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      this.nav.setRoot(LoginPage);
      this.presentToast("Signed Out");
    }).catch((error) => {
      console.log(error.message);
    });

 
}
presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 4000,
    position : "middle",
    showCloseButton: false,
  });
  toast.present();
}
collapse(){
  this.full = false;
}
expand(){
  this.full = true;
}

}
