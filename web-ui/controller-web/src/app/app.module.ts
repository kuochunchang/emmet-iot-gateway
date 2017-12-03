import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceDashboardComponent } from './device-dashboard/device-dashboard.component';
import { ThingsCollectionComponent } from './things-collection/things-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceDashboardComponent,
    ThingsCollectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
