import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculeDegreComponent } from './calcule-degre.component';

describe('CalculeDegreComponent', () => {
  let component: CalculeDegreComponent;
  let fixture: ComponentFixture<CalculeDegreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculeDegreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculeDegreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
