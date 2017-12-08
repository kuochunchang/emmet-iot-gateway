import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectComponent } from './subject-list/subject/subject.component';
import { TopicComponent } from './topic/topic.component';

const appRoutes: Routes = [
  { path: 'subjects/:id', component:  SubjectComponent},
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
