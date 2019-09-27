import { Component, OnInit } from '@angular/core';
import { ExerciseDataProviderService } from '../services/exercise-data-provider.service';
import { Router } from '@angular/router';
import { HttputilsService } from '../services/httputils.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-exercisecontainer',
  templateUrl: './exercisecontainer.component.html',
  styleUrls: ['./exercisecontainer.component.scss']
})
export class ExercisecontainerComponent implements OnInit {
  exercies$: Observable<any>;

  constructor(
    private http: HttputilsService,
    private exerciseService: ExerciseDataProviderService,
    private router: Router,
    private deviceServices: DeviceDetectorService
  ) {}

  ngOnInit() {
    this.exercies$ = this.http.getExercises();
  }

  sendExercise(title: string, questionData: Array<string>, leaderboardId: string) {
    if (this.deviceServices.isMobile() === true || this.deviceServices.isTablet() === true) {
      alert('BETA MODE: training on mobile is not currently implemented')
    } else {
      this.exerciseService.title = title;
      this.exerciseService.data = questionData;
      this.exerciseService.leaderboardId = leaderboardId;
      this.router.navigate(['train']);
    }
  }
}
