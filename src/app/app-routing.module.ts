import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AuthguardGuard } from './authguard.guard';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserComponent } from './user/user.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'cart', component: CartComponent },
  { path: 'userReg', component: UserRegComponent },
  { path: 'userhome', component: UserhomeComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent, pathMatch: "full", canActivate: [AuthguardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
