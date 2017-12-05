import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
	/*Creando Api donde esta creada la DB*/
	//api:string ='http://localhost/appmarket-api/'
	api:string ='https://srpta.000webhostapp.com/api/'

  constructor(public http: Http) {
    
  }
	getData(){
		return this.http.get(this.api+'listado.php').map(res=>res.json())
	}

	dataRegister(parans){
		let headers=new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		return this.http.post(this.api+"insert.php", parans, 
							{
								headers: headers,
								method:"POST"	

							}).map(
							(res:Response) =>{return res.json();});
		};

	actualizarProducto(data){
		let headers=new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		return this.http.post(this.api+"update.php", data, 
							{
								headers: headers,
								method:"POST"	

							}).map(
							(res:Response) =>{return res.json();});
		}
}
