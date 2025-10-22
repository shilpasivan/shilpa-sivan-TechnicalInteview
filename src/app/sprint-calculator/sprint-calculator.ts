import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Story } from '../story';
@Component({
  selector: 'app-sprint-calculator',
  imports: [ReactiveFormsModule],
  templateUrl: './sprint-calculator.html',
  styleUrl: './sprint-calculator.css'
})
export class SprintCalculator {
  sprintForm:FormGroup
  constructor(private fb: FormBuilder,private storyService:Story) {
    this.sprintForm=this.fb.group({
      sprintName:new FormControl('',[Validators.required]),
      sprintCap:new FormControl('',[Validators.required])
    })
  }
  storyCalculation() { 
    if(this.sprintForm.valid){
      this.storyService.setSprintInfo(this.sprintForm.value)
    this.storyService.generateSprintallocation(this.sprintForm.value.sprintCap?this.sprintForm.value.sprintCap:0)
    }
  }
  resetStories() { 
     this.storyService.generateSprintallocation(0)
  }
  resetSprint() { 
    this.sprintForm.reset()
    this.storyService.setSprintInfo(this.sprintForm.value)
    this.resetSprint()
  }

}
