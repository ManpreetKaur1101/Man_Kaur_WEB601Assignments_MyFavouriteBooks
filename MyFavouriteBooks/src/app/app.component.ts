import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  singleContentItem: any;
  title ='Manpreet_Kaur';
  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
  
    this.loadSingleContentItem();
  }

  loadSingleContentItem() {
    const idOfContentItemToLoad = 1; 
    this.bookservice.getContentById(idOfContentItemToLoad).subscribe((data: any) => {
      this.singleContentItem = data;
      console.log(`Content Item at id: ${idOfContentItemToLoad}`);
    });
  }

  
}