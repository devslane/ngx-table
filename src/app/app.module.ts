import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DlMatTableModule} from '../../projects/dl-mat-table/src/lib/dl-mat-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DlMatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
