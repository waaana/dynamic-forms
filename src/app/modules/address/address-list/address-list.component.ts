import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AddressService } from '../../../service/address/address.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ElementService } from '../../../service/element/element.service';
import { ElementsHttpService } from '../../../service/elements-http/elements-http.service';
import { FormGroup } from '@angular/forms';
import { FormSetupInfoModel } from '../../../classes/form-setup-info.model';
import { ElementsModel } from '../../../classes';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit, OnDestroy {

  addresses: Array<string>;
  addresses$: Subscription;
  elementsFirst$: Subscription;
  formSetupInfoList: Array<FormSetupInfoModel>;
  @ViewChild('elementsContainer', {read: ViewContainerRef}) elementsContainer: ViewContainerRef;

  constructor(
    private addressService: AddressService,
    private elementsHttpService: ElementsHttpService,
    private elementService: ElementService
  ) { }

  ngOnInit() {
    this.addresses$ = this.addressService.getAddresses()
      .subscribe((respAddresses: Array<string>) => {
        this.addresses = respAddresses;
      });
    this.formSetupInfoList = [];
  }

  createSetup(setupType: string) {
    this.elementsFirst$ = this.elementsHttpService.getSetup(setupType)
      .subscribe((respElements: Array<ElementsModel>) => {
        this.insertElements(respElements);
      });
  }

  insertElements(elements: Array<ElementsModel>) {
    const formGroup = new FormGroup({});
    this.formSetupInfoList.push({
      elements,
      formGroup
    });
  }

  ngOnDestroy() {
    this.addresses$.unsubscribe();
    if (this.elementsFirst$) {
      this.elementsFirst$.unsubscribe();
    }
  }

}
