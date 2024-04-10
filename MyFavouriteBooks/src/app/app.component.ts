import { Component, OnInit } from '@angular/core';
import { BookServiceService } from './book-service.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'MyFavouriteBooks';
  singleContentItem: any;

  constructor(private BookService: BookServiceService) {}
  ngOnInit(): void {
    this.loadSingleContentItem();
  }

  loadSingleContentItem() {
    const idOfContentItemToLoad = 3; 
    this.BookService.getContentItemById(idOfContentItemToLoad).subscribe((data) => {
      this.singleContentItem = data;
      console.log(`Content Item at id: ${idOfContentItemToLoad}`);
    });
  }

  
}
