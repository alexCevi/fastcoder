import { Component } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-htmlexercise',
  templateUrl: './htmlexercise.component.html',
  styleUrls: ['./htmlexercise.component.scss']
})
export class HtmlexerciseComponent {

  constructor(public setExerciseSelection: ExerciseDataProviderService, private router: Router) { }

  setExercise() {
    const data = ['html', 'div'];
    this.setExerciseSelection.setExerciseData('HTML', data);
    this.router.navigate(['train']);
  }

}
