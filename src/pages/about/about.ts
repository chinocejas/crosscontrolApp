import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import  {ServiceProvider} from '../../providers/service-provider';
import { Insert } from '../insert/insert';
import { Detail } from '../detail/detail';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	public title = 'Box';
  insertPage = Insert;
  warmth: number = 100;

  constructor(
    public navCtrl: NavController,
    public service:ServiceProvider,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
  	
  }

  
 
  
  showAlert(men)
  {
    let alert= this.alertCtrl.create(
    {
        title:'Informacion',
        subTitle: men,
        buttons:['OK']
    });
    alert.present();
      
    
  }


}
