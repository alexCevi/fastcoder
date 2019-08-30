import { Component } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';

@Component({
  selector: 'app-exercisearea',
  templateUrl: './exercisearea.component.html',
  styleUrls: ['./exercisearea.component.scss']
})
export class ExerciseareaComponent {

  topTitle: string;
  clearData: string;
  hasUserStarted = false;
  exerciseData = [];
  currentDisplayedExercise: string;
  currentQuestion = 0;

  constructor(public exerciseService: ExerciseDataProviderService) { }

  validateInput(event: any) {
    if (this.currentDisplayedExercise === event.target.value) {
      this.updateExerciseData();
      this.clearData = '';
    } else {
      // ADD THIS ON BACK SPACE KEY AND COUNT BACKSPACE KEY
      // ADD SHAKE ANIMATION FOR WRONG ANSWER
      // ADD RED GLOW ON CARD
    }
  }

  startExercise() {
    this.hasUserStarted = true;
    this.topTitle = this.exerciseService.exerciseTitle;
    this.exerciseData = this.exerciseService.exerciseData;
    this.updateExerciseData();
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
