import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ElementsModel } from '../../../classes';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() element: ElementsModel;
  @Input() counter: number;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.counter);
    this.formGroup.addControl(this.element.label, new FormControl(this.element.text));
  }

}
