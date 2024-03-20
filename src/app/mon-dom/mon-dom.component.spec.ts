import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonDomComponent } from './mon-dom.component';

describe('MonDomComponent', () => {
  let component: MonDomComponent;
  let fixture: ComponentFixture<MonDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonDomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
