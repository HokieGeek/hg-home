import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { HomeComponent }  from './home.component';

import { HgTeaModule }    from './tea/app/app.module';
import { HgHouseModule }  from './house/app/app.module';


@NgModule({
  imports: [
    BrowserModule,
    HgTeaModule,
    HgHouseModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
