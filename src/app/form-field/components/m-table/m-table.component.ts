import { Component, Input, OnInit } from '@angular/core';
import { FormField, HeaderTable } from 'src/app/form-field/form-field';
import { MFilter } from '../m-filter/m-filter.component';
import { MFilters } from '../m-filters/m-filters.component';

@Component({
  selector: 'm-table',
  templateUrl: './m-table.component.html',
  styleUrls: ['./m-table.component.scss']
})
export class MTableComponent implements OnInit {
  @Input() itemData: FormField | undefined;

  listHeader: HeaderTable[] | undefined = [];
  listRecord: any[] | undefined = [];
  search = '';

  filterId: string = '1';

  filters: MFilters = {
    multi: true,
    list: [
      {
        name: 'filter 1',
        dataSource: [
          {
            id: '1',
            name: 'item 1'
          },
          {
            id: '2',
            name: 'item 2'
          },
          {
            id: '3',
            name: 'item 3'
          }
        ]
      },
      {
        name: 'filter 2',
        dataSource: [
          {
            id: '1',
            name: 'item 1'
          },
          {
            id: '2',
            name: 'item 2'
          },
          {
            id: '3',
            name: 'item 3'
          }
        ]
      }
    ]
  }

  constructor() {
  }

  ngOnInit(): void {
    if (this.itemData?.dataSource && this.itemData?.dataSource?.length > 0) {

      const tableSource = this.itemData?.dataSource[0];

      this.listHeader = tableSource.t_headers;
      this.listRecord = tableSource.t_records;
    }
  }

  openModal() {
    console.log('haha')
  }

}
