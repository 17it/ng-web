import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
