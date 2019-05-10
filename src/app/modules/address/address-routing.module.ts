import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';

const addressdRoutes: Routes = [
    {
        path: '',
        component: AddressListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(addressdRoutes)],
    exports: [RouterModule]
})
export class AddressRoutingModule {}
