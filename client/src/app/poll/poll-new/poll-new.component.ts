import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PollService } from '../poll.service';
import { Poll } from '../poll';

import { UserService } from '../../user/user.service';
import { User } from '../../user/user'

@Component({
  selector: 'app-poll-new',
  templateUrl: './poll-new.component.html',
  styleUrls: ['./poll-new.component.css']
})
export class PollNewComponent implements OnInit {
	currentUser: User;
	poll: Poll;

  constructor(
  	private _userService: UserService,
  	private _pollService: PollService, 
  	private _route: Router
  ) { }

  ngOnInit() {
  	this.poll = new Poll();
  	this.currentUser = this._userService.currentUser;
  }

   onSubmit() {
   	this.poll._user = this.currentUser
  	this._pollService.createPoll(this.poll, 
  		(poll) => {
        console.log(poll);
  			this._route.navigateByUrl('/dashboard');
  		},
  		(err) => {
  			console.log(err);
  		}
  	);

  	this.poll = new Poll;
  }

}
