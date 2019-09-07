import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface ExerciseType {
  id: string;
  title: string;
  imgUrl: string;
  desc: string;
  tag: string;
  questionData: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class HttputilsService {

  readonly apiConfigUrl = 'https://fast-coder-app-7948.nodechef.com/api/';
  private exercies$: Observable<ExerciseType[]>;

  constructor(private http: HttpClient) { }

  getExercises() {
    return this.http.get<ExerciseType[]>(this.apiConfigUrl + 'exercises');
  }

}
