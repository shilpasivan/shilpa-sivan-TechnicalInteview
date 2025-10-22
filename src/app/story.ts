import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Story {
  stories: any[] = [];
  spintDetails = new BehaviorSubject<any>({});
  sprintInformation$ = this.spintDetails.asObservable();
  sprintAllocationStory = new BehaviorSubject<any>([]);
  sprintAllocatedStories = this.sprintAllocationStory.asObservable();
  initialStories = new BehaviorSubject<any>([]);
  stories$ = this.initialStories.asObservable();
  addStory(story: any) {
    if (!this.stories.find(s => s?.name.toLowerCase() === story?.name.toLowerCase())) {
      this.stories.push(story);
      console.log("Print the details", this.stories)
      this.initialStories.next(this.stories)
    }


  }
  getStories() {
    return this.stories;
  }
  setSprintInfo(sprint: any) {
    this.spintDetails.next(sprint)
  }
  generateSprintallocation(cap: number) {
    const availableSets = this.getSUbSetOfArray();
    let sum = 0;
    let selectedStories: any = []
    console.log(availableSets, 'availableSets')
    debugger;
    for (let avail of availableSets) {
      let sum = 0;
      for (let story of avail) {
        sum = sum + story?.point;

      }
      console.log(sum, 'sum')
      if (sum <= cap) {
        selectedStories = avail
      }
    }
    this.sprintAllocationStory.next(selectedStories)

  }
  getSUbSetOfArray() {
    let subsets: any[][] = [[]];
    for (const value of this.stories) {
      const newSubsets = subsets.map(s => [...s, value]);
      subsets = [...subsets, ...newSubsets];
    }
    return subsets.filter(s => s.length > 0);
  }

}
