import {AfterViewInit, Component, EventEmitter, Input, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, ThemePalette} from '@angular/material';

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

export enum DlScrollType {
  PAGINATOR,
  INFINITE_SCROLL
}

export interface DlScrollMeta {
  page_size_options: number[];
  show_first_last_buttons?: boolean;
}

@Component({
  selector: 'lib-dl-mat-table',
  templateUrl: 'dl-mat-table.component.html',
  styleUrls: ['dl-mat-table.component.scss']
})
export class DlMatTableComponent implements OnInit, AfterViewInit {
  @Input() columns: DlTableColumn[];
  @Input() actions: DlTableAction[];
  @Input() entities: any[];
  @Input() scrollType: DlScrollType = DlScrollType.PAGINATOR;
  @Input() scrollMeta: DlScrollMeta = {
    page_size_options: [5, 10],
    show_first_last_buttons: true
  };

  @Output() actionClicked = new EventEmitter();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  headers: string[];
  tableDataSource: MatTableDataSource<any>;

  DlScrollType = DlScrollType;

  constructor(private zone: NgZone) {
  }

  ngOnInit() {
    this.headers = this._getHeaders();
    this.tableDataSource = new MatTableDataSource<any>(this.entities.map(e => ({
      ...e,
      actions: this.actions
    })));
  }

  ngAfterViewInit(): void {
    this.tableDataSource.paginator = this.paginator;
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
