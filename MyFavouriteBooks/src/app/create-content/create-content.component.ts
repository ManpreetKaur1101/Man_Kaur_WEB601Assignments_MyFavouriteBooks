import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();

  id: number = 0;
  title: string = '';
  description: string = ''; // Assigning default value to description
  creator: string = ''; 
  imgURL: string | undefined;
  type: string | undefined;
  tags: string[] = [];

  createContent() {
    const newContent: Content = {
      id: this.id,
      title: this.title,
      description: this.description,
      creator: this.creator,
      imgURL: this.imgURL,
      type: this.type,
      tags: this.tags
    };

    this.contentAdded.emit(newContent);
    // Clear input fields after emitting the new content
    this.clearFields();
  }

  clearFields() {
    this.id =0;
    this.title = '';
    this.description = '';
    this.creator = '';
    this.imgURL = '';
    this.type = '';
    this.tags = [];
  }
}