import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user/user'
import { Poll } from '../poll'

import { Location } from '@angular/common'

import { UserService } from '../../user/user.service';
import { PollService } from '../poll.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {
	user: User;
	polls: Poll[];

  constructor(
  	private _pollService: PollService,
    private _userService: UserService,
  	private _route: Router,
    private _location: Location
  ) { 
  	this.polls = [];
  }

  ngOnInit() {
  	this.user = this._userService.currentUser;
  	console.log(this.user)

  	this._pollService.retrievePolls(
      (polls) => {
        this.polls = polls;
          }, 
      (err) => {
        console.log(err);
      }
    );
  }

  clear() {
    this._location.back();
  }

  delete(id) {
    this._pollService.deletePoll(id,
    (poll) => {
      console.log('Poll Deleted')
      this._pollService.retrievePolls(
        (polls) => {
          this.polls = polls;
         }, 
        (err) => {
          console.log(err);
        });
      this._route.navigateByUrl('/dashboard');
      },
      (err) => {
        console.log(err);
      }


     );
  }

}
