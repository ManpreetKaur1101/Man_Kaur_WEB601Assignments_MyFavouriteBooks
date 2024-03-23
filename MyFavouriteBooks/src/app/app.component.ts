import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  topContentItem: Content; 

  constructor(private service: BookService) { }

  ngOnInit(): void {
  
    this.service.getContentById(6).subscribe((res: any) => {
      this.topContentItem = res;
    });
  }
}