import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user'

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {
	user: User;

  constructor(
  	private _userService: UserService,
  	private _route: Router
  ) { }

  ngOnInit() {
  }

  logout() {
  	this._userService.logout(
  		(res) => {
  			console.log(res);
  			this._route.navigateByUrl('/');
  		},
  		(err) => {
  			console.log(err)

  		}
  	)
  }

}
