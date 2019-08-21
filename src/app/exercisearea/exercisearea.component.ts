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
  clearData: string;

  constructor(public exerciseService: ExerciseDataProviderService) { }

  validateInput(event: any) {
    console.log(event.target.value);
    if (this.exerciseDataDisplay === event.target.value) {
      this.exerciseService.updateExerciseData();
      this.exerciseDataDisplay = this.exerciseService.currentDisplayedExercise;
      this.clearData = '';
      console.log('should be working');
    } else {
      console.log('not working');
    }
  }

  ngOnInit() {
    this.topTitle = this.exerciseService.exerciseTitle;
    this.exerciseService.updateExerciseData();
    this.exerciseDataDisplay = this.exerciseService.currentDisplayedExercise;
    console.log(this.exerciseDataDisplay.split('').splice(-1).pop());
  }


}

