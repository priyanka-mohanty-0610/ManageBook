import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule,} from '@angular/material/radio';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import {ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'; 
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { RegisteredUsersListComponent } from './registered-users-list/registered-users-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WelcomeRecipeComponent } from './welcome-recipe/welcome-recipe.component';
import { RecipiesComponent } from './welcome-recipe/recipies/recipies.component';
import { RecipeListComponent } from './welcome-recipe/recipies/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './welcome-recipe/recipies/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './welcome-recipe/recipies/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './welcome-recipe/header/header.component';
import { FormsModule } from '@angular/forms';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { CardsListViewComponent } from './cards-list-view/cards-list-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmationDialogComponent } from './cards-list-view/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './cards-list-view/confirmation-dialog/confirmation-dialog.service';
//import { EmployeeFilterPipe } from './employee-filter.pipe';
//import { ConfirmationDialogComponent } from '../card-list-view/confirmation-dialog/confirmation-dialog.component';
//import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import {FormCanDeactivateService}  from './form-can-deactivate.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { NgxSpinnerModule } from "ngx-spinner"; 
import {ScrollingModule} from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
/**
 * 
 */
const appRoutes: Routes = [
  { path: '',
    redirectTo: '/landingPage',
    pathMatch: 'full'
  },
  { path: 'recipeandshopping', component: WelcomeRecipeComponent },
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'dashboard', component: WelcomeUserComponent },
  { path: 'login', component: LoginUserComponent,canDeactivate : [FormCanDeactivateService] },
  { path: 'register', component: RegisterUserComponent },
  { path: 'userslist', component: RegisteredUsersListComponent },
  { path: 'recipe', component: RecipiesComponent },
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'cards', component: CardsListViewComponent ,canActivate : [AuthGuard]},
 
];
@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    WelcomeUserComponent,
    RegisterUserComponent,
    RegisteredUsersListComponent,
    LandingPageComponent,
    WelcomeRecipeComponent,
    RecipiesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    ExponentialStrengthPipe,
    CardsListViewComponent,
    ConfirmationDialogComponent,
    //EmployeeFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule ,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSelectModule,MatDialogModule,
    FormsModule,MatDatepickerModule, MatNativeDateModule,MatCardModule,NgxSpinnerModule,InfiniteScrollModule,
    MatIconModule,MatToolbarModule,MatPaginatorModule,FlexLayoutModule,MatTooltipModule,ScrollingModule,
    RouterModule.forRoot(appRoutes,  { enableTracing: true } ),
  ],
  //providers: [],
  bootstrap: [AppComponent],
  
  providers: [ ConfirmationDialogService,FormCanDeactivateService,AuthService ],
  entryComponents: [ ConfirmationDialogComponent ],
})
export class AppModule { }
