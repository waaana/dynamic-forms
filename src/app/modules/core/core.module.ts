import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ElementContainerComponent } from './element-container/element-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputComponent,
    TextAreaComponent,
    HeaderComponent,
    ElementContainerComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    ElementContainerComponent
  ],
  entryComponents: [
    InputComponent,
    TextAreaComponent,
  ]
})
export class CoreModule { }
