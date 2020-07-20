import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }
  registerMethod(){
    this.router.navigate(['register']);
    //alert("You are on the register Page ");
  }
  loginMethod(){
    this.router.navigate(['login']);
  //  alert("You are on the Login Page ");
  }
  listOfUsersMethod(){
    this.router.navigate(['userslist']);
  }
}
