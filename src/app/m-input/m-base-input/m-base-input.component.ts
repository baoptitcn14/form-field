import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/form-field/form-field';

@Component({
  selector: 'm-base-input',
  templateUrl: './m-base-input.component.html',
  styleUrls: ['./m-base-input.component.scss']
})
export class MBaseInputComponent implements OnInit {

  @Input() itemData: Item | any;

  constructor() { }

  ngOnInit(): void {
  }

}
