import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ExerciseType {
  id: string;
  title: string;
  imgUrl: string;
  desc: string;
  tag: string;
  leaderboard_id: string;
  questionData: Array<string>;
}

interface LeaderboardData {
  catagory: string;
  firstPlaceUser:
  {
    username: string;
    accuracy: number;
    time: number;
  };
}

interface Post {
  catagory: string;
  firstPlaceUser: {
    userName: string,
    accuracy: number,
    time: number
  };
}

@Injectable({
  providedIn: 'root'
})
export class HttputilsService {

  readonly apiConfigUrl = 'https://fast-coder-app-7948.nodechef.com/api/';

  constructor(private http: HttpClient) { }

  getExercises() {
    return this.http.get<ExerciseType[]>(this.apiConfigUrl + 'exercises');
  }

  getLeaderboards() {
    return this.http.get<LeaderboardData[]>(this.apiConfigUrl + 'leaderboards');
  }

  getLeaderboardByid(id: string) {
    return this.http.get<LeaderboardData[]>(this.apiConfigUrl + 'leaderboards' + '/' + id);
  }

  postNewLeader(username: string, userAccuracy: number, userTime: number, id: string, exerciseCatagory: string) {
    const data: Post = {
      catagory: exerciseCatagory,
      firstPlaceUser: {
        userName: username,
        accuracy: userAccuracy,
        time: userTime
      }
    };
    this.http.put(this.apiConfigUrl + 'leaderboards' + '/' + id, data).subscribe();
  }
}
