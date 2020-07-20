import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { NgxSpinnerService } from "ngx-spinner"; 

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  @ViewChild('employeeForm') public loginForm : NgForm;
  hide = true;
  errortext ="Username or Password is invalid";
  error = false;
  constructor(private router: Router,private Auth : AuthService,private SpinnerService: NgxSpinnerService) { }

  ngOnInit() {
  }
  loginUser = new  FormGroup(
    {
      useremail :new FormControl('',Validators.required,),
      password : new FormControl('',Validators.required),
    }
  );
  onLogin(){
    this.SpinnerService.show(); 
   // window.alert("Login was clicked");
    if(this.loginUser.value.useremail == 'priyanka@123' && this.loginUser.value.password == 'test'){
      this.router.navigate(['cards']);
      this.Auth.setLoggedIn(true);
     }else {
       this.loginUser.markAllAsTouched();
       this.error=true;
       //alert(error.value);
       //swal('Username or Password is incorrect');
     }
     setTimeout(()=>{
      this.SpinnerService.hide()
    },2000)
  }
  onRegister(){
    this.SpinnerService.show(); 
    //window.alert("Register was clicked");
    this.router.navigate(["register"]);
    setTimeout(()=>{
      this.SpinnerService.hide()
    },2000); 
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.loginUser.controls[controlName].hasError(errorName);
  }
}
