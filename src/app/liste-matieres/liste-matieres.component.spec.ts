import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { ListeMatieresComponent } from './liste-matieres.component';

describe('ListeMatieresComponent', () => {
  let component: ListeMatieresComponent;
  let fixture: ComponentFixture<ListeMatieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeMatieresComponent,Router]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
