import { Injectable } from '@angular/core';
import {Observable} from "rxjs/";
import {HttpClient} from "@angular/common/http";
import { Admin } from './admin';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url ="http://localhost:8080";

  // private ApiProductUrl = "http://localhost:8080/medicare/products" ;
  // private ApiAdminUrl = "http://localhost:8080/medicare";
  // private ApiUserUrl = "http://localhost:8080/medicare/user";
  private ApiUrl = "http://localhost:8080/medicare";
  private getUser: string;
  private adduser:string;
  private userByID :string;
  private updateAdmin: string;
  

  constructor(private httpclient:HttpClient) { 
    this.getUser = this.ApiUrl+"/user/getall";
    this.adduser = this.ApiUrl+"/user/create";
    this.userByID = this.ApiUrl+"/user";
    this.updateAdmin = this.ApiUrl+"/adminchangepwd";

  }
    
  //users
  //get list of all users
  getAllUsers():Observable<User[]>{
    return this.httpclient.get<User[]>(`${this.getUser}`);
  }

  //register a new user
  newUser(user:User) :Observable<Object>{
    return this.httpclient.post(`${this.adduser}`,user);
  }

 // get user info by id
  getUserInfoById(id:number):Observable<User>{
    return this.httpclient.get<User>(`${this.userByID}/${id}`);
  }
  

  //delete user info using id
  deleteUserById(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.userByID}/${id}`);
  }
  updateUserById(id:number, user:User):Observable<Object>{
    return this.httpclient.put(`${this.userByID}/${id}`, user);
  }

  //Admin
  
  //get user info by id
  updateAdminById(id:number, admin:Admin):Observable<Object>{
    return this.httpclient.put(`${this.updateAdmin}/${id}`, admin);
  }

  //--------------------------------------------------------------------------------------

  //for calling server
generateToken(credentials:any){
  //generate token
  return this.httpclient.post(`${this.url}/token`,credentials);

}

  //for admin login
  loginUser(token: any)
  {
    localStorage.setItem("token",token);
    return true;
  }

  //checking if admin is still loggedin
  isLoggedin()
  {
    let token = localStorage.getItem("token");

    if(token==undefined || token==null || token=="")
    {
      return false;
    }
    else{
      return true;
    }
  }

  //for logging out admin
  logout(){
    localStorage.removeItem('token');
    return true;
  }

  //for getting token
  getToken(){
    return localStorage.getItem("token");
  }

}
