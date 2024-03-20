import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { MesComptesService } from './mes-comptes.service';

describe('MesComptesService', () => {
  let service: MesComptesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(MesComptesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
