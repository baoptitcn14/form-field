import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormField, FormulaEmitterInput, Item } from './form-field';

@Component({
  selector: 'm-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() objectForm: FormField | undefined;

  constructor(
    private service: ServicesService
  ) { }

  ngOnInit(): void {
    this.objectForm?.items?.sort(function (x, y) {
      if (x.index === undefined || x.index === null) x.index = 0;
      if (y.index === undefined || y.index === null) y.index = 0;
      return x.index - y.index;
    });
  }

  onReferenceIdsEmitter(itemData: Item) {
    if (itemData.dataSourceRefIds) {
      itemData.dataSourceRefIds.forEach(e => {
        let item = this.objectForm?.items?.find(x => x.id == e.id);

        if (item) {
          item.value = undefined;

          if (item.formulaRefIds) {
            this.onFormulaEmitter({
              formulaRefIds: item.formulaRefIds,
              id: item.id,
              value: item.value
            });
          }

          if (!itemData.value)
            item.dataSource = item._dataSource;
          else
            item.dataSource = item._dataSource?.filter(z => z[e.key] == itemData.value);
        }
      });
    }
  }

  onFormulaEmitter(event: FormulaEmitterInput) {
    const data = event;

    if (data.formulaRefIds && data.formulaRefIds?.length > 0) {
      data.formulaRefIds.forEach(e => {
        let item = this.objectForm?.items?.find(x => x.id == e);

        if (item != undefined) {
          const formula = item.formular;
          const arrFormula = formula?.split('+');
          let result = '';

          arrFormula?.forEach(c => {
            result += this.getValueById(c) as string + ' ';
          });

          item.value = result;
        }
      });
    }
  }

  private getValueById(id: string) {
    const item = this.objectForm?.items?.find(x => x.id == id);
    if (item) {
      const type = typeof (item.value);

      if (type == 'string' || type == "number") {
        return this.getDisplayNameByValue(item, item.value);
      } else if (this.service.isTypeOfDate(item.value)) {
        return this.service.formatDate(item.value as Date);
      }
      return '';
    }
    return '';
  }

  private getDisplayNameByValue(item: Item, value: string | number | Date | undefined) {
    if (value && item.type == 'select') {
      return item.dataSource?.find(e => e.id == value).name;
    }
    return value;
  }

}
