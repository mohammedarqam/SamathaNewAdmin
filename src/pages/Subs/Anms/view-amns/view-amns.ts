import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddAmnsPage } from '../add-amns/add-amns';



@IonicPage()
@Component({
  selector: 'page-view-amns',
  templateUrl: 'view-amns.html',
})
export class ViewAmnsPage {

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {

  }

  gtAddANM(){
    this.navCtrl.push(AddAmnsPage);
  }
}
