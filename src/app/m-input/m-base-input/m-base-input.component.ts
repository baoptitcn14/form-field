import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormulaEmitterInput, Item } from 'src/app/form-field/form-field';

@Component({
  selector: 'm-base-input',
  templateUrl: './m-base-input.component.html',
  styleUrls: ['./m-base-input.component.scss']
})
export class MBaseInputComponent implements OnInit {

  @Input() itemData: Item | any;
  @Output() referenceIdsEmitter = new EventEmitter();
  @Output() formulaRefIdsEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onReferenceIdsEmitter(itemData: Item) {
    this.referenceIdsEmitter.emit(itemData);
  }

  onFormulaIdsEmitter(event: FormulaEmitterInput) {
    this.formulaRefIdsEmitter.emit(event);
  }

}
