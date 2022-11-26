import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { Errors, FormField } from 'src/app/form-field/form-field';
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
  @Input() itemData: FormField | any;
  @Output() formulaIdsEmitter = new EventEmitter();
  @Output() validEmitter = new EventEmitter();

  errors: Errors | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    this.errors = this.baseValidate(this.itemData, control.value);
    this.validEmitter.emit(this.errors ? false : true);
    return this.errors ? this.errors : null;
  }

  onChangeValue(): void {
    this.handler();

    if (this.itemData?.formulaRefIds)
      this.proccessFormulaRefIds(this.itemData.formulaRefIds, this.itemData.id, this.formulaIdsEmitter);
  }
}