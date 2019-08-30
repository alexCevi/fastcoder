import { Component } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-exercisearea',
  templateUrl: './exercisearea.component.html',
  styleUrls: ['./exercisearea.component.scss']
})
export class ExerciseareaComponent {

  topTitle: string;
  clearData: string;
  currentDisplayedExercise: string;
  exerciseAccuracy = 0;
  exerciseWpm: number;
  numberOfCorrections = 0;
  expectedExerciseAccuracy = 0;
  hasUserStarted = false;
  exerciseHasFinished = false;
  exerciseData = [];
  currentQuestion = 0;


  constructor(public exerciseService: ExerciseDataProviderService) { }

  validateInput(event: any) {
    if (this.currentDisplayedExercise === event.target.value) {
      this.updateExerciseData();
      this.clearData = '';
    } else if (event.key === 'Backspace') {
      const exerciseDataElement = document.getElementById('questionCardContainer');
      exerciseDataElement.setAttribute('style', 'box-shadow: 0 8px 16px 0 red');

      this.numberOfCorrections++;

      setTimeout(() => {
        exerciseDataElement.setAttribute('style', 'box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);');
      }, 500);
    }
  }

  startExercise() {
    this.hasUserStarted = true;
    this.topTitle = this.exerciseService.exerciseTitle;
    this.exerciseData = this.exerciseService.exerciseData;
    this.updateExerciseData();
  }

  getAccuracy() {
    if (this.numberOfCorrections === 0) {
      this.exerciseAccuracy = 100;
    } else {
      this.exerciseAccuracy = 10 * (this.expectedExerciseAccuracy - this.numberOfCorrections / this.expectedExerciseAccuracy);
      console.log(this.numberOfCorrections, this.expectedExerciseAccuracy);
    }
  }

  updateExerciseData() {
    if (this.currentQuestion < this.exerciseData.length) {
      this.currentDisplayedExercise = this.exerciseData[this.currentQuestion];
      this.currentQuestion++;

      this.expectedExerciseAccuracy += this.currentDisplayedExercise.length;
    } else {
      const exerciseReportContainer = document.getElementById('exerciseWrapper');
      exerciseReportContainer.setAttribute('style', 'height: 700px;');
      this.exerciseHasFinished = true;

      this.getAccuracy();
    }
  }

}
