import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  {UserService} from '../../providers/user-provider';
import { Insert } from '../insert/insert';
import { Detail } from '../detail/detail';
import { User } from '../../models/user';
import { Exercise } from '../../models/exercise';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers:[UserService]
})
export class ContactPage {
  exercises: Exercise[] = null;
  ejercicio_name: string = '';
  ejercicio_rm: string = '';
  insertPage = Insert;
  public user: User;
  public identity;
  public token;
  constructor(
    public navCtrl: NavController, 
    public _userServices:UserService, 
    ) {
      
  }
  ngOnInit(){
    this.identity = this._userServices.getIdentity();
    this.token = this._userServices.getToken();
    this.user = this.identity;
    console.log(this.identity);
    console.log(this.token);

    if(this.user){
      this.getAllExercise();
    }
    
      
    
    
    }

    doRefresh(refresher) {
      console.log('Begin async operation', refresher);
  
      setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
      }, 2000);
    }
    

    getAllExercise(){
      /*Va a traer toda la informacion a traves del metodo creado*/
      this._userServices.getExercises(this.user._id).subscribe(
  
        data=> {
          if(!data.exercises){
            console.log("Usted todavía no tiene ejercicios cargados");

          }else{
            this.exercises = data.exercises;
            console.log(this.exercises);
          }
          
        
        },
        err=> {console.log(err)}
        );
    }
    public detalleEjercicio(exercise) {
      
     this.navCtrl.push(Detail,{exercise});
    }

}
