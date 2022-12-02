import { Component, OnDestroy } from '@angular/core';
import { FormFieldService } from './form-field/form-field.service';
import { FormField } from './form-field/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  listObjectForm: FormField[] = [
    {
      id: 'a',
      code: 'AA',
      index: 0,
      name: '',
      type: 'form',
      class: 'row',
      items: [{
        id: 'f1',
        code: 'tinh',
        index: 0,
        name: 'Tỉnh',
        type: 'multiple-select',
        value: undefined,
        dataSource: [
          {
            id: 't1',
            name: 'Tỉnh 1'
          },
          {
            id: 't2',
            name: 'Tỉnh 2'
          },
          {
            id: 't3',
            name: 'Tỉnh 3'
          }
        ],
        class: 'col-12 col-md-6',
        selectAll: true,
        search: true
      }]
    }
  ]
  result = {} as any;

  constructor(private formFieldService: FormFieldService) { }

  ngOnDestroy(): void {
    this.formFieldService.destroy();
  }

  onAction(obj: FormField) {
    this.result = this.formFieldService.getResult(obj, {} as any);
    console.log(this.result);
  }
}
