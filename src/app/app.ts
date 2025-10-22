import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoryForm } from './story-form/story-form';
import { ReactiveFormsModule } from '@angular/forms';
import { StoryList } from './story-list/story-list';
import { CommonModule } from '@angular/common';
import { SprintCalculator } from './sprint-calculator/sprint-calculator';
import { Sprint } from './sprint/sprint';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StoryForm, ReactiveFormsModule, StoryList,CommonModule,SprintCalculator,Sprint],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'projectOne';
}
