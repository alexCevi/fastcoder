import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseDataProviderService {
  constructor() { }

  title: string;
  data: string[];
  accuracy: number;
  question: string;
  number = 0;
  time = 0;

}
