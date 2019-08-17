import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseDataProviderService {

  constructor() { }

  exerciseTitle: string;
  exerciseData: string[];

  testingDataPass(exerciseName: string, exerciseData: string[]) {
    this.exerciseTitle = exerciseName;
    this.exerciseData = exerciseData;

  }
}
