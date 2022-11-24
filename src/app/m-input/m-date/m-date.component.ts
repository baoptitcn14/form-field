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
    return this.errors ? this.errors : null;
  }

  clear() {
    if (!this.value) return;
    this.value = undefined;
    this.handler();
  }
}
