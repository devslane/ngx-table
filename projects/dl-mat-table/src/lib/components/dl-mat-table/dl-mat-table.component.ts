import {Component, Input, NgZone, OnInit} from '@angular/core';

export interface DlTableColumn {
  title: string;
  key: string;
}

export interface DlTableAction {
  tooltipTitle: string;
  icon: string;
  // Used to identify the event when the action will be clicked
  type: string;
}

@Component({
  selector: 'lib-dl-mat-table',
  templateUrl: 'dl-mat-table.component.html',
  styleUrls: ['dl-mat-table.component.scss']
})
export class DlMatTableComponent implements OnInit {
  @Input() columns: DlTableColumn[];
  @Input() actions: DlTableAction[];
  @Input() entities: any[];

  headers: string[];
  tableDataSource;

  constructor(private zone: NgZone) {
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.headers = this._getHeaders();
    });

    this.tableDataSource = this.entities.map(e => ({
      ...e,
      actions: this.actions
    }));
  }

  private _getHeaders(): string[] {
    return [
      ...this.columns.map(c => c.key),
      'actions'
    ];
  }
}
