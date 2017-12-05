import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import  {UserService} from '../../providers/user-provider';
import { EditExercise} from '../edit-exercise/edit-exercise'
import { HomePage } from '../../pages/home/home';
import { User } from '../../models/user';
import { Exercise } from '../../models/exercise';
import {ContactPage} from '../contact/contact'; 

/**
 * Generated class for the Detail page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class Detail {
  warmth: number = 100;
  public exercise;
  public user: User;
  public identity;
  public token;
	ejercicio_name: string = '';
  ejercicio_rm: string = '';
  porcentaje: number = 0;
	

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _userServices:UserService, 
    public alertCtrl: AlertController) {
   	//this.ejercicio_name = navParams.get('ejercicio_name'); 
    //this.ejercicio_rm = navParams.get('ejercicio_rm');
    this.exercise = navParams.get('exercise');
    //this.porcentaje= (parseInt(this.ejercicio_rm) / 100);
    this.porcentaje= this.exercise.rm / 100;
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad Detail');
   this.identity = this._userServices.getIdentity();
   this.token = this._userServices.getToken();
   this.user = this.identity;
  }
  actualizaPorcentaje(){
  	this.porcentaje= parseInt(this.ejercicio_rm) * (this.warmth / 100) ;
  }

  editaEjercicio(exercise){
    this.navCtrl.push(EditExercise,{exercise});
  }

 
  deleteEjercicio(exercise) {
    let alert = this.alertCtrl.create({
      title: 'Borrar ejercicio',
      message: 'Seguro que desea borrar este registro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this._userServices.deleteExercise(exercise).subscribe(
              data=>{
                this.showAlert('Se ha eliminado correctamente');
                this.navCtrl.setRoot(ContactPage);
                
              },
              err=>{
                this.showAlert(err);
                //console.log(err)
              }
            );
            
          }
        }
      ]
    });
    alert.present();
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
