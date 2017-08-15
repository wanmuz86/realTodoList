import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddListPage } from '../add-list/add-list'
import { ItemDetailPage } from '../item-detail/item-detail'
import { ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';
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

itemList = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
  	public dataService: DataProvider,public alertCtrl: AlertController) {
  	this.dataService.getData().then((todos)=>
  	{
  		if (todos){
  		this.itemList = JSON.parse(todos);
  	}
  	}
  	)

  	  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }
  buttonTapped(){
  	let modal = this.modalCtrl.create(AddListPage);
  	modal.onDidDismiss(data => {
     
     this.itemList.push(data);
     this.dataService.saveData(this.itemList);
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
    let confirm = this.alertCtrl.create({
      title: 'Delete item?',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Nope',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Delete it!',
          handler: () => {
            this.dataService.deleteData(item,(todos)=>{
              this.itemList= todos
            })
          }
        }
      ]
    });
    confirm.present();
  }
 	//this.itemList.splice(this.itemList.indexOf(item),1)
  }


