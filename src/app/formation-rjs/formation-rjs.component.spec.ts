import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationRjsComponent } from './formation-rjs.component';

describe('FormationRjsComponent', () => {
  let component: FormationRjsComponent;
  let fixture: ComponentFixture<FormationRjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationRjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormationRjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
