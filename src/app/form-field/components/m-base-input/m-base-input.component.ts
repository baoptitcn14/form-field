import { Component, Input } from '@angular/core';
import { FormField } from '../../form-field';

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
