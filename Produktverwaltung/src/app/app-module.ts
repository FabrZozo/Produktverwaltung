import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Produkts } from './produkts/produkts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [App, Home, Produkts],
  imports: [BrowserModule, AppRoutingModule,
  FormsModule, ReactiveFormsModule    ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
