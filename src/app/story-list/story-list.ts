import { Component, OnInit } from '@angular/core';
import { Story } from '../story';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-story-list',
  imports: [CommonModule],
  templateUrl: './story-list.html',
  styleUrl: './story-list.css'
})
export class StoryList implements OnInit{
stories: any[] = [];
constructor(private storyService: Story) { 
}
ngOnInit(){
this.storyService.initialStories.subscribe(res=>{
  this.stories = res.length?res:[];
})
}
}
