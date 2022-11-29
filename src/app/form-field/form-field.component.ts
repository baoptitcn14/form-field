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
  @Input() rootData: FormField | undefined;
  @Input() rootId: string | undefined;

  constructor(
    private formFieldService: FormFieldService
  ) { }

  ngOnInit(): void {

    if (this.rootData?.type == 'form') {
      this.formFieldService.initAllItem(this.rootData, this.rootId);

      this.rootData?.items?.forEach(e => {
        if (e.formular && e.value === undefined) {
          e.value = this.formFieldService.getValueByFormula(e.formular, this.rootId);
        }
      });
    }

    this.rootData?.items?.sort(function (x, y) {
      if (x.index === undefined || x.index === null) x.index = 0;
      if (y.index === undefined || y.index === null) y.index = 0;
      return x.index - y.index;
    });

  }

  onReferenceIdsEmitter(itemData: FormField) {
    this.formFieldService.onReferenceIdsEmitter(itemData, this.rootId);
  }

  onFormulaIdsEmitter(event: FormulaEmitterInput) {
    this.formFieldService.onFormulaEmitter(event, this.rootId);
  }

  onCheckValidRoot() {
    this.formFieldService.setValidForRoot(this.rootId);
  }
}
