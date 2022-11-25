import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserslistsComponent } from './userslists/userslists.component';
import { UserprofileComponent } from './userprofile/userprofile.component';



@NgModule({
  declarations: [
    UserslistsComponent,
    UserprofileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserslistsComponent,
    UserprofileComponent
  ]
})
export class ViewsModule { }
