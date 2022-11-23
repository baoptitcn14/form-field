import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { Item, Errors } from 'src/app/form-field/form-field';
import { MBaseInput } from '../m-base-input/m-base-input';

@Component({
  selector: 'm-date',
  templateUrl: './m-date.component.html',
  styleUrls: ['./m-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MDateComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MDateComponent),
      multi: true
    }
  ]
})
export class MDateComponent extends MBaseInput implements Validator {
  @Input() itemData: Item | any;
  errors: Errors | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    this.errors = this.baseValidate(this.itemData, control.value);

    if (this.itemData.min != undefined) {
      if (parseFloat(control.value) < parseFloat(this.itemData.min)) {
        if (!this.errors) this.errors = { min: undefined };
        this.errors.min = 'Giới hạn nhỏ nhất là ' + this.itemData.min;
        this.addError('min', this.errors.min);
      } else {
        this.deleteErrorByKey('min');
      }
    }

    if (this.itemData.max != undefined) {
      if (parseFloat(control.value) > parseFloat(this.itemData.max)) {
        if (!this.errors) this.errors = { max: undefined };
        this.errors.max = 'Giới hạn lớn nhất là ' + this.itemData.max;
        this.addError('max', this.errors.max);
      } else {
        this.deleteErrorByKey('max');
      }
    }

    return this.errors ? this.errors : null;
  }
}
