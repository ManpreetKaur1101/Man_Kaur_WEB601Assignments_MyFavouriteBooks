import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();
  title="My Application"
  constructor() {
    // Adding at least 3 valid items
    this.contentList.add({ id: 1,
       title: 'ATOMIC HABITS',
     description: 'An Easy & Proven Way ',
      creator: 'Pinterest',
       imgURL: 'https://th.bing.com/th/id/OIP.GrpH9JDoMBIB_jDCx4f5kAAAAA?w=216&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        type: 'Type 1', });

    this.contentList.add({ id: 2, 
      title: 'True Girt',
       description: ' ABA Nielsen BookData', 
       creator: 'David Hunt',
        imgURL: 'https://files.readanybook.com/1185183/epub/true-girt-the-unauthorised-history-of-australia-volume-2-david-hunt.epub/OEBPS/Images/0.jpg',
         type: 'Type 2' });

    this.contentList.add({ id: 3,
       title: 'Just keep swimming',
        description: 'journal and place ', 
        creator: '	Colleen Hoover', 
        imgURL: 'https://i.pinimg.com/236x/63/09/16/6309167401ecc4c843c28eca53d9de42.jpg?nii=t',
         type: 'Type 3' });
  }

  ngOnInit(): void {
    console.log(this.contentList)

  }
}