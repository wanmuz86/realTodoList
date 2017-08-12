import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddListPage } from '../add-list/add-list'
import { ItemDetailPage } from '../item-detail/item-detail'
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the ItemListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {

itemList = [{"title":"Learn Ionic","description":"Learn Ionic slide 12345","completed":false},
{"title":"Do FreeCodeCamp","description":"Until front end module","completed":false},
{"title":"Do WOD","description":"do all WOD 1 - 15","completed":false}]
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }
  buttonTapped(){
  	let modal = this.modalCtrl.create(AddListPage);
  	modal.onDidDismiss(data => {
     console.log(data);
     this.itemList.push(data)
   });
    modal.present();
  }
  detailTapped(item){
  	this.navCtrl.push(ItemDetailPage,{item:item});
  }
  done(item){
  	item.completed=true
  }

  delete(item){
 	this.itemList.splice(this.itemList.indexOf(item),1)
  }
}
