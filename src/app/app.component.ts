import { Component, OnDestroy } from '@angular/core';
import { FormFieldService } from './form-field/form-field.service';
import { FormField } from './form-field/form-field';
import { MButton } from './form-field/components/m-button/m-button.component';

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
      valid: true,
      items: [
        {
          id: 'table1',
          code: 'table1',
          index: 0,
          name: 'Table',
          type: 'table',
          value: undefined,
          class: 'col-12 col-md-12',
          t_actions: {
            width: 101,
            list: [
              {
                code: 'edit',
                default: true,
                click: (data: any) => this.openModalEdit(data)
              },
              {
                code: 'delete',
                default: true,
                class: 'ml-2',
                click: (data: any) => this.openModalEdit(data)
              }
            ]
          },
          t_filters: {
            multi: true,
            list: [
              {
                key: 'age',
                name: 'Age',
                value: null,
                class: 'ml-3',
                selectAll: true,
                dataSource: [
                  {
                    id: '27',
                    name: '27'
                  },
                  {
                    id: '25',
                    name: '25'
                  }
                ]
              },
              {
                key: 'gender',
                name: 'Gender',
                value: null,
                selectAll: true,
                class: 'ml-3',
                dataSource: [
                  {
                    id: 'male',
                    name: 'Male'
                  },
                  {
                    id: 'female',
                    name: 'Female'
                  }
                ]
              }
            ]
          },
          dataSource: [
            {
              t_headers: [
                {
                  key: 'name',
                  name: 'Name',
                  type: 'text',
                  class: 'text-center'
                },
                {
                  key: 'age',
                  name: 'Ages',
                  type: 'i_text'
                },
                {
                  key: 'cccd',
                  name: 'CCCD',
                  type: 'text'
                },
                {
                  key: 'phoneNumber',
                  name: 'Phone number',
                  type: 'text'
                },
                {
                  key: 'gender',
                  name: 'Gender',
                  type: 'text'
                }
              ],
              t_records: [
                {
                  actions: {
                    name: [
                      {
                        code: 'approve',
                        default: true,
                        click: (data: any) => this.openModalEdit(data)
                      }
                    ]
                  },
                  value: {
                    name: 'dinh the bao',
                    age: 27,
                    cccd: '99999999',
                    phoneNumber: '0938515174',
                    gender: 'female'
                  },
                },
                {
                  value: {
                    name: 'dinh thi thuy vui',
                    age: 25,
                    cccd: '88888888',
                    phoneNumber: '0938515171',
                    gender: 'male'
                  },
                }
              ]
            }
          ]
        }
      ]
    }
  ]
  result = {} as any;

  constructor(private formFieldService: FormFieldService) { }

  ngOnDestroy(): void {
    this.formFieldService.destroy();
  }

  openModalEdit(data: any) {
    console.log(data);
  }

  // onAction(obj: FormField) {
  //   this.result = this.formFieldService.getResult(obj, {} as any);
  //   console.log(this.result);
  // }
}
