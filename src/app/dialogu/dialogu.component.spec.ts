import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoguComponent } from './dialogu.component';

describe('DialoguComponent', () => {
  let component: DialoguComponent;
  let fixture: ComponentFixture<DialoguComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialoguComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialoguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
