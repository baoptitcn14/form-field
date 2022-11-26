import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormFieldService } from 'src/app/form-field.service';
import { FormulaEmitterInput, FormField } from 'src/app/form-field/form-field';

@Component({
  selector: 'm-base-input',
  templateUrl: './m-base-input.component.html',
  styleUrls: ['./m-base-input.component.scss']
})
export class MBaseInputComponent implements OnInit {
  @Input() rootData: FormField | any;
  @Input() itemData: FormField | any;
  @Output() referenceIdsEmitter = new EventEmitter();
  @Output() formulaRefIdsEmitter = new EventEmitter();

  constructor(
    private formFieldService: FormFieldService
  ) { }

  ngOnInit(): void {
  }

  onReferenceIdsEmitter(itemData: FormField) {
    this.formFieldService.onReferenceIdsEmitter(itemData, this.itemData, this.rootData);
  }

  onFormulaIdsEmitter(event: FormulaEmitterInput) {
    this.formFieldService.onFormulaEmitter(event, this.itemData, this.rootData);
  }

  // onReferenceIdsEmitter(itemData: FormField) {
  //   this.referenceIdsEmitter.emit(itemData);
  // }

  // onFormulaIdsEmitter(event: FormulaEmitterInput) {
  //   this.formulaRefIdsEmitter.emit(event);
  // }

}
