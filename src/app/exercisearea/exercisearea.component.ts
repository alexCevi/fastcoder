import { Component } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-exercisearea',
  templateUrl: './exercisearea.component.html',
  styleUrls: ['./exercisearea.component.scss']
})
export class ExerciseareaComponent {

  corrections = 0;
  expectedAccuracy = 0;
  hasStarted = false;
  hasFinished = false;

  constructor(public exercise: ExerciseDataProviderService, public timer: TimerService) { }

  validateInput(event: any) {
    if (this.exercise.question === event.target.value) {
      this.updateExerciseData();
      (document.getElementById('userInput') as HTMLInputElement).value = '';

    } else if (event.key === 'Backspace') {
      const exerciseDataElement = document.getElementById('questionCardContainer');
      exerciseDataElement.setAttribute('style', 'box-shadow: 0 8px 16px 0 red');
      this.corrections++;

      setTimeout(() => {
        exerciseDataElement.setAttribute('style', 'box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);');
      }, 500);
    }
  }

  start() {
    this.hasStarted = true;
    this.exercise.number = 0;
    this.updateExerciseData();
    this.timer.startCount();
  }

  getAccuracy() {
    const exerciseReportContainer = document.getElementById('exerciseWrapper');
    exerciseReportContainer.setAttribute('style', 'height: 700px;');

    if (this.corrections === 0) {
      this.exercise.accuracy = 100;
    } else {
      this.exercise.accuracy = Math.round(10 * (this.expectedAccuracy - this.corrections / this.expectedAccuracy));
    }
  }

  updateExerciseData() {
    if (this.exercise.number < this.exercise.data.length) {
      this.exercise.question = this.exercise.data[this.exercise.number];
      this.exercise.number++;
      this.expectedAccuracy += this.exercise.question.length;
    } else {
      this.getAccuracy();
      this.hasFinished = true;
      this.timer.clearCount();
    }
  }

  restart() {
    this.corrections = 0;
    this.expectedAccuracy = 0;
    this.hasStarted = false;
    this.hasFinished = false;
  }
}
