import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppComponent }    from './app.component';

import { RoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
  ],
})
export class HgTeaModule {}
