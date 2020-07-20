import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LoggedInStatus =JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http : HttpClientModule) { }

 
  setLoggedIn(value : boolean){
    this.LoggedInStatus = value;
    localStorage.setItem('loggedIn', this.LoggedInStatus);
  }

  get isLoggedIn(){
  
    return JSON.parse(localStorage.getItem('loggedIn') || this.LoggedInStatus.toString());
    //this.LoggedInStatus;
  }
 
}
