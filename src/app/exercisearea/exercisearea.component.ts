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
  exerciseDataDisplay: any;
  userDataInput: string;

  constructor(public exerciseService: ExerciseDataProviderService) { }

  validateResponse(userInputData: string) {
    if (userInputData === this.exerciseService.currentDisplayedExercise) {
      console.log('valid');
      this.exerciseService.updateExerciseData();
      this.exerciseDataDisplay = this.exerciseService.currentDisplayedExercise;
    } else {
      console.log('not working');
    }
  }

  ngOnInit() {
    this.topTitle = this.exerciseService.exerciseTitle;
    this.exerciseService.updateExerciseData();
    this.exerciseDataDisplay = this.exerciseService.currentDisplayedExercise;
  }


}

