import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('./assets/testresult.json');
  }

//   setUser(user) {
//     let userId = user.id;
//     delete user.id;
//     return this.http.post('https://jsonplaceholder.typicode.com/users/${user.id}', user);
//   }

//   getImages() {
//     return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId=1');
}