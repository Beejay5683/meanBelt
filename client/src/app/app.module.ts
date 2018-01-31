import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PollComponent } from './poll/poll.component';
import { PollListComponent } from './poll/poll-list/poll-list.component';
import { PollNewComponent } from './poll/poll-new/poll-new.component';
import { PollShowComponent } from './poll/poll-show/poll-show.component';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';

import { UserService } from './user/user.service'
import { PollService } from './poll/poll.service'


@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    PollListComponent,
    PollNewComponent,
    PollShowComponent,
    UserComponent,
    UserNewComponent,
    UserLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
