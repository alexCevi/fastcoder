import { Injectable } from '@angular/core';
import { HttputilsService } from './httputils.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExerciseDataProviderService {
  constructor(private http: HttputilsService) { }
  leaders$
  testingOBV$

  title: string;
  data: string[];
  accuracy: number;
  question: string;
  leaderboardId: string;
  number = 0;
  time = 0;
  testingData: any[];

  validateLeader() {
    this.leaders$ = this.http.getLeaderboardByid(this.leaderboardId);
    this.leaders$.subscribe(res => {
      this.testingData = res.data.firstPlaceUser;
      console.log(this.testingData);
    });
  }
}
