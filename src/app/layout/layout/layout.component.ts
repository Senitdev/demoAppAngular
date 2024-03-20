import { Component } from '@angular/core';
import { FollowComponent } from "../composant/follow/follow.component";
import { HeaderComponent } from "../composant/header/header.component";
import { SidebarComponent } from "../composant/sidebar/sidebar.component";
@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
    imports: [HeaderComponent, FollowComponent, SidebarComponent]
})
export class LayoutComponent {

}
