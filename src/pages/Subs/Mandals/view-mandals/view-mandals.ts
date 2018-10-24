import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { AddMandalsPage } from '../add-mandals/add-mandals';

@IonicPage()
@Component({
  selector: 'page-view-mandals',
  templateUrl: 'view-mandals.html',
})
export class ViewMandalsPage {

  areaRef =this.db.list('Subs/Mandals');
  area: Array<any> = [];
  areasLoaded: Array<any> = [];



  areaFRef = firebase.database().ref("Subs/Mandals");

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public toastCtrl : ToastController,
  public alertCtrl: AlertController,
  public modalCtrl : ModalController,
  public navParams: NavParams
  ) {
    this.getAreas();
  }

  getAreas(){
    this.areaRef.snapshotChanges().subscribe(snap=>{
      let tempArray = [];
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        tempArray.push(temp);
      })
      this.area = tempArray;
      this.areasLoaded = tempArray;
    })

  }

  initializeItems(): void {
    this.area = this.areasLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.area = this.area.filter((v) => {
      if(v.Name && q) {
        if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }



  gtAddArea(){
    let areaAdd = this.modalCtrl.create(AddMandalsPage,null,{enableBackdropDismiss : false});
    areaAdd.present();
  }


  deleteArea(a) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to Delete this Mandal ?',
      message: 'This area cannot be recovered again',
      buttons: [
        {
          text: 'No, Its a mistake',
          handler: () => {

          }
        },
        {
          text: 'Yes, I understand',
          handler: () => {
            this.delete(a);
          }
        }
      ]
    });
    confirm.present();
  }


  delete(area) {

      this.areaFRef.child(area.key).remove().then(() => {
        this.presentToast('Mandal Deleted');
      });
 }

 presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 4000,
    position :"bottom"
    
  });
  toast.present();
}
}
