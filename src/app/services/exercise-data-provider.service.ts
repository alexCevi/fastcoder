import { Injectable } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ExerciseDataProviderService {
  constructor() { }

  title: string;
  data: string[];
  accuracy: number;
  wpm = 0;
  question: string;
  number: number;
  time = 0;

  setExerciseData(exerviseTitle: string, exerciseData: string[]) {
    this.title = exerviseTitle;
    this.data = exerciseData;
    this.wpm = 0;
  }

  timer(controller: boolean) {
    let timerId: any;
    if (controller === true) {
      timerId = setInterval(() => this.wpm++, 1000);
    } else {
      this.time = this.wpm;
      clearInterval(timerId);
    }
  }
}
