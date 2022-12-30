import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormField, HeaderTable } from 'src/app/form-field/form-field';
import { MButton } from '../m-button/m-button.component';

@Component({
  selector: 'm-table',
  templateUrl: './m-table.component.html',
  styleUrls: ['./m-table.component.scss']
})
export class MTableComponent implements OnInit {
  @Input() itemData: FormField | undefined;

  listHeader: HeaderTable[] | undefined = [];
  search = '';
  flagMultiSearch: boolean | undefined;
  tableSource: any = {
    t_records: [],
    t_headers: []
  };

  readonly TYPE_COLUMN = {
    TEXT: 'text',
    I_TEXT: 'i_text',
    I_NUMBER: 'i_number'
  }

  constructor() { }

  ngOnInit(): void {
    if (this.itemData?.dataSource && this.itemData?.dataSource?.length > 0) {

      this.tableSource = this.itemData?.dataSource[0];

      this.listHeader = this.tableSource.t_headers;
    }

    this.flagMultiSearch = this.itemData?.t_filters?.multi;
  }

  get listRecord() {
    if (this.itemData?.t_filters?.list && this.itemData?.t_filters?.list.length > 0) {
      this.flagMultiSearch = this.itemData.t_filters.multi;
      const p = this.itemData.t_filters.list.filter(e => e.value).map(e => {
        return {
          key: e.key,
          value: e.value
        }
      });

      if (p.length == 0) return this.tableSource.t_records;

      return this.tableSource.t_records.filter((z: any) => {
        let count = 0;
        p.forEach(x => {
          count += (x.key && x.value) && (z.value[x.key] + '' == x.value) ? 1 : 0;
        });

        if (count == p.filter(e => e.value).length) return z;
      });

    }

    return this.tableSource.t_records;
  }

  onFilter() {
    if (this.flagMultiSearch) this.flagMultiSearch = false;
  }

  openModal() {
    console.log('haha');
  }

  onClickAction(action: MButton, data: any) {
    if (action && action.click)
      action.click(data);
  }

}
