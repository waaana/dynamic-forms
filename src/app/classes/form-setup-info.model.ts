import { ElementsModel } from './elements.model';
import { FormGroup } from '@angular/forms';

export class FormSetupInfoModel {
    elements: Array<ElementsModel>;
    formGroup: FormGroup;
}
