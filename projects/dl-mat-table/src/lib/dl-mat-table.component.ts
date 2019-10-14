import {Component, Input, OnInit} from '@angular/core';

export interface DlTableColumn {
  title: string;
  key: string;
}

@Component({
  selector: 'lib-dl-mat-table',
  template: `
      <p>
          dl-mat-table works!
      </p>
  `,
  styles: []
})
export class DlMatTableComponent implements OnInit {
  @Input() columns: DlTableColumn[];
  @Input() entities: any[];

  constructor() { }

  ngOnInit() {
  }

}
