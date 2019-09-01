import { Component } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';
import { TimerService } from '../services/timer.service';
import { CardmodifierService } from '../services/cardmodifier.service';

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

  constructor(public exercise: ExerciseDataProviderService, public timer: TimerService, private cardEffects: CardmodifierService) { }

  validateInput(event: any) {
    if (event.target.value === this.exercise.data[this.exercise.number]) {
      this.updateExerciseData();
      (document.getElementById('userInput') as HTMLInputElement).value = '';

    } else if (event.key === 'Backspace') {
      this.corrections++;
      this.cardEffects.error();

    }
  }

  start() {
    this.hasStarted = true;
    this.exercise.number = 0;
    console.log(this.exercise.data[this.exercise.number]);
    this.timer.startCount();
  }

  getAccuracy() {
    this.cardEffects.extended();
    if (this.corrections === 0) {
      this.exercise.accuracy = 100;
    } else {
      this.exercise.accuracy = Math.round(10 * (this.expectedAccuracy - this.corrections / this.expectedAccuracy));
      console.log('correction' + this.corrections);
    }
  }

  updateExerciseData() {
    if (this.exercise.number < this.exercise.data.length - 1) {
      this.exercise.number++;
      this.expectedAccuracy += this.exercise.data[this.exercise.number].length;
      console.log(this.exercise.data.length);
    } else {
      this.getAccuracy();
      this.hasFinished = true;
      this.timer.clearCount();
    }
  }

  restart() {
    this.cardEffects.shorten();
    this.corrections = 0;
    this.expectedAccuracy = 0;
    this.hasStarted = false;
    this.hasFinished = false;
    this.timer.clearCount();
  }
}
