import { TestBed } from '@angular/core/testing';

import { GrosfichierService } from './grosfichier.service';

describe('GrosfichierService', () => {
  let service: GrosfichierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrosfichierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
