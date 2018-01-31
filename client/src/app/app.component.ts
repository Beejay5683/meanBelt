import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from './user/user.service';
import { User } from './user/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  	constructor(
  		private _userService: UserService,
  		private _route: Router

  		) { }

 	ngOnInit() {
  		this._userService.getCurrentUser(
  			(user) => {
  				if(!user) {
  					this._route.navigateByUrl('/')
  				}


  			},
  			(err) => {

  			}


  		);
	}
}