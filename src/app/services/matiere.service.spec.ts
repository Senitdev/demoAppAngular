import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { MatiereService } from './matiere.service';

describe('MatiereService', () => {
  let service: MatiereService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(MatiereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
   it('test division',()=>{
    const resultat=16;
     const result=service.divison(2,8);
     expect(result).toBe(resultat);
   })
});
