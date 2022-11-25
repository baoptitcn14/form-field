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
    name: '',
    type: 'form',
    class: 'row',
    items: [
      {
        id: 'g1',
        code: 'group1',
        index: 0,
        name: 'group 1',
        class: 'col-12 col-md-12',
        type: 'group',
        alignName: 'center',
        items: [
          {
            id: 'g1_i1',
            name: 'g1 i1',
            type: 'text',
            class: 'col-12 col-md-6',
            index: 0,
            value: undefined
          },
          {
            id: 'g1_i2',
            name: 'g1 i2',
            type: 'text',
            class: 'col-12 col-md-6',
            index: 1,
            value: undefined,
            formulaRefIds: ['f6']
          },
          {
            id: 'g1_i3',
            name: 'g1 i3',
            type: 'select',
            class: 'col-12 col-md-12',
            index: 2,
            value: undefined,
            dataSource: [
              {
                id: 't1',
                name: 'UI'
              },
              {
                id: 't2',
                name: 'T 2'
              }
            ],
            dataSourceRefIds: [{ id: 'f2', key: 'refId' }]
          }
        ]
      },
      {
        id: 'f1',
        code: 'coddef',
        index: 0,
        name: 'Tỉnh',
        type: 'select',
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
        formulaRefIds: ['f6'],
        dataSourceRefIds: [{ id: 'f2', key: 'refId' }],
        selectAll: true
      },
      {
        id: 'f2',
        code: 'coddef4',
        index: 1,
        name: 'Thành phố, Huyện',
        type: 'select',
        dataSource: [
          {
            id: 'select1',
            name: 'select 1',
            refId: 't1'
          },
          {
            id: 'select2',
            name: 'select 2',
            refId: 't2'
          },
          {
            id: 'select3',
            name: 'select 3',
            refId: 't3'
          }
        ],
        _dataSource: [
          {
            id: 'select1',
            name: 'select 1',
            refId: 't1'
          },
          {
            id: 'select2',
            name: 'select 2',
            refId: 't2'
          },
          {
            id: 'select3',
            name: 'select 3',
            refId: 't3'
          }
        ],
        value: undefined,
        required: true,
        disabled: false,
        class: 'col-12 col-md-6',
        search: true,
        formulaRefIds: ['f6']
      },
      {
        id: 'f3',
        code: 'coddef',
        index: 2,
        name: 'Số nhà',
        type: 'number',
        value: 3,
        required: true,
        class: 'col-12 col-md-6',
        min: 0,
        max: 2,
        formulaRefIds: ['f6']
      },
      {
        id: 'f4',
        code: 'coddef4',
        index: 5,
        name: 'Ngày',
        type: 'date',
        value: undefined,
        disabled: false,
        class: 'col-12 col-md-6',
        required: true,
        formulaRefIds: ['f6']
      },
      {
        id: 'f6',
        code: 'coddef4',
        index: 6,
        name: 'Địa chỉ',
        type: 'text',
        value: undefined,
        disabled: true,
        class: 'col-12 col-md-12',
        formular: 'f4+f3+f555+f2+f1+g1_i2'
      },
      {
        id: 'f555',
        code: 'coddef555',
        index: 92,
        name: 'text',
        type: 'text',
        value: undefined,
        class: 'col-12 col-md-12',
        formulaRefIds: ['f6']
      },
      {
        id: 'f5',
        code: 'coddef5',
        index: 99,
        name: 'table',
        type: 'table',
        value: undefined,
        class: 'col-12 col-md-12',
        dataSource: [
          {
            headers: [
              {
                key: 'surname',
                name: 'Họ'
              },
              {
                key: 'lastname',
                name: 'Tên'
              },
              {
                key: 'ages',
                name: 'Tuổi'
              }
            ],
            datas: [
              {
                surname: 'Đinh Thế',
                lastname: 'Bảo',
                ages: 27
              }
            ]
          }
        ]
      }
    ]
  }];

  result = {} as any;

  ac(obj: FormField) {
    obj.items?.forEach(e => {
      if (e != undefined) {
        if (e.type == 'form' || e.type == 'group') {
          this.ac(e);
        } else if (e.type !== 'table') {
          if (e.id)
            this.result[e.id] = e.value;
        }
      }
    });

    console.log(this.result)
  }

  // {
  //     "g1_i1": "123",
  //     "g1_i2": "asdasd",
  //     "f2": "select3",
  //     "f3": 2,
  //     "f4": "2022-11-24T17:00:00.000Z",
  //     "f6": "25/11/2022 2 sad123asdasd select 3  ",
  //     "f555": "sad123asdasd"
  // }
}
