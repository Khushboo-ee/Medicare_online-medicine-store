import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  msg:any;
  result:any;
  userid:number;
  user:User;
 
  constructor(
    private builder :FormBuilder, 
    private service : LoginServiceService, 
    private router : Router,
    private route : ActivatedRoute
  ) { 
    sessionStorage.clear();
  }
 
  ngOnInit(): void {
this.userid = this.route.snapshot.params['userid'];
this.user = new User();
  }
 
  
  userloginForm = this.builder.group(
    {
      username: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required)
    });


  proceedLogin()
  {
/*
    this.service.GetUserByID(this.loginForm.value.username).subscribe
    (data=>{
      // on success
    },
    error =>{
      //on error
    });
*/
    if(this.userloginForm.valid)
    {
       this.service.getUserInfoById(this.userid).subscribe(data=>{
        this.user = data;
        if(this.user.password==this.userloginForm.value.password){
          this.router.navigate(['userhome']);
        }
        else{
          this.msg = "Please check username/password";
        }
       });
    }
    else
    {
      this.msg = "Please fill username and password";
    }
  }
}
