import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { Errors, FormulaEmitterInput, FormField } from 'src/app/form-field/form-field';
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
  @Input() itemData: FormField | any;
  @Output() formulaIdsEmitter = new EventEmitter<FormulaEmitterInput>();
  @Output() validEmitter = new EventEmitter();

  errors: Errors | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    this.errors = this.baseValidate(this.itemData, control.value);
    this.validEmitter.emit(this.errors ? false : true);
    return this.errors ? this.errors : null;
  }

  clear() {
    if (!this.value) return;
    this.value = undefined;
    this.onChangeValue();
  }

  onChangeValue(): void {
    this.handler();

    if (this.itemData?.formulaRefIds)
      this.proccessFormulaRefIds(this.itemData.formulaRefIds, this.itemData.id, this.formulaIdsEmitter);
  }
}
