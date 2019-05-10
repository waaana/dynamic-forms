import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAddresses(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>('service/address');
  }
}
