import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { persons } from './persons';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, from } from 'rxjs';
import {Location} from '@angular/common'

const ELEMENT_DATA : persons[] = [
//   {firstname: 'Priyanka', lastname: 'Mohanty', useremail :'abc@tcs.com',password : 'sdhgdhj',genderRadioButton:'male',plan:'gold'},
//  {firstname: 'Sayantan', lastname: 'Das', useremail :'abcf@tcs.com',password : 'sdhgdhj',genderRadioButton:'male',plan:'gold'}

];


interface Plans {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})


export class RegisterUserComponent implements OnInit {
 
  displayedColumns: string[] = ['firstname', 'lastname', 'useremail', 'password', 'genderRadioButton', 'plan'];
  dataSource = new MatTableDataSource<persons>(ELEMENT_DATA);
  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  //dataSource: MatTableDataSource<persons>;
  // users: persons[] = [
  //   // {firstname: 'Priyanka', lastname: 'Mohanty',useremail: 'H',password :'P',genderRadioButton:'Female',plan:'Gold'},
  //   // {firstname: 'Sayantan', lastname: 'Das',useremail: 'H',password :'P',genderRadioButton:'Female',plan:'Gold'},
  //   // {firstname: 'Anjana', lastname: 'Mohanty',useremail: 'H',password :'P',genderRadioButton:'Female',plan:'Gold'},
    
  // ];
  // account_validation_messages = {
  //   'username': [
  //     { type: 'required', message: 'Username is required' },
  //     { type: 'minlength', message: 'Username must be at least 5 characters long' },
  //     { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
  //     { type: 'pattern', message: 'Your username must contain only numbers and letters' },
  //     { type: 'validUsername', message: 'Your username has already been taken' }
  //   ],
  //   'email': [
  //     { type: 'required', message: 'Email is required' },
  //     { type: 'pattern', message: 'Enter a valid email' }
  //   ],
  //   'confirm_password': [
  //     { type: 'required', message: 'Confirm password is required' },
  //     { type: 'areEqual', message: 'Password mismatch' }
  //   ],
  //   'password': [
  //     { type: 'required', message: 'Password is required' },
  //     { type: 'minlength', message: 'Password must be at least 5 characters long' },
  //     { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
  //   ],
  //   'terms': [
  //     { type: 'pattern', message: 'You must accept terms and conditions' }
  //   ]
  //   };
  plan: Plans[] = [
    {value: 'plan1', viewValue: 'Silver'},
    {value: 'plan2', viewValue: 'Gold'},
    {value: 'plan3', viewValue: 'Platinum'}
  ];
  gender: string[] = ['Male', 'Female', 'Others'];
  hide = true;
  //location: any;
  //tabledataSource;

 
  constructor(private location: Location,private ref: ChangeDetectorRef,private dialog : MatDialogModule) { 
    
    // const users: persons[] = [];
    
    //   users.push(dataSource); 
    
    // this.dataSource = new MatTableDataSource(users);
   
  }

  ngOnInit() {
    //this.tabledataSource = new MatTableDataSource<Element>(this.users);
  }
  
  registerUser = new  FormGroup(
    {
      firstname : new FormControl('',[Validators.required,,Validators.maxLength(10)]),
      lastname : new FormControl('',Validators.required),
      useremail :new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password : new FormControl('',[Validators.required]),
      genderRadioButton : new FormControl(),
      dateOfBirth: new FormControl(new Date()),
      plan : new FormControl(),
     
      
    }
  );

  public hasError = (controlName: string, errorName: string) =>{
    return this.registerUser.controls[controlName].hasError(errorName);
  }
  public onCancel = () => {
    this.location.back();
  }
  onSubmit()
  {

    ELEMENT_DATA.push(this.registerUser.value);
   //  this.dataSource.filter = "";
    // this.dataSource.data.push(ELEMENT_DATA());
    //   console.log(ELEMENT_DATA);
    //   //alert("Values received");
    //  let firstname = this.registerUser.value.firstname;
    //  alert('firstname-------> '+firstname+" "+'Password-------> '+this.registerUser.value.password);
     
    //  setInterval(() => {
    //   // require view to be updated
    //   this.ref.markForCheck();

    //   console.log(this.dataSource);
    // }, 1000);
    
    // ELEMENT_DATA.push(this.employee)
    this.dataSource = new MatTableDataSource<persons>(ELEMENT_DATA);
    

      //console.warn("Ehe array is : "+this.users.toString);
      //alert(this.users);
  }

  // logThis(data) {
  //   console.log(data);
  // }
 
 
  //dataSource = users;
 
}

