import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogu',
  standalone: true,
  imports: [MatButton,MatDialogClose,MatDialogActions,MatDialogContent],
  templateUrl: './dialogu.component.html',
  styleUrl: './dialogu.component.css'
})
export class DialoguComponent {

}
