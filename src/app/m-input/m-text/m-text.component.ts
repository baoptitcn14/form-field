import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { Errors, Item } from 'src/app/form-field/form-field';
import { MBaseInput } from '../m-base-input/m-base-input';

@Component({
  selector: 'm-text',
  templateUrl: './m-text.component.html',
  styleUrls: ['./m-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MTextComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MTextComponent),
      multi: true
    }
  ]
})
export class MTextComponent extends MBaseInput implements Validator {
  @Input() itemData: Item | any;
  errors: Errors | undefined;
  appendValue: string | undefined;
  prependValue: string | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    this.errors = this.baseValidate(this.itemData, control.value);
    return this.errors ? this.errors : null;
  }
}