import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/core/models/user.interfacte';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-userslists',
  templateUrl: './userslists.component.html',
  styleUrls: ['./userslists.component.scss']
})
export class UserslistsComponent implements OnInit {

  constructor(private userS:UserService) { }

  users!:UserI[]

  ngOnInit(): void {
    this.userS.getUsers().subscribe(
      users=>{
        
        this.users=users
      }
    )
  }

  

  

}
