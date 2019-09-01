import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardmodifierService {

  constructor() { }

  error() {
    const exerciseDataElement = document.getElementById('questionCardContainer');
    exerciseDataElement.setAttribute('style', 'box-shadow: 0 8px 16px 0 red');

    setTimeout(() => {
      exerciseDataElement.setAttribute('style', 'box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);');
    }, 500);
  }

  extended() {
    const exerciseReportContainer = document.getElementById('exerciseWrapper');
    exerciseReportContainer.setAttribute('style', 'height: 700px;');
  }

  shorten() {
    const exerciseReportContainer = document.getElementById('exerciseWrapper');
    exerciseReportContainer.setAttribute('style', 'height: 500px;');
  }

}
