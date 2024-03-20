import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationComponent } from './operation.component';

fdescribe('OperationComponent', () => {
  let component: OperationComponent;
  let fixture: ComponentFixture<OperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Addition test',()=>{
    let resultat=component.addition(10,5);
    expect(resultat).toBe(15);
  })
  it('Multiplication',()=>{
    let resultat=component.multiplication(10,5);
    expect(resultat).toBe(50);
  })
  it('Soustraction',()=>{
    let resultat=component.soustraction(10,5);
    expect(resultat).toBe(5);
  })
  fit('test age',()=>{
    let age =component.age;
    const button = fixture.nativeElement.querySelector('button');
     button.click();
    spyOn(fixture.componentInstance,'ajoutAge');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector("#compteur").textContent).toContain(1);
  })
  fit('test contenu table',()=>{
    let prenom=fixture.nativeElement.querySelector('tr');
    expect(prenom.textContent).toContain("PapeToure");
  })
});
