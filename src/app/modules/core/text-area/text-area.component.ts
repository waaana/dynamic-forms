import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ElementsModel } from '../../../classes';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  @Input() element: ElementsModel;
  @Input() counter: number;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup.addControl(this.element.label, new FormControl(this.element.text));
  }

}
