import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  name: any;
  elapsed = 0;

  constructor() { }

  startCount() {
    this.elapsed = 0;
    this.name = setInterval(() => {
      this.elapsed++;
    }, 1000);
  }

  clearCount() {
    window.clearInterval(this.name);
  }

}
