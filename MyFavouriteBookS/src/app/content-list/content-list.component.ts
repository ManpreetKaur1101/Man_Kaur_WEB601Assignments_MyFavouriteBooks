import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConetntCardComponent } from '../conetnt-card/conetnt-card.component';
import { ContentTypeFilterPipe } from '../content-type-filter.pipe';
import { ModifyContentComponent } from '../modify-content/modify-content-component';
import { MessageService } from '../message.service';

import { BookService } from '../book.service';
// import { ContentList } from '../helper-files/content-list';
import { Content} from '../helper-files/content-interface'

@Component({
  selector: 'app-content-list',
  standalone:true,
  imports:[CommonModule, ConetntCardComponent, ContentTypeFilterPipe,FormsModule,ModifyContentComponent,MessageService],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
 
})
export class ContentListComponent implements OnInit {
  contentArray: Content[] = [];

  constructor(private bookservice: BookService, private messageService: MessageService) {  }  

  onContentAdded(newContent: Content) {
    this.contentArray.push(newContent);
    this.messageService.sendMessage(`Content '${newContent.title}' added successfully!`);
  }
  ngOnInit() {
    this.loadContentArray();
  }

  loadContentArray() {
    this.bookservice.getContent().subscribe((data) => {
      this.contentArray = data;
      console.log('Content array loaded!');
    });
  }

    searchTitle: string = '';
    searchMsg: string = '';
    searchClr: string = '';

    searchCard(): void{
      const foundContent = this.contentArray.find(content => content.title.toLowerCase() === this.searchTitle); 

      if (foundContent) {
        this.searchMsg = `Title ${this.searchTitle}" exists in Content`;
        this.searchClr = 'green';
      }
      else {
        this.searchMsg = `Title ${this.searchTitle}" doesn't exist in Content`;
        this.searchClr = 'red';
      }
    }
}