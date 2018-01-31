import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Poll } from './poll'

@Injectable()
export class PollService {
	currentPoll: Poll;
	polls: Poll[];
	onePoll: Poll;

  constructor(
  	private _http: Http
  ) { }

  retrievePolls(callback, errorback) {
  	this._http.get('/polls').subscribe(
  		(res) => {
  			const polls = res.json();
  			if(polls) {
  				this.polls = polls;
          console.log(this.polls)
  			}
  			callback(this.polls);
  		}, 
  		(err) => {
  			errorback(err);
  		}
  	)
  }

  createPoll(poll: Poll, callback, errorback) {
  	this._http.post('/polls', poll).subscribe(
  		(res) => {
  			const poll = res.json();
  			this.currentPoll = poll;
  			callback(this.currentPoll);
  		}, 
  		(err) => {
  			errorback(err);
  		}
  	)
  }

  getPoll(id, callback, errorback) {
  	this._http.get('/polls/'+id).subscribe(
  		(res) => {
  			const poll = res.json();
  			if(poll) {
  				this.onePoll = poll;
  			}
  			callback(this.onePoll);
  		}, 
  		(err) => {
  			errorback(err);
  		}
  	);
  }

  deletePoll(id, callback, errorback) {
  	this._http.delete('/polls/'+id).subscribe(
  		(res) => {
  			const poll = res.json();
  			this.currentPoll = poll;
  			callback(this.currentPoll);
  		}, 
  		(err) => {
  			errorback(err);
  		}
  	)
  }

  addVotes(id, opt, callback, errorback) {
  	this._http.post('/polls/'+id, opt).subscribe(
  		(res) => {
  			const poll = res.json();
  			if(poll) {
  				this.onePoll = poll;
  			}
  			callback(this.onePoll);
  		}, 
  		(err) => {
  			errorback(err);
  		}
  	);
  }

}

