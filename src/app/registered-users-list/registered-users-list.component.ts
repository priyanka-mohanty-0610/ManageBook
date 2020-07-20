import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../user.service';
import {MatPaginator} from '@angular/material/paginator';


export interface User {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  //url : string;
  imageurl : string;
}
@Component({
  selector: 'app-registered-users-list',
  templateUrl: './registered-users-list.component.html',
  styleUrls: ['./registered-users-list.component.css']
})
export class RegisteredUsersListComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'gender'];
  dataSource: MatTableDataSource<User>;
  //user;

  users: User[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  //@ViewChild(MatSort) sort: MatSort;
  constructor ( private userService: UserService) { 
   
  }
//  arrBirds: string [];
  //constructor() { }

  ngOnInit() {

 
    this.userService.getUsers()
    .subscribe((users: User[]) => {
      this.users = users;
      this.dataSource = new MatTableDataSource(users);

       
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      //this.dataSource.sort = this.sort;
    // this.httpService.get('./assets/testresult.json').subscribe(
    //   data => {
    //     this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
    //     //  console.log(this.arrBirds[1]);
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log (err.message);
    //   }
    // );

 });

}
}
