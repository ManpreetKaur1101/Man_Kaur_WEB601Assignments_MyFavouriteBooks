import { CommonModule  } from '@angular/common';
import { Component, Input,OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { HoverAffectDirective } from '../hover-affect.directive';

@Component({
  selector: 'app-conetnt-card',
  standalone: true,
  imports:[CommonModule, HoverAffectDirective],
  templateUrl: './conetnt-card.component.html',
  styleUrl: './conetnt-card.component.scss'
})
export class ConetntCardComponent {
@Input() item: any;
  defaultImageUrl:string='https://static.vecteezy.com/system/resources/previews/022/448/291/non_2x/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg';
onCardClick(content: any): void {
    console.log(`Card Clicked - ID: ${content.id} and Title: ${content.title}`);
  }
}
