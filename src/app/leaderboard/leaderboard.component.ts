import { Component, OnInit } from '@angular/core';
import { HttputilsService } from '../services/httputils.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  leaderboards$: Observable<any>;
  constructor(public http: HttputilsService) { }

  ngOnInit() {
    this.leaderboards$ = this.http.getLeaderboards();
    console.log(this.leaderboards$);
  }
}
