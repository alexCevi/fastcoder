import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseDataProviderService {
  constructor() { }

  exerciseTitle: string;
  exerciseData: string[];

  setExerciseData(exerviseTitle: string, exerciseData: string[]) {
    this.exerciseTitle = exerviseTitle;
    this.exerciseData = exerciseData;
  }

}
