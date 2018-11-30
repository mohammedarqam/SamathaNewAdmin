import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, ModalController } from 'ionic-angular';
import { AddAmnsPage } from '../add-amns/add-amns';
import { AngularFireDatabase } from 'angularfire2/database';
import { AnmDetailsPage } from '../anm-details/anm-details';
import * as firebase from 'firebase';
import { DelAnmPage } from '../del-anm/del-anm';
import { SchoolDetailsPage } from '../../Schools/school-details/school-details';
import * as XLSX from 'xlsx';
import * as saveAs from 'file-saver';


@IonicPage()
@Component({
  selector: 'page-view-amns',
  templateUrl: 'view-amns.html',
})
export class ViewAmnsPage {
  pgName = "ANMs"
  anmRef = this.db.list("Organisms/Anms");
  anms: Array<any> = [];
  anmsLoaded: Array<any> = [];

  selArray: Array<any> = [];
  selSchool: any;
  constructor(
    public navCtrl: NavController,
    public db: AngularFireDatabase,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) {
    this.menuCtrl.enable(true);
    this.getAnms();
  }

  getAnms() {
    this.anmRef.snapshotChanges().subscribe(snap => {
      let tempArray = [];
      snap.forEach(snp => {
        var temp: any = snp.payload.val();
        temp.key = snp.key;
        firebase.database().ref("Organisms").child("Anm Assigns").child(temp.key).once("value", itemSnap => {
          var sklsArr: Array<any> = [];
          itemSnap.forEach(snip => {
            var tempo : any = snip.val();
            firebase.database().ref("SubsIndex/Schools").child(snip.val().School).child("Students").once("value",its=>{
              tempo.Childs = its.numChildren();
            })
            sklsArr.push(tempo);
          })
          temp.Schools = sklsArr;
        })
        tempArray.push(temp);
      })
      this.anms = tempArray;
      this.anmsLoaded = tempArray;
    })
  }

  initializeItems(): void {
    this.anms = this.anmsLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.anms = this.anms.filter((v) => {
      if (v.Name && q) {
        if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }


  addToArr(a) {
    switch (a.Checked) {
      case true: this.selArray.push(a.key);
        break;
      case false: this.rmFrmArray(a.key);
        break;
    }

  }

  rmFrmArray(key) {
    var ind = this.selArray.indexOf(key);
    this.selArray.splice(ind, 1)
  }



  delMulC() {
    let partnerView = this.modalCtrl.create(DelAnmPage, { delAnms: this.selArray }, { enableBackdropDismiss: false });
    partnerView.present();
  }



  gtSchooolDetails(s) {
    firebase.database().ref("Subs/Schools").child(s.School).once("value", itemSnap => {
      this.selSchool = itemSnap.val();
      this.selSchool.key = itemSnap.key;
      var severeRef = firebase.database().ref("Counters/Schools").child(itemSnap.key).child("Severity");
      severeRef.child("Severely Anaemic").once("value",svereSnap=>{this.selSchool.Severe = svereSnap.numChildren();})
      severeRef.child("Moderately Anaemic").once("value",svereSnap=>{this.selSchool.Moderate = svereSnap.numChildren();})
      severeRef.child("Mildly  Anaemic").once("value",svereSnap=>{this.selSchool.Mildly = svereSnap.numChildren();})
      severeRef.child("Healthy").once("value",svereSnap=>{this.selSchool.Healthy = svereSnap.numChildren();})

    }).then(() => {
      this.navCtrl.push(SchoolDetailsPage, { school: this.selSchool })
    })
  }



  gtAnmDetails(a) {
    this.navCtrl.push(AnmDetailsPage, { anm: a });
  }



  gtAddANM() {
    this.navCtrl.push(AddAmnsPage);
  }

  exporti() {
    let newArea = this.anms;
    newArea.forEach(snip => {
      delete snip.key;
      
      // snip.Schools.forEach(sn=>{
      //   console.log(sn.SchoolName)
      // })
    })
    let sheet = XLSX.utils.json_to_sheet(newArea);
    let wb = {
      SheetNames: ["export"],
      Sheets: {
        "export": sheet
      }
    };
  
    let wbout = XLSX.write(wb, {
      bookType: 'xlsx',
      bookSST: false,
      type: 'binary'
    });
  
    function s2ab(s) {
      let buf = new ArrayBuffer(s.length);
      let view = new Uint8Array(buf);
      for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
      return buf;
    }
  
    let blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    let self = this;
    saveAs(blob, this.pgName + '.xlsx');
  
  }
  


}
