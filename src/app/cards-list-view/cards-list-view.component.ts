import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
//import { UserService } from '../user.service';
import {MatPaginator} from '@angular/material/paginator';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';
import { ConfirmationDialogService } from '../cards-list-view/confirmation-dialog/confirmation-dialog.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgxSpinnerService } from "ngx-spinner"; 
import {map} from 'rxjs/operators';

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  //url : string;
  imageurl : string;
}
//const DATA: User[] = [];
@Component({
  selector: 'app-cards-list-view',
  templateUrl: './cards-list-view.component.html',
  styleUrls: ['./cards-list-view.component.css']
})
export class CardsListViewComponent implements OnInit ,OnDestroy{
  dataSource: MatTableDataSource<User> | null;
  users: User[];
  searchText : string;
  noData ;
  notEmptyPost =true;
  notscrolly =true;
  lowerlimit = 0;upperlimit=8;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  obs: Observable<any>;
  

  constructor(private changeDetectorRef: ChangeDetectorRef,private userService: UserService,
  private confirmationDialogService: ConfirmationDialogService,private router : Router,private Auth : AuthService,
  private SpinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.SpinnerService.show(); 
    this.userService.getUsers()
    .subscribe((users: User[]) => {
      if(users.length-this.upperlimit>8){
      this.users = users.slice(this.lowerlimit,this.upperlimit);
      }else{
        this.users = users.slice(this.lowerlimit,(users.length-this.upperlimit));
      }
      this.dataSource = new MatTableDataSource(this.users);
        this.changeDetectorRef.detectChanges();
        //this.dataSource.paginator = this.paginator;
        this.obs = this.dataSource.connect();
        this.noData=this.dataSource.connect().pipe(map(data => data.length === 0));
        this.lowerlimit=this.upperlimit;
        this.upperlimit=this.upperlimit+8;
        console.log(this.lowerlimit+"  "+this.upperlimit);
        console.log("init"+this.users);
 });



console.warn(this.obs);
setTimeout(()=>{
  this.SpinnerService.hide()
},2000)
//this..hide(); 
  }
  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
  onClick(p1,p2){
    
if(p1=='like'){
  swal("You have liked "+p2);
}
else if(p1 =='comment'){
  swal("Comment functionality coming soon...");
}else{
  swal("The content has been shared successfully");
}
  }

  logout(){
    swal({
      title: "Are you sure you want to Logout?",
      //text: "Once deleted, you will not be able to recover this imaginary file!",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true     
    })
    .then((willDelete) => {

        if(willDelete.value){
             this.router.navigate(["login"]);
             this.Auth.setLoggedIn(false);
             //localStorage.removeItem('loggedIn');
             
        }

      console.log(willDelete);
    });
    // this.confirmationDialogService.confirm('Warning!', 'Are you sure you want to Logout ?')
    // .then((confirmed) => console.log('User confirmed:', confirmed))
    // .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
  onSearchClick(searchTerm){
    //alert(searchTerm);
    this.SpinnerService.show(); 
    if(searchTerm!=""){

//       this.userService.getUsers()
//     .subscribe((users: User[]) => {
//       // this.users = this.users.filter(users =>{
//       //   console.warn(users.first_name);
//       //   return users.first_name.toLocaleLowerCase().match(searchTerm.trim.toLocaleLowerCase());
//       // });
      
//       this.dataSource = new MatTableDataSource(users);
//         this.changeDetectorRef.detectChanges();
//         this.dataSource.paginator = this.paginator;
//         this.obs = this.dataSource.connect();
//  });
this.dataSource.filter=searchTerm.trim().toLocaleLowerCase();
    }else{
  this.clearSearch();
    }
    this.SpinnerService.hide(); 
  }
  clearSearch(){
    this.searchText='';
    this.lowerlimit=0;this.upperlimit=8;
    this.notEmptyPost =true;
    this.notscrolly =true;
    this.ngOnInit();
     this.onScroll();
    //window.location.reload();
    
  }
  onScroll(){
    console.log("Scrolled");
    if(this.notEmptyPost && this.notscrolly){
      this.SpinnerService.show();
      this.notscrolly=false;
      this.loadNextPost();
    }
  }
  loadNextPost(){
    this.userService.getUsers()
    .subscribe((users: User[]) => {
     // this.SpinnerService.hide();
     setTimeout(()=>{
      this.SpinnerService.hide()
    },2000);
      if(users.slice(this.lowerlimit,this.upperlimit).length === 0){
        console.log("If");
        this.notEmptyPost=false;
      }
      else{
        console.log("Else");
        // if(users.length-this.upperlimit>8){
        //   this.users=this.users.concat(users.slice(this.lowerlimit,this.upperlimit)); 
        // }else{
        //   this.users=this.users.concat(users.slice(this.lowerlimit,(users.length-this.upperlimit)));
        // }
        this.users=this.users.concat(users.slice(this.lowerlimit,this.upperlimit));
      this.dataSource = new MatTableDataSource(this.users);
      this.changeDetectorRef.detectChanges();
        //this.dataSource.paginator = this.paginator;
        this.obs = this.dataSource.connect();
        this.noData=this.dataSource.connect().pipe(map(data => data.length === 0));
        this.lowerlimit=this.upperlimit;
        this.upperlimit=this.upperlimit+8;
        console.log(this.lowerlimit+"  "+this.upperlimit);
      this.notscrolly=true;
      }
      console.log(this.users);
    });
    
    
  }
  }


