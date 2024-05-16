import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrofichierComponent } from './grofichier.component';

describe('GrofichierComponent', () => {
  let component: GrofichierComponent;
  let fixture: ComponentFixture<GrofichierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrofichierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrofichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
