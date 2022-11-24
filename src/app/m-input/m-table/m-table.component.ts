import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/form-field/form-field';
import { MBaseInput } from '../m-base-input/m-base-input';

@Component({
  selector: 'm-table',
  templateUrl: './m-table.component.html',
  styleUrls: ['./m-table.component.scss']
})
export class MTableComponent extends MBaseInput implements OnInit {
  @Input() itemData: Item | undefined;
  listHeader: any[] = [];
  listData: any[] = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    if(this.itemData?.dataSource && this.itemData?.dataSource?.length > 0) {
      this.listHeader = this.itemData?.dataSource[0].headers;
      this.listData = this.itemData?.dataSource[0].datas;
    }
  }

}
