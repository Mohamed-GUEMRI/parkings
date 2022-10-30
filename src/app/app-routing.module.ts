import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerguersComponent } from './berguers/berguers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrinksComponent } from './drinks/drinks.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenusComponent } from './menus/menus.component';
import { RegisterComponent } from './register/register.component';
import { ReloadingComponent } from './reloading/reloading.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'berguers/:id', component: BerguersComponent},
  {path: 'menus', component: MenusComponent},
  {path: 'drinks', component: DrinksComponent},
  {path: 'dashboared', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reloading', component: ReloadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
