import { Component } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercisearea',
  templateUrl: './exercisearea.component.html',
  styleUrls: ['./exercisearea.component.scss']
})
export class ExerciseareaComponent {

  topTitle: string;
  exerciseDataDisplay: string;
  userDataInput: string;
  clearData: string;
  hasUserStarted = false;
  exerciseData = [];
  currentDisplayedExercise: string;
  currentQuestion = 0;

  constructor(public exerciseService: ExerciseDataProviderService, private router: Router) { }

  validateInput(event: any) {
    if (this.exerciseDataDisplay === event.target.value) {
      this.updateExerciseData();
      this.exerciseDataDisplay = this.currentDisplayedExercise;
      this.clearData = '';
    } else {
      // ADD THIS ON BACK SPACE KEY AND COUNT BACKSPACE KEY
      // TODO ADD SHAKE ANIMATION FOR WRONG ANSWER
      // TODO ADD RED GLOW ON CARD
    }
  }

  startExercise() {
    this.hasUserStarted = true;
    this.topTitle = this.exerciseService.exerciseTitle;
    this.exerciseData = this.exerciseService.exerciseData;
    this.updateExerciseData();
    this.exerciseDataDisplay = this.currentDisplayedExercise;

  }

  updateExerciseData() {
    if (this.currentQuestion < this.exerciseData.length) {
      this.currentDisplayedExercise = this.exerciseData[this.currentQuestion];
      this.currentQuestion++;
    } else {
      console.log('done');
    }
  }

}
