import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { menu } from './sidebarItems';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  constructor(private route:Router){

  }
ngOnInit(): void {

}
Menu:Array<menu>=[
  {
    label:"Home",
    route:"/home",
    icone:"assets/home.png",
    active:true,
  },
  {
    label:"Notifications",
    route:"/notification",
    icone:"assets/notification.png",
    active:true,
  },
  {
    label:"Logout",
    route:"/logout",
    icone:"assets/log-out.png",
    active:true,
  }
]
sloger(){
this.route.navigateByUrl("login");
}
}
