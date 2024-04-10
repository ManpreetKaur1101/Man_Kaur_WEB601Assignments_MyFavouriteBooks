import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { NewDialogComponent } from '../new-dialog/new-dialog.component';

@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.scss'
})
export class ModifyContentComponent {
  newContent: Content = {
    id: null,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: [] as string[]
  };
  tagsString: string = '';

  @Output() contentAdded = new EventEmitter<Content>();

  constructor(private BookService: BookServiceService, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewDialogComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.BookService.addContent(this.newContent).subscribe((newContentWithId) => {
          this.contentAdded.emit(newContentWithId); 
          
        });
      }
    });
  }

 

  // addNewContent() {
  //   this.newContent.tags = this.tagsString.split(',');

  //   this.BookService.addContent(this.newContent).subscribe((newContentWithId) => {
  //     this.contentAdded.emit(newContentWithId); 
  //     this.clearFields(); 
  //   });
  // }

  
}
