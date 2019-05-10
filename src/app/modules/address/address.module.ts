import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressRoutingModule } from './address-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    AddressListComponent,
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class AddressModule { }
