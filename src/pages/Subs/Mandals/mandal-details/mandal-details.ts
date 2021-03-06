import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { VillageDetailsPage } from '../../Villages/village-details/village-details';
import { SchoolDetailsPage } from '../../Schools/school-details/school-details';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-mandal-details',
  templateUrl: 'mandal-details.html',
})
export class MandalDetailsPage {

  mandal = this.navParams.get("mandal");

  villageRef = this.db.list(`SubsIndex/Mandals/${this.mandal.key}/Villages`)
  villages : Array<any> = [];
  showVillage : boolean = false;

  schoolRef = this.db.list(`SubsIndex/Mandals/${this.mandal.key}/Schools`)
  schools : Array<any> = [];
  showSchool : boolean = false;
  totStudents : number = 0;
  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {    
    this.totStudents = +this.mandal.Healthy+this.mandal.Mildly+this.mandal.Moderate+this.mandal.Severe;
    console.log(this.mandal);
    this.getVillages();
    this.getSchools();
  }

  getVillages(){
    this.villageRef.snapshotChanges().subscribe(snap=>{
      snap.forEach(snp=>{
        this.db.object(`Subs/Villages/${snp.key}`).snapshotChanges().subscribe(snap=>{
          var temp : any = snap.payload.val();
          temp.key = snap.key;
          this.villages.push(temp);
        })
        
      })
    })
  }
  getSchools(){
    this.schoolRef.snapshotChanges().subscribe(snap=>{
      snap.forEach(snp=>{
        this.db.object(`Subs/Schools/${snp.key}`).snapshotChanges().subscribe(snap=>{
          var temp : any = snap.payload.val();
          temp.key = snap.key;
          this.schools.push(temp);
        })
        
      })
    })
  }

  gtVillageDetails(v){
    this.navCtrl.push(VillageDetailsPage,{village : v});
  }
  gtSchoolsDetails(s){
    this.navCtrl.push(SchoolDetailsPage,{school : s});
  }
  toggleVillages(){
    this.showVillage = !this.showVillage;
  }
  toggleSchools(){
    this.showSchool = !this.showSchool;
  }
}