import { Component, OnInit } from '@angular/core';
import { HttputilsService } from '../services/httputils.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  leaderboards$;
  constructor(private http: HttputilsService) { }

  ngOnInit() {
    this.leaderboards$ = this.http.getLeaderboards();
  }

}
