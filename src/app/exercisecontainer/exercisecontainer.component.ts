import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';
import { Router } from '@angular/router';



interface ExerciseType {
  id: string;
  title: string;
  imgUrl: string;
  desc: string;
  tag: string;
  questionData: Array<string>;
}

@Component({
  selector: 'app-exercisecontainer',
  templateUrl: './exercisecontainer.component.html',
  styleUrls: ['./exercisecontainer.component.scss']
})
export class ExercisecontainerComponent implements OnInit {

  readonly configUrl = 'http://localhost:8080/api/exercises';
  constructor(private http: HttpClient, private exerciseService: ExerciseDataProviderService, private router: Router) { }

  exercies$: Observable<ExerciseType[]>;

  ngOnInit() {
    this.exercies$ = this.http.get<ExerciseType[]>(this.configUrl);
  }

  sendExercise(title: string, questionData: Array<string>) {
    this.exerciseService.title = title;
    this.exerciseService.data = questionData;
    this.router.navigate(['train']);
  }

}
