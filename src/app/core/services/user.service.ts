import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RootObject } from '../models/user.interfacte';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private https:HttpClient) { }

  getUsers(){
    
    return this.https.get(`${environment.api}/users?per_page=6`).pipe(
      map( res => (<RootObject>res).data )
    );
  }

}
