import {Component} from '@angular/core';
import {DlTableAction, DlTableColumn} from '../../projects/dl-mat-table/src/lib/components/dl-mat-table/dl-mat-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dl-mat-table-example';

  columns: DlTableColumn[] = [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'E-Mail',
      key: 'email'
    }
  ];

  entities = [
    {
      name: 'Kushagra Saxena',
      email: 'kkss420@gmail.com'
    },
    {
      name: 'Piyush Mishra',
      email: 'piyush0mishra@gmail.com'
    }
  ];

  actions: DlTableAction[] = [
    {
      tooltipTitle: 'Edit',
      icon: 'edit',
      type: 'edit'
    },
    {
      tooltipTitle: 'Delete',
      icon: 'delete',
      type: 'delete'
    }
  ];
}
