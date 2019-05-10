import { Component, OnInit, Input, ViewContainerRef, ViewChild } from '@angular/core';
import { FormSetupInfoModel } from '../../../classes/form-setup-info.model';
import { ElementService } from '../../../service/element/element.service';

@Component({
  selector: 'app-element-container',
  templateUrl: './element-container.component.html',
  styleUrls: ['./element-container.component.scss']
})
export class ElementContainerComponent implements OnInit {

  @Input() formSetupInfo: FormSetupInfoModel;
  @Input() counter: number;
  @ViewChild('formSetupContainer', {read: ViewContainerRef}) formSetupContainer: ViewContainerRef;

  constructor(
    private elementService: ElementService
  ) { }

  ngOnInit() {
    console.log(this.formSetupInfo);
    this.elementService.create(this.formSetupInfo.elements, this.formSetupContainer, this.formSetupInfo.formGroup, this.counter);
  }

}
