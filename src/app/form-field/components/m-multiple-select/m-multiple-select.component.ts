import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormField, Errors } from '../../form-field';
import { FormFieldService } from '../../form-field.service';
import { MBaseInput } from '../m-base-input/m-base-input';

@Component({
  selector: 'm-multiple-select',
  templateUrl: './m-multiple-select.component.html',
  styleUrls: ['./m-multiple-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MMultipleSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MMultipleSelectComponent),
      multi: true
    }
  ]
})
export class MMultipleSelectComponent extends MBaseInput implements Validator {
  @Input() itemData: FormField | undefined;
  @Input() rootId: string | undefined;

  errors: Errors | undefined;
  search: string | undefined;

  constructor(formFieldService: FormFieldService) {
    super(formFieldService);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    this.errors = this.baseValidate(this.itemData, control.value);
    this.proccessValidEmitter(this.rootId);
    return this.errors ? this.errors : null;
  }

  onSelectAll() {
    if (this.value) {
      this.itemData?.dataSource?.forEach((e: any) => e.active = false);
      this.value = undefined;
      this.handler();

      if (this.itemData?.formulaRefIds && this.rootId)
        this.proccessFormulaRefIds(this.itemData.formulaRefIds, this.itemData.id, this.rootId);

      if (this.itemData?.dataSourceRefIds && this.rootId)
        this.referenceIdsEmitter(this.itemData, this.rootId);
    }
  }

  onSelect(option: any) {
    if (option.active) return;

    this.itemData?.dataSource?.forEach((e: any) => e.active = false);

    this.value = option.id;

    this.handler();

    if (this.itemData?.dataSourceRefIds && this.rootId)
      this.referenceIdsEmitter(this.itemData, this.rootId);

    if (this.itemData?.formulaRefIds && this.rootId)
      this.proccessFormulaRefIds(this.itemData.formulaRefIds, this.itemData.id, this.rootId);

  }

  get listOption() {
    if (!this.search) return this.itemData?.dataSource;
    return this.itemData?.dataSource?.filter((e: any) => this.formFieldService
      .toLowerCaseNonAccentVietnamese(e.name)
      .indexOf(this.formFieldService
        .toLowerCaseNonAccentVietnamese(this.search)) > -1);
  }

  get displayValue() {
    const item = this.itemData?.dataSource?.find((e: any) => e.id == this.value);
    if (item) {
      this.itemData?.dataSource?.forEach((e: any) => e.active = false);
      item.active = true;
    } else {
      this.itemData?.dataSource?.forEach((e: any) => e.active = false);
    }
    return item ? item.name : (this.itemData?.selectAll ? 'Tất cả' : '');
  }

}
