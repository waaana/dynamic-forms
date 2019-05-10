import { TestBed } from '@angular/core/testing';

import { ElementsHttpService } from './elements-http.service';

describe('ElementsHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementsHttpService = TestBed.get(ElementsHttpService);
    expect(service).toBeTruthy();
  });
});
