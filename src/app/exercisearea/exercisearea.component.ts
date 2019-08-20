import { Component, OnInit } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';

@Component({
  selector: 'app-exercisearea',
  templateUrl: './exercisearea.component.html',
  styleUrls: ['./exercisearea.component.scss']
})
export class ExerciseareaComponent implements OnInit {

  topTitle: string;
  exerciseDataFromService: string[];
  exerciseDataDisplay: string;
  userDataInput: string;


  // topTitle: string;
  // exerciseData: string;

  constructor(public setExerciseType: ExerciseDataProviderService) { }

  displayExercise(exerciseData: string[]) {
    let i = 0;
    this.exerciseDataDisplay = exerciseData[i];
    i++;
  }

  validateResponse(userInput: string) {
    if (userInput === this.exerciseDataDisplay) {
      console.log('valid');
      this.displayExercise(this.exerciseDataFromService);
    } else {
      console.log('not valid');
    }
  }


  startExercise() {
    this.displayExercise(this.exerciseDataFromService);
  }

  ngOnInit() {
    this.topTitle = this.setExerciseType.exerciseTitle;
    this.exerciseDataFromService = this.setExerciseType.exerciseData;

    // TESTING DATA REMOVE FROM PROD
    // this.topTitle = "JavaScript";
    // this.exerciseData = "DATA ONE";
  }


}

