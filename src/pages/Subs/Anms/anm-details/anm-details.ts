import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AssignSchoolPage } from '../assign-school/assign-school';
import { EditAnmPage } from '../edit-anm/edit-anm';
import { AngularFireDatabase } from 'angularfire2/database';
import { SchoolDetailsPage } from '../../Schools/school-details/school-details';

@IonicPage()
@Component({
  selector: 'page-anm-details',
  templateUrl: 'anm-details.html',
})
export class AnmDetailsPage {

  anmP = this.navParams.get("anm");
  assignedJobs: Array<any> = [];

  anmJobRef = this.db.list(`Organisms/Anm Assigns/${this.anmP.key}`);
  public detSchool : any; 

  constructor(
  public navCtrl: NavController, 
  public modalCtrl : ModalController,
  public db: AngularFireDatabase,
  public navParams: NavParams
  ) {
    console.log(this.anmP)
    this.getAssignedSchools();
  }

  editAnmDetails(){
    let editAnm = this.modalCtrl.create(EditAnmPage,{anm : this.anmP},{enableBackdropDismiss : false});
    editAnm.present();
  }

  assignSchools(){
    this.navCtrl.push(AssignSchoolPage,{anm : this.anmP}); 
  }
  getAssignedSchools() {
    this.anmJobRef.snapshotChanges().subscribe(snap => {
      this.assignedJobs = [];
      snap.forEach(snip => {
        var temp: any = snip.payload.val();
        temp.key = snip.key;
        this.assignedJobs.push(temp);
      })
    })
  }

  gtSchoolDetails(s){
    firebase.database().ref("Subs").child("Schools").child(s.School).once("value",snap=>{
      var temp : any = snap.val();
      temp.key = snap.key;
      var severeRef = firebase.database().ref("Counters/Schools").child(snap.key).child("Severity");
      severeRef.child("Severely Anaemic").once("value",svereSnap=>{temp.Severe = svereSnap.numChildren();})
      severeRef.child("Moderately Anaemic").once("value",svereSnap=>{temp.Moderate = svereSnap.numChildren();})
      severeRef.child("Mildly  Anaemic").once("value",svereSnap=>{temp.Mildly = svereSnap.numChildren();})
      severeRef.child("Healthy").once("value",svereSnap=>{temp.Healthy = svereSnap.numChildren();})
    this.detSchool = temp;
    }).then(()=>{
      this.navCtrl.push(SchoolDetailsPage,{school : this.detSchool});
    })
  }
}
