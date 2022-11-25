import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './views/userprofile/userprofile.component';
import { UserslistsComponent } from './views/userslists/userslists.component';

const routes: Routes = [
  {
    path: 'home',
    component: UserslistsComponent
  },
  {
    path: 'user/:id',
    component: UserprofileComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
