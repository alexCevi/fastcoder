import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputarea',
  templateUrl: './inputarea.component.html',
  styleUrls: ['./inputarea.component.css']
})
export class InputareaComponent implements OnInit {

  constructor() { }


  codeInput: string;
  displayCode: any;


  jsQuestions = ['question one', 'question 2'];



  newUserData(testingThis: string) {
    console.log('should work');
    let i = 0;
    if (testingThis === String(this.jsQuestions[i])) {
      console.log('this is working');
      i++;
      this.displayCode = this.jsQuestions[i];
    } else {
      console.log("error");
    }
  }
  ngOnInit(): void {
    this.displayCode = this.jsQuestions[0];
  }
}


