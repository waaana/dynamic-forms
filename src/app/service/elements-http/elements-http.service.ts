import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElementsModel } from '../../classes';

@Injectable({
  providedIn: 'root'
})
export class ElementsHttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getSetup(setupType: string): Observable<Array<ElementsModel>> {
    return this.httpClient.get<Array<ElementsModel>>(`service/elements/setup/${setupType}`);
  }
}
