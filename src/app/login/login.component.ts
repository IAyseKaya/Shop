import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {NgForm} from "@angular/forms";
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private accountService:AccountService,
              ) {
  }
    model: User = new User();

  login(form: NgForm) {
  this.accountService.login(this.model);
  }
  ngOnInit(): void {
  }
}
