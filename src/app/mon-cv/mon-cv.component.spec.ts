import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonCVComponent } from './mon-cv.component';

describe('MonCVComponent', () => {
  let component: MonCVComponent;
  let fixture: ComponentFixture<MonCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonCVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
