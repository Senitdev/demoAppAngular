import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [FormsModule, SidebarComponent]
})
export class HeaderComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {

  }
}
