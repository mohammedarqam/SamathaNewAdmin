import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-edit-student',
  templateUrl: 'edit-student.html',
})
export class EditStudentPage {

  student = this.navParams.get("Student");
  followUpDays: string;
  sevC: string;

  constructor(
  public navCtrl: NavController,
  public loadingCtrl : LoadingController,  
  public toastCtrl: ToastController,
  public navParams: NavParams
  ) {
    this.getSev()
    console.log(this.student)    
  }

  checkData() {
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
                        } else { this.presentToast("Enter community"); }
                      } else { this.presentToast("Enter Address"); }
                    } else { this.presentToast("Aadhar Number Not Valid"); }
                  } else { this.presentToast("Enter HB Level"); }
                } else { this.presentToast("Enter Weight"); }
              } else { this.presentToast("Enter Height"); }
            } else { this.presentToast("Enter class"); }
          } else { this.presentToast("Age not Valid"); }
        } else { this.presentToast("Mobile Number not Valid"); }
      } else { this.presentToast("Enter Parent Name"); }
    } else { this.presentToast("Enter Student Name"); }
  }

  getSev() {
    var hbnew = +this.student.HBL;
    if (hbnew <= 6) {
      this.student.Severity = "Severely Anaemic";
      this.followUpDays = "30";
      this.sevC = "s";
    }
    if (hbnew == 7 || hbnew == 8) {
      this.student.Severity = "Moderately Anaemic"
      this.followUpDays = "45";
      this.sevC = "mo";
    }
    if (hbnew == 9 || hbnew == 10) {
      this.student.Severity = "Mildly  Anaemic"
      this.followUpDays = "45";
      this.sevC = "mi";
    }
    if (hbnew >= 11) {
      this.student.Severity = "Healthy"
      this.followUpDays = "60";
      this.sevC = "h";
    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      position: "middle",
      duration: 4000,
      showCloseButton: false,
    });
    toast.present();
  }

  enterData() {
    let kk = this.student.key;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    delete this.student.key;
    delete this.student.colori;
    delete this.student.SchoolName;
    delete this.student.VillageName;
    delete this.student.MandalName;
    delete this.student.ANMName;
    firebase.database().ref("Organisms/Students").child(kk).set(this.student).then(()=>{
      this.presentToast("Student Updated");
      this.navCtrl.pop();
      loading.dismiss();
    }).catch((e)=>{
      console.log("Error Found")
      console.log(e);
      loading.dismiss();
    });
  }
}
