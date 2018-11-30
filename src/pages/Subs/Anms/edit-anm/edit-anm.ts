import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-edit-anm',
  templateUrl: 'edit-anm.html',
})
export class EditAnmPage {

  anm = this.navParams.get("anm");

  name: string;
  phone: string;
  email: string;
  pass: string;

  adminMail: string;
  adminPass: string;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navParams: NavParams
  ) {
    this.name = this.anm.Name;
    this.phone = this.anm.Phone;
    this.email = this.anm.Email;
    this.pass = this.anm.Password;
    this.getAdmin();
  }

  checkData() {
    if (this.name) {
      if (this.phone) {
        if (this.pass) {
          this.updateANM();
        } else { this.presentToast("Enter a Password") }
      } else { this.presentToast("Enter Phone") }
    } else { this.presentToast("Enter a Name") }
  }

  getAdmin() {
    firebase.database().ref("Admin Data/Admins").child(firebase.auth().currentUser.uid).once("value", itemSnap => {
      this.adminMail = itemSnap.val().Email;
      this.adminPass = itemSnap.val().Password;
    })
  }

  updateANM() {
    let pToe = this.phone + "@samatha.anm";
    let basemail = this.anm.Phone + "@samatha.anm";

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    firebase.auth().signInWithEmailAndPassword(basemail, this.anm.Password).then(() => {
      firebase.database().ref("Organisms/Anms").child(this.anm.key).child("Name").set(this.name).then(() => {
        firebase.auth().currentUser.updateEmail(pToe).then(() => {
          firebase.database().ref("Organisms/Anms").child(this.anm.key).child("Phone").set(this.phone).then(() => {
            firebase.auth().signInWithEmailAndPassword(pToe, this.anm.Password).then(() => {
              firebase.auth().currentUser.updatePassword(this.pass).then(() => {
                firebase.database().ref("Organisms/Anms").child(this.anm.key).child("Password").set(this.pass).then(() => {
                  firebase.auth().signInWithEmailAndPassword(this.adminMail, this.adminPass).then(() => {
                    loading.dismiss();
                    this.close();
                    this.presentToast("Anm Updated");
                  })
                })
              })
            })
          })
        });
      });
    });

  }

  close() {
    this.viewCtrl.dismiss();
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: "middle"

    })
    toast.present();
  }

}
