import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShuleComponent } from './shule/shule.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShuleDetailComponent } from './shule-detail/shule-detail.component';
import { LoginComponent} from './login/login.component';
import { AuthGuard } from './helpers';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard',pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'schools', component: ShuleComponent },
  { path: 'detail/:id', component: ShuleDetailComponent },
  { path: 'login', component: LoginComponent ,canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
