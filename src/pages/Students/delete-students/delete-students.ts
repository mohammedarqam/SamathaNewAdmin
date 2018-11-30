import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';




@IonicPage()
@Component({
  selector: 'page-delete-students',
  templateUrl: 'delete-students.html',
})
export class DeleteStudentsPage {

  anmKeys : Array<any> = this.navParams.get("delAnms");
  anms : Array<any> = [];

  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public loadingCtrl : LoadingController,
  public toastCtrl : ToastController,
  public navParams: NavParams
  ) {
    this.getSchools();
  }

  getSchools(){
    this.anmKeys.forEach(snp=>{
      firebase.database().ref("Organisms/Students").child(snp).once("value",itemSnap=>{
        var temp : any = itemSnap.val();
        temp.key = itemSnap.key;
        this.anms.push(temp)
      })
      console.log(this.anms);
    })
  }


  deleteStudents(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();

    this.anmKeys.forEach(snip=>{
      firebase.database().ref("Organisms/Students").child(snip).remove();
    })
    this.close();
    loading.dismiss();
    this.presentToast("Students Deleted");
  }

  close(){
    this.viewCtrl.dismiss();
  }

  presentToast(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
  }

}
