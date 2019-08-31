import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseDataProviderService {
  constructor() { }

  title: string;
  data: string[];
  accuracy: number;
  wpm: number;
  question: string;
  number: number;

  setExerciseData(exerviseTitle: string, exerciseData: string[]) {
    this.title = exerviseTitle;
    this.data = exerciseData;
  }

}
