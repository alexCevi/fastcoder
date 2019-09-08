import { Component, OnInit } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';
import { Router } from '@angular/router';
import { HttputilsService } from '../services/httputils.service';

@Component({
  selector: 'app-exercisecontainer',
  templateUrl: './exercisecontainer.component.html',
  styleUrls: ['./exercisecontainer.component.scss']
})
export class ExercisecontainerComponent implements OnInit {
  exercies$;
  constructor(private http: HttputilsService, private exerciseService: ExerciseDataProviderService, private router: Router) { }

  ngOnInit() {
    this.exercies$ = this.http.getExercises();
  }

  sendExercise(title: string, questionData: Array<string>) {
    this.exerciseService.title = title;
    this.exerciseService.data = questionData;
    this.router.navigate(['train']);
  }

}
