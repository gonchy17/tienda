import { environment } from './../environments/environment';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 

import { HeaderComponent } from './shared/components/header/header.component';

import { FooterComponent } from './shared/components/footer/footer.component';

import {MaterialModule} from '@app/material.module';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';

import {AngularFirestoreModule} from '@angular/fire/firestore';
//import {AngularFireStorageModule, StorageBucket} from '@angular/fire/storage';
import {AngularFireStorageModule, BUCKET} from '@angular/fire/storage';

import {AngularFireModule} from '@angular/fire';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SidebarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    {provide: BUCKET, useValue:''} 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
