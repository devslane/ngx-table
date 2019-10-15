import {NgModule} from '@angular/core';
import {DlMatTableComponent} from './components/dl-mat-table/dl-mat-table.component';
import {MatIconModule, MatTableModule, MatTooltipModule} from '@angular/material';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';


@NgModule({
  declarations: [DlMatTableComponent],
  imports: [
    MatTableModule,
    BrowserDynamicTestingModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [DlMatTableComponent]
})
export class DlMatTableModule {}
