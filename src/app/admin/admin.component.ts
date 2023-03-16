import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  credentials={
    username:"",
    password:""
  }

  constructor(private loginservice:LoginServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("form is submitted");
    if ((this.credentials.username!="" && this.credentials.password!="")&&(this.credentials.username!=null && this.credentials.password!=null)) 
    {
      console.log("we have to submit to server");
      this.loginservice.generateToken(this.credentials).subscribe(
        (response:any)=>{
          console.log(response.token);
          this.loginservice.loginUser(response.token);
          window.location.href="/adminDashboard";
        },
        error=>{
          console.log("error in token");
        }
      )
    } 
    else 
    {
      alert("Desired fields are empty!");
    }
  }

}
