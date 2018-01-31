import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PollService } from '../poll.service';

import { Poll } from '../poll';

@Component({
  selector: 'app-poll-show',
  templateUrl: './poll-show.component.html',
  styleUrls: ['./poll-show.component.css']
})
export class PollShowComponent implements OnInit {
	aPoll: Poll;
	id: string;

  constructor(
  	private _pollService: PollService,
  	private _router: ActivatedRoute,
  	private _route: Router
	) { 
  		this._router.paramMap.subscribe( params => {
  			this.id = params.get('id')
  		})
  	}

  ngOnInit() {
  	this.aPoll = new Poll();

  	this._pollService.getPoll(this.id,
      (poll) => {
      	console.log(poll)
        this.aPoll = poll;
          }, 
      (err) => {
        console.log(err);
      }
    );
  }

  vote(opt) {
  	this._pollService.addVotes(this.id, opt,
  		(poll) => {
      	console.log('Vote counted!')
          }, 
      (err) => {
        console.log(err);
      }
  	);
  }


}
