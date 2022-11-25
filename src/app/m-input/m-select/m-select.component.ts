import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Item, Errors } from 'src/app/form-field/form-field';
import { MBaseInput } from '../m-base-input/m-base-input';

@Component({
  selector: 'm-select',
  templateUrl: './m-select.component.html',
  styleUrls: ['./m-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MSelectComponent),
      multi: true
    }
  ]
})
export class MSelectComponent extends MBaseInput implements Validator {

  @Input() itemData: Item | undefined;
  @Output() referenceIdsEmitter = new EventEmitter();
  @Output() formulaIdsEmitter = new EventEmitter();

  errors: Errors | undefined;
  search: string | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    this.errors = this.baseValidate(this.itemData, control.value);
    return this.errors ? this.errors : null;
  }

  onSelectAll() {
    if (this.value) {
      this.itemData?.dataSource?.forEach(e => e.active = false);
      this.value = undefined;
      this.handler();

      if (this.itemData?.formulaRefIds)
        this.proccessFormulaRefIds(this.itemData.formulaRefIds, this.itemData.id, this.formulaIdsEmitter);

      if (this.itemData?.dataSourceRefIds)
        this.referenceIdsEmitter.emit(this.itemData);
    }
  }

  onSelect(option: any) {
    if (option.active) return;

    this.itemData?.dataSource?.forEach(e => e.active = false);

    this.value = option.id;

    this.handler();

    if (this.itemData?.dataSourceRefIds)
      this.referenceIdsEmitter.emit(this.itemData);

    if (this.itemData?.formulaRefIds)
      this.proccessFormulaRefIds(this.itemData.formulaRefIds, this.itemData.id, this.formulaIdsEmitter);

  }

  get listOption() {
    if (!this.search) return this.itemData?.dataSource;
    return this.itemData?.dataSource?.filter(e => e.name.indexOf(this.search) > -1);
  }

  get displayValue() {
    const item = this.itemData?.dataSource?.find(e => e.id == this.value);
    if (item) {
      this.itemData?.dataSource?.forEach(e => e.active = false);
      item.active = true;
    } else {
      this.itemData?.dataSource?.forEach(e => e.active = false);
    }
    return item ? item.name : (this.itemData?.selectAll ? 'Tất cả' : '');
  }

}
