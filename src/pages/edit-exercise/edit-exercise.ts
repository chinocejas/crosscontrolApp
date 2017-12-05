import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import  {UserService} from '../../providers/user-provider';
import { User } from '../../models/user';

import { HomePage } from '../../pages/home/home'; 
import { Exercise } from '../../models/exercise';
import {ContactPage} from '../contact/contact';

/**
 * Generated class for the EditExercise page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-exercise',
  templateUrl: 'edit-exercise.html',
})
export class EditExercise {
  public editExercise: Exercise;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _userServices:UserService,
    public alertCtrl: AlertController
  ) {
    this.editExercise = navParams.get('exercise');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditExercise');
  }

  onSubmit(){
    console.log(this.editExercise);
    this._userServices.editExercise(this.editExercise).subscribe(
			data=>{
				this.showAlert('Se ha modificado correctamente');
				this.navCtrl.setRoot(ContactPage);
				
			},
			err=>{
				this.showAlert(err);
				//console.log(err)
			}
		);
		
  }
  showAlert(men){
  	let alert =this.alertCtrl.create(
  			{title:'Información',
  			subTitle:men,
  			buttons:['OK']}

  			);
  	alert.present();
  }

}
