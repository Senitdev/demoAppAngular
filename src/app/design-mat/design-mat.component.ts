import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialoguComponent } from '../dialogu/dialogu.component';
@Component({
  selector: 'app-design-mat',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatDialogModule],
  templateUrl: './design-mat.component.html',
  styleUrl: './design-mat.component.css'
})
export class DesignMatComponent  {
constructor(public dialog:MatDialog){

}
  listeClient:any=[{
  icone:"soucre",
  url:"home"
  },
{
  icone:"test",
  url:"contact"
},
{
  icone:"test2",
  url:"Portfolio"
},
]
openDialog() {
  const dialogRef = this.dialog.open(DialoguComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
  changeInput(event:any){
  console.log(event.target.value);
  }
}
