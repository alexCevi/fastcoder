import { Component, OnInit } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';

@Component({
  selector: 'app-exercisearea',
  templateUrl: './exercisearea.component.html',
  styleUrls: ['./exercisearea.component.scss']
})
export class ExerciseareaComponent implements OnInit {

  topTitle: string;
  exerciseData: string[];

  // topTitle: string;
  // exerciseData: string;

  constructor(public setExerciseType: ExerciseDataProviderService) { }

  ngOnInit() {
    this.topTitle = this.setExerciseType.exerciseTitle;
    this.exerciseData = this.setExerciseType.exerciseData;

    // this.topTitle = "JavaScript";
    // this.exerciseData = "DATA ONE";
  }

}
