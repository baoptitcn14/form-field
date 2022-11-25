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

  constructor(
    private formFieldService: FormFieldService
  ) { }

  ngOnInit(): void {
    this.rootData?.items?.forEach(e => {
      if (e.formular && e.value === undefined) {
        e.value = this.formFieldService.getValueByFormula(e.formular, this.rootData);
      }
    });

    this.rootData?.items?.sort(function (x, y) {
      if (x.index === undefined || x.index === null) x.index = 0;
      if (y.index === undefined || y.index === null) y.index = 0;
      return x.index - y.index;
    });
  }

  onReferenceIdsEmitter(itemData: FormField) {
    this.formFieldService.onReferenceIdsEmitter(itemData, this.rootData, this.rootData);
  }

  onFormulaEmitter(event: FormulaEmitterInput) {
    this.formFieldService.onFormulaEmitter(event, this.rootData, this.rootData);
  }
}
