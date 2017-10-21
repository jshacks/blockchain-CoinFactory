import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../materialmodule/material.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from "@angular/router";
import { Coin, CoinDetails, Home } from '../routes'
import 'rxjs'
import 'reflect-metadata'

import { AppComponent } from './app.component';

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'coin', component: Coin },
  { path: 'coindetails', component: CoinDetails },
  { path: 'coindetails/:id', component: CoinDetails }


]

@NgModule({
  declarations: [
    AppComponent,
    Coin,
    CoinDetails,
    Home
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
