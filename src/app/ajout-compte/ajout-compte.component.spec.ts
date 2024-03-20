import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AjoutCompteComponent } from './ajout-compte.component';

describe('AjoutCompteComponent', () => {
  let component: AjoutCompteComponent;
  let fixture: ComponentFixture<AjoutCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutCompteComponent,Router,HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
