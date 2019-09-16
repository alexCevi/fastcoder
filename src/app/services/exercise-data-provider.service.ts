import { Injectable } from '@angular/core';
import { HttputilsService } from './httputils.service';
import { Observable } from 'rxjs';
import { TimerService } from './timer.service';


@Injectable({
  providedIn: 'root'
})
export class ExerciseDataProviderService {
  constructor(private http: HttputilsService, private timer: TimerService) { }
  leaders$;

  title: string;
  data: string[];
  accuracy: number;
  question: string;
  leaderboardId: string;
  leaderUsername: string;
  isLeader = false;
  number = 0;
  time = 0;


  validateLeader() {
    this.leaders$ = this.http.getLeaderboardByid(this.leaderboardId);
    this.leaders$.subscribe(res => {
      this.leaders$ = res;
      if (this.timer.elapsed < res.data.firstPlaceUser.time && this.accuracy > res.data.firstPlaceUser.accuracy) {
        this.isLeader = true;
      }
    });
  }

  postNewLeader() {
    this.http.postNewLeader(this.leaderUsername, this.accuracy, this.timer.elapsed, this.leaderboardId, this.title);
  }
}

