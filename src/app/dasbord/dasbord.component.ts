import { Component, Input } from '@angular/core';
import { Comp2Component } from "../comp2/comp2.component";

@Component({
    selector: 'app-dasbord',
    standalone: true,
    templateUrl: './dasbord.component.html',
    styleUrl: './dasbord.component.css',
    imports: [Comp2Component]
})
export class DasbordComponent {
  @Input() login:string="test";

}
