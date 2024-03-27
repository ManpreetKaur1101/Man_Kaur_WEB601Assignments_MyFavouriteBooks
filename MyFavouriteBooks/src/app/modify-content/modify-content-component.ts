import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { BookService } from '../book.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: [] as string[]
  };
  tagsString: string = '';

  @Output() contentAdded = new EventEmitter<Content>();

  constructor(private bookService: BookService, private messageService: MessageService) {}

  addNewContent() {
    this.newContent.tags = this.tagsString.split(',');

    this.bookService.addContent(this.newContent).subscribe((newContentWithId: Content | undefined) => {
      if (newContentWithId) {
        this.contentAdded.emit(newContentWithId);
        this.messageService.sendMessage(`Content '${newContentWithId.title}' added successfully.`);
        this.clearFields();
      }
    });
  }

  clearFields() {
    this.newContent = {
      id: 0,
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: []
    };
    this.tagsString = '';
  }
}
