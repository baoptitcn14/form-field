import { Component, Input, OnInit } from '@angular/core';
import { FormFieldService } from '../form-field.service';
import { ServicesService } from '../services.service';
import { FormField, FormulaEmitterInput } from './form-field';

@Component({
  selector: 'm-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() objectForm: FormField | undefined;

  constructor(
    private formFieldService: FormFieldService
  ) { }

  ngOnInit(): void {
    this.objectForm?.items?.forEach(e => {
      if (e.formular && e.value === undefined) {
        e.value = this.formFieldService.getValueByFormula(e.formular, this.objectForm);
      }
    });

    this.objectForm?.items?.sort(function (x, y) {
      if (x.index === undefined || x.index === null) x.index = 0;
      if (y.index === undefined || y.index === null) y.index = 0;
      return x.index - y.index;
    });
  }

  onReferenceIdsEmitter(itemData: FormField) {
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
        if (item) {
          item.value = this.formFieldService.getValueByFormula(item.formular, this.objectForm);
        }

      });
    }
  }
}
