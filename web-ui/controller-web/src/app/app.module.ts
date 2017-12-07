import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DeviceDashboardComponent } from './device-dashboard/device-dashboard.component';
import { ThingsCollectionComponent } from './things-collection/things-collection.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubjectDashboardComponent } from './subject-dashboard/subject-dashboard.component';
import { SubjectListComponent } from './subject-list/subject-list.component';

const appRoutes: Routes = [
  { path: 'subjects/:id', component: SubjectDashboardComponent },
  { path: 'subjects', component: SubjectListComponent },

  {
    path: '',
    redirectTo: '/things',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DeviceDashboardComponent,
    ThingsCollectionComponent,
    PageNotFoundComponent,
    SubjectDashboardComponent,
    SubjectListComponent
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
