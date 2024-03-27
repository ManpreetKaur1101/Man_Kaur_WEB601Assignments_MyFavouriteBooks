import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
standalone:true,
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit {
  messages: string[]=[];

constructor (private messageService: MessageService){}

  ngOnInit(): void {
    this.messageService.messages.subscribe((message: any) => {
      this.messages.push(message);
  })
}
}