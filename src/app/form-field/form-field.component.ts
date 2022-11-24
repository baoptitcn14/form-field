import { Component, Input, OnInit } from '@angular/core';
import { FormField, Item } from './form-field';

@Component({
  selector: 'm-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() objectForm: FormField | undefined;

  constructor() { }

  ngOnInit(): void {
    this.objectForm?.items?.sort(function (x, y) {
      if (x.index === undefined || x.index === null) x.index = 0;
      if (y.index === undefined || y.index === null) y.index = 0;
      return x.index - y.index;
    });
  }

  onReferenceIdsEmitter(itemData: Item) {
    if (itemData.referenceIds) {
      itemData.referenceIds.forEach(e => {
        let item = this.objectForm?.items?.find(x => x.id == e.id);

        if (item) {
          item.value = undefined;

          if (!itemData.value)
            item.dataSource = item._dataSource;
          else
            item.dataSource = item._dataSource?.filter(z => z[e.key] == itemData.value);
        }
      });
    }
  }

}
