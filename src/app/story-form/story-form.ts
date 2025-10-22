import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Story } from '../story';
@Component({
  selector: 'app-story-form',
  imports: [ReactiveFormsModule],
  templateUrl: './story-form.html',
  styleUrl: './story-form.css'
})
export class StoryForm {
  storyForm !: FormGroup
  constructor(private fb: FormBuilder, private storyService: Story) {
    this.storyForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      point: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required])
    });
  }
  formSubmit() {
    console.log(this.storyForm.value)
    debugger;
    if (this.storyForm.valid && this.storyForm.value.name != null && this.storyForm.value.point != null && this.storyForm.value.desc != null) {
      this.storyService.addStory(this.storyForm.value);
      this.storyForm.reset();
    }
    else {
      alert("Invalid FormFields");
    }
  }
}
