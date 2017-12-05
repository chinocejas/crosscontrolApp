import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import  {ServiceProvider} from '../../providers/service-provider';
import { TabsPage } from '../../pages/tabs/tabs';
import  {UserService} from '../../providers/user-provider';
import { User } from '../../models/user';
import { Exercise } from '../../models/exercise';
import {ContactPage} from '../contact/contact';
import { HomePage} from '../home/home';


/**
 * Generated class for the Insert page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-insert',
	templateUrl: 'insert.html',
	providers:[UserService]
})
export class Insert {
	public user: User;
  public identity;
  public token;
	public newExercise;
	constructor(
		public navCtrl: NavController, 
		public NavParams:NavParams, 
		public service:ServiceProvider, 
		public alertCtrl: AlertController,
		public _userServices:UserService) {
			this.newExercise=new Exercise('','',null,0,'',this.user);
  }

  ionViewDidLoad() {
    this.identity = this._userServices.getIdentity();
		this.token = this._userServices.getToken();
		this.user = this.identity;
     
	}

	onSubmit(){
		//console.log(this.newExercise);
		this._userServices.newExercise(this.newExercise,this.identity._id).subscribe(
			data=>{
				this.showAlert(data.mensaje);
				this.navCtrl.setRoot(ContactPage);
				
			},
			err=>{
				this.showAlert(err);
				//console.log(err)
			}
		);
	}
	
	nuevoEjercicio(req){
		this.newExercise.name = req.name;
		this.newExercise.description = req.description;
		this.newExercise.rm = req.rm;
		this.newExercise.medida = req.medida;
		console.log(this.newExercise);

		this._userServices.newExercise(req,this.user._id).subscribe(
			data=>{
				this.showAlert('Ejercico agregado');
				this.navCtrl.setRoot(TabsPage);
				//console.log(data.mensaje)
			},
			err=>{
				console.log(err)
			}
		);
	}

  envioDato(req){
  	this.service.dataRegister(req.value).subscribe(
  			data=> {
  				this.showAlert(data.mensaje);
  				this.navCtrl.setRoot(TabsPage);
  				console.log(data.mensaje)

  			},
  			err=> console.log(err)
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
