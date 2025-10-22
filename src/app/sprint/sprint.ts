import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Story } from '../story';
@Component({
  selector: 'app-sprint',
  imports: [CommonModule],
  templateUrl: './sprint.html',
  styleUrl: './sprint.css'
})
export class Sprint {
  allocatedstories: any = [];
  sprintDetails: any = {};
  constructor(private storyService: Story) {

  }
  ngOnInit() {
    this.storyService.sprintAllocatedStories.subscribe(res => {
      this.allocatedstories = res
    })
    this.storyService.sprintInformation$.subscribe(res => {
      this.sprintDetails = res
    })
  }
}
