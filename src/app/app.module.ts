import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/Extra/dashboard/dashboard';
import { LoginPage } from '../pages/Extra/login/login';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { ViewMandalsPage } from '../pages/Subs/Mandals/view-mandals/view-mandals';
import { AddMandalsPage } from '../pages/Subs/Mandals/add-mandals/add-mandals';
import { ViewVillagesPage } from '../pages/Subs/Villages/view-villages/view-villages';
import { AddVillagesPage } from '../pages/Subs/Villages/add-villages/add-villages';
import { ViewSchoolsPage } from '../pages/Subs/Schools/view-schools/view-schools';
import { AddSchoolsPage } from '../pages/Subs/Schools/add-schools/add-schools';
import { ViewAmnsPage } from '../pages/Subs/Anms/view-amns/view-amns';
import { AddAmnsPage } from '../pages/Subs/Anms/add-amns/add-amns';
import { MandalDetailsPage } from '../pages/Subs/Mandals/mandal-details/mandal-details';
import { SchoolDetailsPage } from '../pages/Subs/Schools/school-details/school-details';
import { VillageDetailsPage } from '../pages/Subs/Villages/village-details/village-details';
import { StudentsPage } from '../pages/Students/students/students';
import { StudentDetailsPage } from '../pages/Students/student-details/student-details';
import { AnmDetailsPage } from '../pages/Subs/Anms/anm-details/anm-details';
import { AssignSchoolPage } from '../pages/Subs/Anms/assign-school/assign-school';
import { ChartsModule } from 'ng2-charts';
import { DelAnmPage } from '../pages/Subs/Anms/del-anm/del-anm';
import { EditAnmPage } from '../pages/Subs/Anms/edit-anm/edit-anm';
import {File} from '@ionic-native/file';
import { DataUploadPage } from '../pages/data-upload/data-upload';
import { DeleteStudentsPage } from '../pages/Students/delete-students/delete-students';
import { EditStudentPage } from '../pages/Students/edit-student/edit-student';


export const firebaseCred = {
  apiKey: "AIzaSyD_YDbb3sjzzqVc-N1cWBbWi9lJKYImzkQ",
  authDomain: "samatha-app.firebaseapp.com",
  databaseURL: "https://samatha-app.firebaseio.com",
  projectId: "samatha-app",
  storageBucket: "samatha-app.appspot.com",
  messagingSenderId: "1080627282737"
};
firebase.initializeApp(firebaseCred);




@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    LoginPage,
    ViewMandalsPage,
    AddMandalsPage,
    ViewVillagesPage,
    AddVillagesPage,
    ViewSchoolsPage,
    AddSchoolsPage,
    ViewAmnsPage,
    AddAmnsPage,
    AnmDetailsPage,
    MandalDetailsPage,
    SchoolDetailsPage,
    VillageDetailsPage,
    StudentsPage,
    StudentDetailsPage,
    AssignSchoolPage,
    DelAnmPage,
    EditAnmPage,
    DataUploadPage,
    DeleteStudentsPage,
    EditStudentPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ChartsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    LoginPage,
    ViewMandalsPage,
    AddMandalsPage,
    ViewVillagesPage,
    AddVillagesPage,
    ViewSchoolsPage,
    AddSchoolsPage,
    ViewAmnsPage,
    AddAmnsPage,
    AnmDetailsPage,
    MandalDetailsPage,
    SchoolDetailsPage,
    VillageDetailsPage,
    StudentsPage,
    StudentDetailsPage,
    AssignSchoolPage,
    DelAnmPage,
    EditAnmPage,
    DataUploadPage,
    DeleteStudentsPage,
    EditStudentPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
  ]
})
export class AppModule {}
