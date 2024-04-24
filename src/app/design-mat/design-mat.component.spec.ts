import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignMatComponent } from './design-mat.component';

describe('DesignMatComponent', () => {
  let component: DesignMatComponent;
  let fixture: ComponentFixture<DesignMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignMatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
