import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatelogComponent } from './catelog/catelog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatelogComponent, 
    SiteHeaderComponent, ProductdetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
