import { Component } from '@angular/core';
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private accountService:AccountService) {
  }
isLoggedin(){
    return this.accountService.isLoggedIn();
}
logOut(){
  return this.accountService.logout();
}
}
