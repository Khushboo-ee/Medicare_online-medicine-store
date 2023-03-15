import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  user:User = new User();
  constructor(private service:LoginServiceService) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.service.newUser(this.user).subscribe(data=>{
      console.log(data);
      alert("User added");
    });
  }

}
