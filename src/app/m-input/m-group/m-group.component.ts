import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormFieldService } from 'src/app/form-field.service';
import { FormField, FormulaEmitterInput } from 'src/app/form-field/form-field';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'm-group',
  templateUrl: './m-group.component.html',
  styleUrls: ['./m-group.component.scss']
})
export class MGroupComponent implements OnInit {
  @Input('rootData') rootData: FormField | undefined;
  @Input('itemData') groupData: FormField | undefined;

  constructor(private formFieldService: FormFieldService) { }

  ngOnInit(): void {
  }

  onReferenceIdsEmitter(itemData: FormField) {
    this.formFieldService.onReferenceIdsEmitter(itemData, this.groupData, this.rootData);
  }

  onFormulaEmitter(event: FormulaEmitterInput) {
    this.formFieldService.onFormulaEmitter(event, this.groupData, this.rootData);
  }

}
