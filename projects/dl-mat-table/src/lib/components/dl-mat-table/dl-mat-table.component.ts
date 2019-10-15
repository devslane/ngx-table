import {Component, EventEmitter, Input, NgZone, OnInit, Output} from '@angular/core';
import {ThemePalette} from '@angular/material';

export interface DlTableColumn {
  title: string;
  key: string;
}

export interface DlTableAction {
  tooltipTitle: string;
  icon: string;
  // Used to identify the event when the action will be clicked
  type: string;
  color: ThemePalette;
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

  @Output() actionClicked = new EventEmitter();

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

  handleActionClicked(type: string) {
    this.actionClicked.emit(type);
  }

  private _getHeaders(): string[] {
    return [
      ...this.columns.map(c => c.key),
      'actions'
    ];
  }
}
