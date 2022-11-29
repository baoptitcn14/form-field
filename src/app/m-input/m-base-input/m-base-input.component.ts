import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormFieldService } from 'src/app/form-field.service';
import { FormulaEmitterInput, FormField } from 'src/app/form-field/form-field';
import { MBaseInput } from './m-base-input';

@Component({
  selector: 'm-base-input',
  templateUrl: './m-base-input.component.html',
  styleUrls: ['./m-base-input.component.scss']
})

export class MBaseInputComponent {
  @Input() itemData: FormField = {
    id: '',
    code: '',
    index: 0,
    name: '',
    type: undefined
  };
  @Input() rootId: string | undefined;
}
