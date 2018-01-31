import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';

import { PollComponent } from './poll/poll.component';
import { PollListComponent } from './poll/poll-list/poll-list.component';
import { PollNewComponent } from './poll/poll-new/poll-new.component';
import { PollShowComponent } from './poll/poll-show/poll-show.component';

const routes: Routes = [
	
	{ path: 'dashboard', pathMatch: 'full', component: PollListComponent},
	{ path: 'poll/new', pathMatch: 'full', component: PollNewComponent},
	{ path: 'poll/:id', pathMatch: 'full', component: PollShowComponent},
	{ path: '', pathMatch: 'full', component: UserNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
