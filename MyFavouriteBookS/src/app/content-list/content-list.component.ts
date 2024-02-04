import { Component } from '@angular/core';
// import { ContentList } from '../helper-files/content-list';
import { Content} from '../helper-files/content-interface'

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {

  name : string | undefined;
   contentArray: Content[] = [];
   logContentInfo(id: string, title: string) {
    console.log("Content ID:", id);
    console.log("Content Title:", title);
  }
  
  
  constructor(){
  this.contentArray.push(
    
      { 
        id: 1, 
        title: 'Content 1', 
        description: 'Description for Content 1', 
        creator: 'Creator 1', 
        imgURL: 'https://i.guim.co.uk/img/media/a39b7a5a36961a7f4ba5ec245c4a20c43f087c84/0_0_226_346/master/226.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=87a8f9e92fb6146f7e32a0ebd9f386da', 
        type: "", 
        tags: ['Tag1', 'Tag2'] 
      },
      { 
        id: 2, 
        title: 'Content 2', 
        description: 'Description for Content 2', 
        creator: 'Creator 2', 
        imgURL: 'https://www.refinery29.com/images/10229895.jpg', 
        type: 'Type 2', 
        tags: [] 
      },
      { 
        id: 3, 
        title: 'Content 3', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: 'https://product-images-cdn.liketoknow.it/n55_eSfsWH0uGQh0KSVRN7Oorh3IxTG9aepSQjBUC75ZzmGxJNUdLBUdAuGP5KhMZZ2g4UNM5xmQ3qHmUuydfqLp4cOFdGiDf_LfMrLQ3WGRkBbmn7aUPCgoXOu0nR1HcRmXUmQH.1w1Umvt5AN_h9nFllKaxXPTTauY85S2LWfDmWME..ff4opw9Jk-', 
        type: 'Type 3', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 4, 
        title: 'Content 4', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: 'https://rathertoofondofbooks.files.wordpress.com/2019/10/39940912._sy475_-1.jpg?w=630', 
        type: 'Type 3', 
        tags: ['Tag5', 'Tag6'] 
      },  { 
        id: 5, 
        title: 'Content 5', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: 'https://hips.hearstapps.com/hmg-prod/images/harry-potter-and-the-philosopher-s-stone-1615905532.jpg?crop=1xw:1xh;center,top&resize=980:*', 
        type: 'Type 3', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 6, 
        title: 'Content 6', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: 'https://example.com/image3.jpg', 
        type: 'Type 3', 
        tags: ['Tag5', 'Tag6'] 
      }
     );
    

   
    




    
    
    
      // Add more content items if needed
    }

}