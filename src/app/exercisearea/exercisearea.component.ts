import { Component, OnInit, OnDestroy } from '@angular/core';
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
  leaderboardMessage: string;
  leaderboardSpinner: string;



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
      this.exercise.accuracy = Math.floor((userAccuracy / this.expectedAccuracy) * 100);
    }
    this.exercise.validateLeader();
  }

  getNewLeaderName(username: string) {
    this.exercise.leaderUsername = username;
    this.exercise.postNewLeader();
    this.leaderboardMessage = 'leaderboard Updated';
    this.leaderboardSpinner = 'fa fa-spinner fa-spin fa-2x fa-fw';
    setTimeout(() => {
      this.router.navigate(['select']);
    }, 800);
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
  ngOnDestroy() {
    this.timer.clearCount();
    this.exercise.isLeader = false;
  }
}

