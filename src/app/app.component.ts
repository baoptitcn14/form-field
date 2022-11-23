import { Component } from '@angular/core';
import { FormField } from './form-field/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listObjectForm: FormField[] = [{
    id: 'a',
    code: 'AA',
    index: 0,
    name: 'aaaA',
    type: 'form',
    class: 'row',
    items: [
      {
        id: 'f1',
        code: 'coddef',
        index: 0,
        name: 'f12',
        type: 'text',
        value: 'value',
        required: true,
        regex: /^[0-9]*$/gi,
        class: 'col-12 col-md-6',
        icon: 'fa fa-user'
      },
      {
        id: 'f2',
        code: 'coddef4',
        index: 0,
        name: 'f14',
        type: 'text',
        value: undefined,
        required: true,
        disabled: false,
        class: 'col-12 col-md-6'
      },
      {
        id: 'f3',
        code: 'coddef',
        index: 0,
        name: 'f122',
        type: 'number',
        value: 3,
        required: true,
        class: 'col-12 col-md-6',
        min: 0,
        max: 2
      },
      {
        id: 'f4',
        code: 'coddef4',
        index: 0,
        name: 'f141',
        type: 'date',
        value: undefined,
        disabled: false,
        class: 'col-12 col-md-6',
        required: true
      }
    ]
  }]
}
