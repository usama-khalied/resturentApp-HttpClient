import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { DatePiComponent } from './date-pi/date-pi.component';
import { FullDetailedComponent } from './full-detailed/full-detailed.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';

const routes: Routes = [
  { path: 'add', component: AddRestoComponent },
  { path: 'date', component: DatePiComponent },

  { path: 'list', component: ListRestoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'update/:id', component: UpdateRestoComponent },
  { path: 'update', component: UpdateRestoComponent },
  { path: '', component: DatePiComponent },
  { path: 'full-detailed', component: FullDetailedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
