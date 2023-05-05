import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSource, FormField } from '../../form-field';

@Component({
  selector: 'app-m-form-controls',
  templateUrl: './m-form-controls.component.html',
  styleUrls: ['./m-form-controls.component.scss']
})
export class MFormControlsComponent implements OnInit {

  constructor() { }
  @Input() input:InputBase<string>[] | null = []
  @Output('onSave') onSave = new EventEmitter<any>();
  form!: FormGroup;
  payLoad = '';
  listOption:any=[]; 
  listString:string ="";
  dataSource:DataSource[] = [
    {
      id: 'male',
      name: 'Male'
    },
    {
      id: 'female',
      name: 'Female'
    }
  ]
  ngOnInit(): void {
    if((this.input as InputBase<string>[]).length > 0)
    this.form = this.toFormGroup(
      (this.input as InputBase<string>[]).sort((a:any, b:any) => a.order - b.order)
    );
  }
  toFormGroup(input:InputBase<string>[]) {
    const controls: any = {};
    input.forEach(input => {
     if(input.key){

      controls[input.key] = input.required ? new FormControl(input.value || '', Validators.required)
                                           : new FormControl(input.value || '');
     }
      
    });
    return new FormGroup(controls);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    console.log(this.form.value)
  }
  onGetValue(value : Options<string>,element :any){
    (this.listOption as Options<string>[]).push(value)
      this.form.controls[element.toString()].setValue(JSON.stringify(this.listOption));
  }
}


export class InputBase<T>{
  value?: T|undefined;
  key?: string | '';
  name?: string | '';
  required?: boolean | '';
  order?: number | null;
  controlType?: string | '';
  type?: string | '';
  options?: Options<string>[] | null;
}
export class Options<T>{
  key ?: string | '';
  value?:T|undefined;
}