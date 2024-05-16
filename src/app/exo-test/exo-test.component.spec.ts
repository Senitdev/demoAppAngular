import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoTestComponent } from './exo-test.component';

describe('ExoTestComponent', () => {
  let component: ExoTestComponent;
  let fixture: ComponentFixture<ExoTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return "Hello words"',()=>{
 expect(component.maFunction()).toContain('bonjour');

  });
  it('should addition',()=>{
    expect(component.somme(7,6)).toBe(15);
  })
});
