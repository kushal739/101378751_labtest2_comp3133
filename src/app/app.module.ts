import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { AppRoutingModule } from './app-routing.module';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';

@NgModule({
  declarations: [AppComponent, MissionlistComponent, MissiondetailsComponent, MissionfilterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
