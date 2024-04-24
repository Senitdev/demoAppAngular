import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieListComponent } from './messagerie-list.component';

describe('MessagerieListComponent', () => {
  let component: MessagerieListComponent;
  let fixture: ComponentFixture<MessagerieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagerieListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagerieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
