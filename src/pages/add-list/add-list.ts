import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the AddListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-list',
  templateUrl: 'add-list.html',
})
export class AddListPage {
	title;
	description;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddListPage');
  }
closeTapped(){
	this.view.dismiss();
}
saveItem(){
	let newItem = {"title":this.title, "description":this.description, completed:false}
	this.view.dismiss(newItem);
}


}
