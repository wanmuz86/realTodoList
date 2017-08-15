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
 deleteData(data,resolve){

 	this.storage.get('todos').then((todos)=>
  	{
  		if (todos){
  			var toDoArray = JSON.parse(todos)
  			console.log(toDoArray)
  			console.log(data)
  			toDoArray.splice(toDoArray.indexOf(data),1)
  			console.log(toDoArray)
  			var arrayData = JSON.stringify(toDoArray)

  			this.storage.set('todos',arrayData)
  			resolve(JSON.parse(arrayData))

  	}
  	}
  	)
}
}
