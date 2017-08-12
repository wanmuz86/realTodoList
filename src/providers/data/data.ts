import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor( public storage: Storage) {
    console.log('Hello DataProvider Provider');
  }
 getData(){
 	return this.storage.get('todos')
 }
 saveData(data){
 	let newData=JSON.stringify(	data)
 	this.storage.set('todos',newData)
 }
}
