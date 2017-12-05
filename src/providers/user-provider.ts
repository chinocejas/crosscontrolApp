import {Injectable } from '@angular/core';
import {Http, Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';

@Injectable()
export class UserService{
    public url:string;
    public identity;
    public token;

    constructor(private _http:Http){
       this.url= GLOBAL.url;

    }

    signUp(user_to_login, gethash = null ){
        if(gethash !=null){
            user_to_login.gethash =gethash;
        }
        let json = JSON.stringify(user_to_login);
      
        let params= json;
        let headers = new Headers({
            'Content-Type':'application/json'
        });
        return this._http.post(this.url+'login',params,{headers:headers}).map(res=> res.json());
    }
   
    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));
        if(identity != "undefined"){
            this.identity = identity;

        }else{
            this.identity = null;
        }
        return this.identity;
    }

    getToken(){
        let token = localStorage.getItem('token');
        if(token != "undefined"){
            this.token = token;

        }else{
            this.token = null;
        }
        return this.token;

    }

    register(user_to_register){
        let json = JSON.stringify(user_to_register);
        let params= json;
        let headers = new Headers({
            'Content-Type':'application/json'
        });
        return this._http.post(this.url+'register',params,{headers:headers}).map(res=> res.json());


    }

    updateUser(userUpdate){
        let userId = userUpdate._id;
        let json = JSON.stringify(userUpdate);
        let params= json;
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization':this.token
        });

        return this._http.put(this.url+'/update-user/'+userId,params,{headers:headers}).map(res=>res.json());
    }

    // Servicio Ejercicios

    getExercises(userId){
        let headers = new Headers({
            'Authorization': this.token
        });

        return this._http.get(this.url+'get-exercises/'+userId,{headers:headers}).map(res=>res.json());
    }

    newExercise(newExercise, userId){
        let json = JSON.stringify(newExercise);
        let params = json;
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization':this.token
        });
        return this._http.post(this.url+'register-exercise/'+userId,params,{headers:headers}).map(res=>res.json());
    }
   
    editExercise(editExercise){
        let idExercise = editExercise._id;
        let json = JSON.stringify(editExercise);
        let params = json;
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization':this.token
        });
        return this._http.put(this.url+'/update-exercise/'+idExercise, params, {headers:headers}).map(res=> res.json());
    }

    deleteExercise(deleteExercise){
        let idExercise = deleteExercise._id;
        
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization':this.token
        });
        return this._http.delete(this.url+'/delete-exercise/'+idExercise,{headers:headers}).map(res=>res.json());

        
    }

}