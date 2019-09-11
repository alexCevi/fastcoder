import { Injectable } from '@angular/core';
import { HttputilsService } from './httputils.service';
import { Observable } from 'rxjs';
import { TimerService } from './timer.service';


@Injectable({
  providedIn: 'root'
})
export class ExerciseDataProviderService {
  constructor(private http: HttputilsService, private timer: TimerService) { }
  leaders$
  testingOBV$

  title: string;
  data: string[];
  accuracy: number;
  question: string;
  leaderboardId: string;
  number = 0;
  time = 0;

  validateLeader() {
    this.leaders$ = this.http.getLeaderboardByid(this.leaderboardId);
    this.leaders$.subscribe(res => {
      console.log('working');
      if (this.timer.elapsed < res.data.firstPlaceUser.time && this.accuracy > res.data.firstPlaceUser.accuracy) {
        console.log('fist place');
      } else if (this.timer.elapsed < res.data.secondPlaceUser.time && this.accuracy > res.data.secondPlaceUser.accuracy) {
        console.log('second Place');
      } else if (this.timer.elapsed < res.data.thirdPlaceUser.time && this.accuracy > res.data.thirdPlaceUser.accuracy) {
        console.log('third place');
      }
    });
  }
}
