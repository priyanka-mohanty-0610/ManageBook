import { TestBed } from '@angular/core/testing';

import { FormCanDeactivateService } from './form-can-deactivate.service';

describe('FormCanDeactivateService', () => {
  let service: FormCanDeactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormCanDeactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
