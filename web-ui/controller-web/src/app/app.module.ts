import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectComponent } from './subject-list/subject/subject.component';
import { TopicComponent } from './topic/topic.component';
import { SubjectDataService } from './subject-list/subject-data.service';
import { StompConfig, StompService } from '@stomp/ng2-stompjs';

import { UiSwitchModule } from 'angular2-ui-switch'


const stompConfig: StompConfig = {
  // Which server?
  url: 'ws://iot.emmet-project.com:15674/ws',

  // Headers
  // Typical keys: login, passcode, host
  headers: {
    login: 'emmet',
    passcode: 'masterbuilder'
  },

  
  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeat_in: 0, // Typical value 0 - disabled
  heartbeat_out: 20000, // Typical value 20000 - every 20 seconds

  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 5000 (5 seconds)
  reconnect_delay: 5000,

  // Will log diagnostics on console
  debug: true
};


const appRoutes: Routes = [
  { path: 'subjects/:id', component: SubjectComponent },
  { path: 'subjects', component: SubjectListComponent },

  {
    path: '',
    redirectTo: '/subjects',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SubjectListComponent,
    SubjectComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    UiSwitchModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    SubjectDataService,
    StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }


  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
