import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { InputComponent } from '@ref-core/input/input.component';
import { TextAreaComponent } from '@ref-core/text-area/text-area.component';
import { FormGroup } from '@angular/forms';
import { ElementsModel } from '../../classes';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  clear(elementsContainer: ViewContainerRef) {
    elementsContainer.clear();
  }

  create(elements: Array<ElementsModel>, elementsContainer: ViewContainerRef, formGroup: FormGroup, counter: number) {
    elements.forEach((element: ElementsModel) => {
      switch (element.type) {
        case 'input':
          const inputElRef =
            elementsContainer.createComponent(this.componentFactoryResolver.resolveComponentFactory<any>(InputComponent));
          (inputElRef.instance as any).element = element;
          (inputElRef.instance as any).counter = counter;
          (inputElRef.instance as any).formGroup = formGroup;
          break;
        case 'textarea' :
          const textAreaElRef =
            elementsContainer.createComponent(this.componentFactoryResolver.resolveComponentFactory<any>(TextAreaComponent));
          (textAreaElRef.instance as any).element = element;
          (textAreaElRef.instance as any).counter = counter;
          (textAreaElRef.instance as any).formGroup = formGroup;
          break;
        default:
          console.error('input type not found');
      }
    });
  }
}
