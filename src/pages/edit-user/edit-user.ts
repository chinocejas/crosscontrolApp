import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import {UserService} from '../../providers/user-provider';
import { Exercise } from '../../models/exercise';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditUser page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUser {
  public identity;
  public token;
  public errorMessage;
  public user:User;
  constructor(
    public navCtrl: NavController, 
    public _userServices:UserService, 
    public alertCtrl: AlertController, 
    public navParams: NavParams
  ) {
    this.user = navParams.get('userEdit');
    console.log(this.user);
  }

  ionViewDidLoad() {
    this.identity = this._userServices.getIdentity();
    this.token = this._userServices.getToken();
    
    console.log(this.identity);
    console.log(this.token);
  }

  onSubmit(){
    this._userServices.updateUser(this.user).subscribe(
      data=>{
        this.showAlert('Se ha modificado correctamente');
        this.user = this._userServices.getIdentity();
        console.log(this.user);
				this.navCtrl.setRoot(HomePage);
				
			},
			err=>{
				this.showAlert(err);
				//console.log(err)
			}
    );
  }

  public logOut(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity=null;
    this.token=null;
    this.navCtrl.push(HomePage);
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
