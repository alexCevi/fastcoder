import { Component, OnDestroy } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';
import { Router } from '@angular/router';

export class Foo {
  ngOnDestroy(): void {
    console.log("WORKING???");
  }
}

@Component({
  selector: 'app-exercisearea',
  templateUrl: './exercisearea.component.html',
  styleUrls: ['./exercisearea.component.scss']
})
export class ExerciseareaComponent {

  topTitle: string;
  exerciseDataFromService: string[];
  exerciseDataDisplay: string;
  userDataInput: string;
  clearData: string;
  hasUserStarted = false;

  constructor(public exerciseService: ExerciseDataProviderService, private router: Router) { }

  validateInput(event: any) {
    if (this.exerciseDataDisplay === event.target.value) {
      this.exerciseService.updateExerciseData();
      this.exerciseDataDisplay = this.exerciseService.currentDisplayedExercise;
      this.clearData = '';
    } else {
      // TODO ADD SHAKE ANIMATION FOR WRONG ANSWER
      // TODO ADD RED GLOW ON CARD
    }
  }

  startExercise() {
    this.hasUserStarted = true;
    this.topTitle = this.exerciseService.exerciseTitle;
    this.exerciseService.updateExerciseData();
    this.exerciseDataDisplay = this.exerciseService.currentDisplayedExercise;
  }

}
