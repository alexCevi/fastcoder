import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseDataProviderService {

  constructor() { }

  exerciseTitle: string;
  exerciseData: string[];
  currentDisplayedExercise: string;
  currentQuestion = 0;

  setExerciseData(exerviseTitle: string, exerciseData: string[]) {
    this.exerciseTitle = exerviseTitle;
    this.exerciseData = exerciseData;
  }

  updateExerciseData() {
    this.currentDisplayedExercise = this.exerciseData[this.currentQuestion];
    this.currentQuestion++;
  }
}
