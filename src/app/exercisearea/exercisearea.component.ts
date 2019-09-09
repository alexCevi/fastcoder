import { Component, OnInit } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';
import { TimerService } from '../services/timer.service';
import { CardmodifierService } from '../services/cardmodifier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercisearea',
  templateUrl: './exercisearea.component.html',
  styleUrls: ['./exercisearea.component.scss']
})
export class ExerciseareaComponent implements OnInit {

  corrections = 0;
  expectedAccuracy = 0;
  hasStarted = false;
  hasFinished = false;


  constructor(
    public exercise: ExerciseDataProviderService,
    public timer: TimerService,
    private cardEffects: CardmodifierService,
    public router: Router) { }

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
    this.timer.startCount();
  }

  getAccuracy() {
    this.cardEffects.extended();
    if (this.corrections === 0) {
      this.exercise.accuracy = 100;
    } else {
      let userAccuracy = this.expectedAccuracy - this.corrections;
      this.exercise.accuracy = (userAccuracy / this.expectedAccuracy) * 100;
      console.log(this.expectedAccuracy);
      console.log(this.corrections);
    }
  }

  updateExerciseData() {
    if (this.exercise.number < this.exercise.data.length - 1) {
      this.exercise.number++;
      this.expectedAccuracy += this.exercise.data[this.exercise.number].length;
    } else {
      this.getAccuracy();
      this.hasFinished = true;
      this.timer.clearCount();
    }
  }

  restart() {
    this.cardEffects.shorten();
    this.timer.clearCount();
    this.corrections = 0;
    this.expectedAccuracy = 0;
    this.hasStarted = false;
    this.hasFinished = false;
  }

  ngOnInit() {
    if (this.exercise.title === undefined) {
      this.router.navigate(['select']);
    }
  }
}
