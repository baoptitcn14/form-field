import { Component, Input, OnInit } from '@angular/core';
import { FormField } from 'src/app/form-field/form-field';

@Component({
  selector: 'm-table',
  templateUrl: './m-table.component.html',
  styleUrls: ['./m-table.component.scss']
})
export class MTableComponent implements OnInit {
  @Input() itemData: FormField | undefined;
  listHeader: any[] = [];
  listData: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    if(this.itemData?.dataSource && this.itemData?.dataSource?.length > 0) {
      this.listHeader = this.itemData?.dataSource[0].headers;
      this.listData = this.itemData?.dataSource[0].datas;
    }
  }

}
