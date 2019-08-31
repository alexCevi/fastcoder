import { Component } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jsexercise',
  templateUrl: './jsexercise.component.html',
  styleUrls: ['./jsexercise.component.scss']
})
export class JsexerciseComponent {

  constructor(private exercise: ExerciseDataProviderService, private router: Router) { }

  setExercise() {
    // const jsExerciseData = ['const', 'array', 'let', 'function', '()', '{}', 'string', 'number'];
    const data = ['const', 'array'];
    this.exercise.setExerciseData('JavaScript', data);
    this.router.navigate(['train']);
  }

}
