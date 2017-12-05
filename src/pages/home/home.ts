import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';

import { Insert } from '../insert/insert';
import { Detail } from '../detail/detail';
import { User } from '../../models/user';
import {UserService} from '../../providers/user-provider';
import { Exercise } from '../../models/exercise';
import { EditUser } from '../edit-user/edit-user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[UserService]
})
export class HomePage {
	productos: any[];
  ejercicio_name: string = '';
  ejercicio_rm: string = '';
  insertPage = Insert;
  public user: User;
  public newExercise;
  public user_register: User;
  public identity;
  public token;
  public errorMessage;
  public alertRegister;
  public registrarUsuario = false;
  public userEdit:User;

  constructor(
    public navCtrl: NavController, 
    public _userServices:UserService, 
    public alertCtrl: AlertController, 
    public navParams: NavParams
  ){
    this.user = new User('','','','','','ROLE_USER','');
    this.user_register = new User('','','','','','ROLE_USER','');
    this.newExercise = new Exercise("","",null,0,"",this.identity);
  	
  }
  ngOnInit(){
    this.identity = this._userServices.getIdentity();
    this.token = this._userServices.getToken();
    this.userEdit = this.identity;
    console.log(this.identity);
    console.log(this.token);

    }

    ionViewDidLoad() {
      
    }
  public onSubmit(){
    console.log(this.user);
    //conseguir datos usuario identificado
    this._userServices.signUp(this.user).subscribe( 
     response => {
       let identity = response.user;
       this.identity = identity;
       if(!this.identity._id){
         alert("El usuario no se logueo correctamente")
       }else{
         //Crear elemento en Local Storage para tener al user en sesion
         localStorage.setItem('identity', JSON.stringify(identity));
         //conseguir token para enviar a cada peticion http

         this._userServices.signUp(this.user, 'true').subscribe( 
           response => {
             let token = response.token;
             this.token = token;
             if(this.token.length <= 0 ){
               alert("El token no se ha generado correctamente ")
             }else{
               //Crear elemento en Local Storage para tener token disponible
               localStorage.setItem('token', token);
               this.user = new User('','','','','','ROLE_USER','');
               this.userEdit = this.identity;
     
             }
           },
           error =>{
             var errorMessage =<any>error;
             if(errorMessage != null){
               var body= JSON.parse(error._body);
               this.errorMessage = body.message;
               this.user = new User('','','','','','ROLE_USER','');
               console.log(errorMessage);
             }
           }
          );

       }
     },
     error =>{
       var errorMessage =<any>error;
       if(errorMessage != null){
         var body= JSON.parse(error._body);
         this.errorMessage = body.message;
         console.log(errorMessage);
       }
     }
    );
  }
  public logOut(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity=null;
    this.token=null;
  }

  onSubmitRegister(){
   console.log(this.user_register);
   this._userServices.register(this.user_register).subscribe(
     response => {
       let user = response.user;
       this.user_register = user;
       if(!user._id){
         this.alertRegister = 'Error al registrarse';
       }else{
         this.alertRegister = 'El usuario se ha registrado Correctamente. Identificate como :  ' + this.user_register.email;
         this.showAlert('El Usuario se ha creado correctamente. Ingresa como: '+this.user_register.name);
         this.user_register = new User('','','','','','ROLE_USER','');
         this.formularioRegister();
       }
     },
     error =>{
       var errorMessage =<any>error;
       if(errorMessage != null){
         var body= JSON.parse(error._body);
         this.alertRegister = body.message;
         this.user_register = new User('','','','','','ROLE_USER','');
         console.log(errorMessage);
       }
     }
   );
}
   formularioRegister(){
     console.log(this.registrarUsuario);
     this.registrarUsuario = !this.registrarUsuario;
   }

   editUser(userEdit){
    this.navCtrl.push(EditUser,{userEdit});
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



