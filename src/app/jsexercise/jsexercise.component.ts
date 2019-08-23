import { Component } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jsexercise',
  templateUrl: './jsexercise.component.html',
  styleUrls: ['./jsexercise.component.scss']
})
export class JsexerciseComponent {

  constructor(public setExerciseSelection: ExerciseDataProviderService, private router: Router) { }

  setExerciseAsJs() {
    const jsExerciseData = ['const', 'array', 'let', 'function', '()', '{}', 'string', 'number'];
    this.setExerciseSelection.setExerciseData('JavaScript', jsExerciseData);
    this.router.navigate(['train']);
  }

}
