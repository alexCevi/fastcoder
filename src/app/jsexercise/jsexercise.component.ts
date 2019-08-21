import { Component } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';

@Component({
  selector: 'app-jsexercise',
  templateUrl: './jsexercise.component.html',
  styleUrls: ['./jsexercise.component.scss']
})
export class JsexerciseComponent {

  constructor(public jsSettingSelection: ExerciseDataProviderService) { }

  setExerciseAsJs() {
    const jsExerciseData = ['const', 'array', 'let', 'function', '()', '{}', 'string', 'number'];
    this.jsSettingSelection.setExerciseData('JavaScript', jsExerciseData);
  }

}
