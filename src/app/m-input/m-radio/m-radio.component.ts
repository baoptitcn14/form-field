import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { FormFieldService } from 'src/app/form-field.service';
import { Errors, FormField } from 'src/app/form-field/form-field';
import { MBaseInput } from '../m-base-input/m-base-input';

@Component({
  selector: 'm-radio',
  templateUrl: './m-radio.component.html',
  styleUrls: ['./m-radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MRadioComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MRadioComponent),
      multi: true
    }
  ]
})
export class MRadioComponent extends MBaseInput implements Validator {
  @Input() itemData: FormField | undefined;
  @Input() rootId: string | undefined;

  errors: Errors | undefined;

  constructor(formFieldService: FormFieldService) {
    super(formFieldService);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    this.baseValidate(this.itemData, control.value);
    return this.errors ? this.errors : null;
  }

  onChangeValue() {

  }

}
