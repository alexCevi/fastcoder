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

interface LeaderboardData {
  catagory: string;
  firstPlaceUser: {
    username: string;
    accuracy: number;
    time: number;
  };
  secondPlaceUser: string;
  thirdPlaceUser: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttputilsService {

  readonly apiConfigUrl = 'https://fast-coder-app-7948.nodechef.com/api/';
  private exercies$: Observable<ExerciseType[]>;
  private leaderboard$: Observable<LeaderboardData[]>;

  constructor(private http: HttpClient) { }

  getExercises() {
    return this.http.get<LeaderboardData[]>(this.apiConfigUrl + 'exercises');
  }

  getLeaderboards() {
    return this.http.get<LeaderboardData[]>(this.apiConfigUrl + 'leaderboards');
  }

}
