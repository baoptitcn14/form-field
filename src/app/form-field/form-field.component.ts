import { Component, Input, OnInit } from '@angular/core';
import { FormField } from './form-field';

@Component({
  selector: 'm-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() objectForm: FormField | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
