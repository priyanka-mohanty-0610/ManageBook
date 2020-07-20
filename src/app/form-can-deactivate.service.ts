import { Injectable } from '@angular/core';
import { CanDeactivate } from "@angular/router";
import { LoginUserComponent } from './login-user/login-user.component';

@Injectable({
  providedIn: 'root'
})
export class FormCanDeactivateService implements CanDeactivate<LoginUserComponent>{
 canDeactivate(component : LoginUserComponent) : boolean{
   if(component.loginForm.dirty && !component.loginForm.submitted ){
     return confirm('Are you sure you want to discard the changes ?');
   }
   return true;
 }
  constructor() { }
}
