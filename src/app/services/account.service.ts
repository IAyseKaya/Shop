import { Injectable } from '@angular/core';
import {User} from "../login/user";

@Injectable()
export class AccountService {
  constructor() { }

  loggedIn = false;
  login(user : User):boolean{
    if(user.userName == "iakaya" && user.password == "12345"){
      localStorage.setItem("isLogged" , user.userName);
      this.loggedIn = true;
    }
    return this.loggedIn ;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logout(){
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }

}
