import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-test',
  standalone: true,
  imports: [],
  templateUrl: './exo-test.component.html',
  styleUrl: './exo-test.component.css'
})
export class ExoTestComponent {
maFunction(){
  return "Hello words"
}
somme(a:number,b:number){
  return a+b;
}
}
