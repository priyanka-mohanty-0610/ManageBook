import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-recipe',
  templateUrl: './welcome-recipe.component.html',
  styleUrls: ['./welcome-recipe.component.css']
})
export class WelcomeRecipeComponent implements OnInit {
  loadedFeature = 'recipe';
  constructor(private router : Router) { }

  ngOnInit() {
  }
onNavigate(feature : string){
  this.loadedFeature=feature;
  // if(feature== 'recipe'){
  //   alert(feature);
  //   this.router.navigate(['recipe']);
  // }else{
  //   alert(feature);
  //   this.router.navigate(['shopping']);
  // }
}
}
