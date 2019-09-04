import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface ExerciseType {
  id: string;
  title: string;
  imgUrl: string;
  desc: string;
  tag: string;
}

@Component({
  selector: 'app-exercisecontainer',
  templateUrl: './exercisecontainer.component.html',
  styleUrls: ['./exercisecontainer.component.scss']
})
export class ExercisecontainerComponent implements OnInit {

  readonly configUrl = './assets/exercises/test.json';
  constructor(private http: HttpClient) { }

  exercies$: Observable<ExerciseType[]>;

  ngOnInit() {
    this.exercies$ = this.http.get<ExerciseType[]>(this.configUrl);
    console.log(this.exercies$);
  }

}
