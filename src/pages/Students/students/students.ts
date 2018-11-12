import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import * as _ from 'lodash';
import * as XLSX from 'xlsx';
import * as saveAs from 'file-saver';
import { StudentDetailsPage } from '../../Students/student-details/student-details';
import { SchoolDetailsPage } from '../../Subs/Schools/school-details/school-details';
import { MandalDetailsPage } from '../../Subs/Mandals/mandal-details/mandal-details';
import { VillageDetailsPage } from '../../Subs/Villages/village-details/village-details';
import { AnmDetailsPage } from '../../Subs/Anms/anm-details/anm-details';
import { DeleteStudentsPage } from '../../Students/delete-students/delete-students';
import { EditStudentPage } from '../../Students/edit-student/edit-student';


@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {
  pageName = "Students";
  districtSel = "Wanaparthy";

  students: Array<any> = [];
  filteredStudents: Array<any> = [];

  mandals: Array<any> = [];
  villages: Array<any> = [];
  schools: Array<any> = [];

  mandalSel = "all";
  villageSel = "all";
  schoolSel = "all";

  casteSel: string = "all";
  anL: string = "all";
  age: string = "all";
  clSel: string = 'all';

  totAnms: number = 0;
  filters = {}
  selArray: Array<any> = [];

  //nums
  totSev: number = 0;
  totMod: number = 0;
  totMild: number = 0;
  totHeal: number = 0;
  totSC: number = 0;
  totST: number = 0;
  totBC: number = 0;
  totOC: number = 0;
  totMin: number = 0;
  totSch: number = 0;

  primaryStudents = this.db.list('Organisms/Students', ref => ref.orderByChild("StudentName"));
  primaryVillages = this.db.list("Subs/Villages", ref => ref.orderByChild("Name"))

  constructor(
    public navCtrl: NavController,
    private db: AngularFireDatabase,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private menuCtrl: MenuController,
  ) {
    this.menuCtrl.enable(true);
    this.gtAnms();
    this.getMandals();
    this.getVillages();
    this.getSchools();
  }
  ngOnInit() {
    this.getStudents();
  }
  getStudents(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.students = [];
    this.primaryStudents.snapshotChanges()
      .subscribe(itemSnap => {
        itemSnap.forEach(snip => {
          let temp: any = snip.payload.val();
          temp.key = snip.key;
          this.students.push(temp)
        })

        this.applyFilters()
      })
    this.getMandals();
    this.getVillages();
    this.getSchools();
    loading.dismiss()
  }

  private applyFilters() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.filteredStudents = _.filter(this.students, _.conforms(this.filters))
    this.allNumsZero();
    this.filteredStudents.forEach(temp => {
      switch (temp.Severity) {
        case 'Severely Anaemic': temp.colori = "s"; this.totSev = this.totSev + 1;
          break;
        case 'Moderately Anaemic': temp.colori = "mo"; this.totMod = this.totMod + 1;
          break;
        case 'Mildly  Anaemic': temp.colori = "mi"; this.totMild = this.totMild + 1;
          break;
        case 'Healthy': temp.colori = "h"; this.totHeal = this.totHeal + 1;
          break;
      }
      switch (temp.Community) {
        case "SC": this.totSC = this.totSC + 1;
          break;
        case "ST": this.totST = this.totST + 1;
          break;
        case "BC": this.totBC = this.totBC + 1;
          break;
        case "OC": this.totOC = this.totOC + 1;
          break;
        case "Minority": this.totMin = this.totMin + 1;
          break;
      }

      firebase.database().ref("Subs/Schools").child(temp.Schools).once("value", s => {
        temp.SchoolName = s.val().Name;
      })
      firebase.database().ref("Subs/Villages").child(temp.Village).once("value", s => {
        temp.VillageName = s.val().Name;
      })
      firebase.database().ref("Subs/Mandals").child(temp.Mandal).once("value", s => {
        temp.MandalName = s.val().Name;
      })
      firebase.database().ref("Organisms/Anms").child(temp.ANM).once("value", s => {
        temp.ANMName = s.val().Name;
      }).then(()=>{
        loading.dismiss()
      })

    })


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
    let partnerView = this.modalCtrl.create(DeleteStudentsPage, { delAnms: this.selArray }, { enableBackdropDismiss: false });
    partnerView.present();
  }


  /// filter property by equality to rule
  filterExact(property: string, rule: any) {
    if (rule == "all") this.removeFilter(property)
    else {
      this.filters[property] = val => val == rule
      this.applyFilters()
    }
  }
  editStudent(a){
    // console.log(a);
    this.navCtrl.push(EditStudentPage,{Student : a})
  }
  allNumsZero() {
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

  }

  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }

  getMandals() {
    this.db.list("Subs/Mandals", ref => ref.orderByChild("Name"))
      .snapshotChanges().subscribe(itemSnap => {
        this.mandals = [];
        itemSnap.forEach(item => {
          var temp: any = item.payload.val();
          temp.key = item.key;
          this.mandals.push(temp);
        })
      })
  }
  getVillages() {
    this.primaryVillages.snapshotChanges().subscribe(itemSnap => {
      this.villages = [];
      itemSnap.forEach(item => {
        var temp: any = item.payload.val();
        temp.key = item.key;
        this.villages.push(temp);
      })
    })
  }

  getSchools() {
    this.db.list("Subs/Schools", ref => ref.orderByChild("Name"))
      .snapshotChanges().subscribe(itemSnap => {
        this.schools = [];
        itemSnap.forEach(item => {
          var temp: any = item.payload.val();
          temp.key = item.key;
          this.schools.push(temp);
        })
      })
  }

  checkMandal() {
    if (this.mandalSel == "all") {
      this.getMandals();
      this.getVillages();
      this.getSchools();
      this.getStudents();
      this.villageSel = "all";
      this.schoolSel = "all";
    } else {
      this.villageSel = "all";
      this.schoolSel = "all";
      this.manWiseVills();
      this.getMandalwiseStudents(this.mandalSel);
    }
  }

  manWiseVills() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.db.list(`SubsIndex/Mandals/${this.mandalSel}/Villages`, ref => ref.orderByChild("Name"))
      .snapshotChanges().subscribe(itemSnap => {
        this.villages = [];
        itemSnap.forEach(item => {
          firebase.database().ref("Subs/Villages/").child(item.key).orderByChild("Name").once("value", iSnap => {
            var temp: any = iSnap.val();
            temp.key = iSnap.key;
            this.villages.push(temp);
          }).then(() => {

            this.db.list(`SubsIndex/Mandals/${this.mandalSel}/Schools`, ref => ref.orderByChild("Name"))
              .snapshotChanges().subscribe(itemSnap => {
                this.schools = [];
                itemSnap.forEach(item => {
                  firebase.database().ref("Subs/Schools/").child(item.key).orderByChild("Name").once("value", iSnap => {
                    var temp: any = iSnap.val();
                    temp.key = iSnap.val();
                    this.schools.push(temp);
                  }).then(() => {
                    loading.dismiss();
                  })
                })
              })


          })
        })
      })
  }


  checkVillage() {

    if (this.villageSel == "all") {
      this.getVillages();
      this.getSchools();
      this.getStudents();
      this.schoolSel = "all";
    } else {
      this.schoolSel = "all";
      this.villWiseVills();
      this.getVillagewiseStudents(this.villageSel);
    }
  }
  villWiseVills() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });


    this.db.list(`SubsIndex/Villages/${this.villageSel}/Schools`, ref => ref.orderByChild("Name"))
      .snapshotChanges().subscribe(itemSnap => {
        this.schools = [];
        itemSnap.forEach(item => {
          firebase.database().ref("Subs/Schools/").child(item.key).orderByChild("Name").once("value", iSnap => {
            var temp: any = iSnap.val();
            temp.key = iSnap.val();
            this.schools.push(temp);
          }).then(() => {
            loading.dismiss();
          })
        })
      })


  }

  gtAnms() {
    this.db.list("Organisms/Anms").snapshotChanges().subscribe(snap => {
      this.totAnms = snap.length;
    })
  }
  exporti() {
    let newArea = this.students;
    newArea.forEach(snip => {
      delete snip.key;
      delete snip.ANM;
      delete snip.Mandal;
      delete snip.Village;
      delete snip.Schools;
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
    saveAs(blob, this.pageName + '.xlsx');

  }
  gtStudentDetails(a) {
    this.navCtrl.push(StudentDetailsPage, { student: a })
  }

  getMandalwiseStudents(mand){
    var severeRef = firebase.database().ref("Counters/Mandals").child(mand).child("Severity");
    this.students = [];
    severeRef.child("Severely Anaemic").once("value",svereSnap=>{svereSnap.forEach(ssp=>{
        firebase.database().ref("Organisms/Students").child(ssp.key).once("value",itemSnap=>{ let temp : any= itemSnap.val();temp.key = itemSnap.key; this.students.push(temp)    ;})})}).then(()=>{
    severeRef.child("Moderately Anaemic").once("value",svereSnap=>{svereSnap.forEach(ssp=>{
      firebase.database().ref("Organisms/Students").child(ssp.key).once("value",itemSnap=>{  let temp : any= itemSnap.val();temp.key = itemSnap.key; this.students.push(temp)     ;})})}).then(()=>{
        severeRef.child("Mildly  Anaemic").once("value",svereSnap=>{svereSnap.forEach(ssp=>{
          firebase.database().ref("Organisms/Students").child(ssp.key).once("value",itemSnap=>{let temp : any= itemSnap.val();temp.key = itemSnap.key; this.students.push(temp) ;})})}).then(()=>{
            severeRef.child("Healthy").once("value",svereSnap=>{svereSnap.forEach(ssp=>{
              firebase.database().ref("Organisms/Students").child(ssp.key).once("value",itemSnap=>{let temp : any= itemSnap.val();temp.key = itemSnap.key; this.students.push(temp) ;})})}).then(()=>{
                this.applyFilters();
    })})})})
  }

  getVillagewiseStudents(mand){
    var severeRef = firebase.database().ref("Counters/Villages").child(mand).child("Severity");
    this.students = [];
    severeRef.child("Severely Anaemic").once("value",svereSnap=>{svereSnap.forEach(ssp=>{
        firebase.database().ref("Organisms/Students").child(ssp.key).once("value",itemSnap=>{ let temp : any= itemSnap.val();temp.key = itemSnap.key; this.students.push(temp)    ;})})}).then(()=>{
    severeRef.child("Moderately Anaemic").once("value",svereSnap=>{svereSnap.forEach(ssp=>{
      firebase.database().ref("Organisms/Students").child(ssp.key).once("value",itemSnap=>{  let temp : any= itemSnap.val();temp.key = itemSnap.key; this.students.push(temp)     ;})})}).then(()=>{
        severeRef.child("Mildly  Anaemic").once("value",svereSnap=>{svereSnap.forEach(ssp=>{
          firebase.database().ref("Organisms/Students").child(ssp.key).once("value",itemSnap=>{let temp : any= itemSnap.val();temp.key = itemSnap.key; this.students.push(temp) ;})})}).then(()=>{
            severeRef.child("Healthy").once("value",svereSnap=>{svereSnap.forEach(ssp=>{
              firebase.database().ref("Organisms/Students").child(ssp.key).once("value",itemSnap=>{let temp : any= itemSnap.val();temp.key = itemSnap.key; this.students.push(temp) ;})})}).then(()=>{
                this.applyFilters();
    })})})})
  }
  checkSchool(){
    if (this.schoolSel == "all") {
      this.getSchools();
      this.getStudents();
    } else {
      this.getVillagewiseStudents(this.schoolSel);
    }

  }
  getSchoolwiseStudents(mand){
    var severeRef = firebase.database().ref("SubsIndex/Schools").child(mand).child("Students");
    this.students = [];
    severeRef.once("value",svereSnap=>{svereSnap.forEach(ssp=>{
        firebase.database().ref("Organisms/Students").child(ssp.key).once("value",itemSnap=>{ let temp : any= itemSnap.val();temp.key = itemSnap.key; this.students.push(temp)    ;})})}).then(()=>{
          this.applyFilters();
        })
  }



  gtSchoolDetails(a){
    let schho : any;
    firebase.database().ref("Subs/Schools").child(a.Schools).once("value",itemSnap=>{
      schho = itemSnap.val();
      schho.key = itemSnap.key;
      var severeRef = firebase.database().ref("Counters/Schools").child(schho.key).child("Severity");
      severeRef.child("Severely Anaemic").once("value",svereSnap=>{schho.Severe = svereSnap.numChildren();})
      severeRef.child("Moderately Anaemic").once("value",svereSnap=>{schho.Moderate = svereSnap.numChildren();})
      severeRef.child("Mildly  Anaemic").once("value",svereSnap=>{schho.Mildly = svereSnap.numChildren();})
      severeRef.child("Healthy").once("value",svereSnap=>{schho.Healthy = svereSnap.numChildren();})
  });
    this.navCtrl.push(SchoolDetailsPage,{school : schho});
  }
  gtMandalDetails(a){
    let schho : any;
    firebase.database().ref("Subs/Mandals").child(a.Mandal).once("value",itemSnap=>{
      schho = itemSnap.val();
      schho.key = itemSnap.key;
      var severeRef = firebase.database().ref("Counters/Mandals").child(schho.key).child("Severity");
      severeRef.child("Severely Anaemic").once("value",svereSnap=>{schho.Severe = svereSnap.numChildren();})
      severeRef.child("Moderately Anaemic").once("value",svereSnap=>{schho.Moderate = svereSnap.numChildren();})
      severeRef.child("Mildly  Anaemic").once("value",svereSnap=>{schho.Mildly = svereSnap.numChildren();})
      severeRef.child("Healthy").once("value",svereSnap=>{schho.Healthy = svereSnap.numChildren();})
  });
    this.navCtrl.push(MandalDetailsPage,{mandal : schho});
  }
  gtVillageDetails(a){
    let schho : any;
    firebase.database().ref("Subs/Villages").child(a.Village).once("value",itemSnap=>{
      schho = itemSnap.val();
      var severeRef = firebase.database().ref("Counters/Villages").child(a.Village).child("Severity");
      severeRef.child("Severely Anaemic").once("value",svereSnap=>{schho.Severe = svereSnap.numChildren();})
      severeRef.child("Moderately Anaemic").once("value",svereSnap=>{schho.Moderate = svereSnap.numChildren();})
      severeRef.child("Mildly  Anaemic").once("value",svereSnap=>{schho.Mildly = svereSnap.numChildren();})
      severeRef.child("Healthy").once("value",svereSnap=>{schho.Healthy = svereSnap.numChildren();})

      schho.key = itemSnap.key;
    });
    this.navCtrl.push(VillageDetailsPage,{village : schho});
  }
  gtANMDetails(a){
    let schho : any;
    firebase.database().ref("Organisms/Anms").child(a.ANM).once("value",itemSnap=>{
      schho = itemSnap.val();
      schho.key = itemSnap.key;
    });
    this.navCtrl.push(AnmDetailsPage,{ anm: schho});
  }
}