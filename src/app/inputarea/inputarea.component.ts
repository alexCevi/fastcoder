import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-inputarea',
  templateUrl: './inputarea.component.html',
  styleUrls: ['./inputarea.component.css']
})
export class InputareaComponent {

  constructor() { }

  displayCode = '';
  testingSplit = [];
  values = ' ';
  codeInput: string;

  newCodeEntered(userEnteredCode: string) {
    this.displayCode = userEnteredCode;
    this.testingSplit = userEnteredCode.split('');
    console.log(this.testingSplit);
  }

  onKey(event: any) {
    this.values = event.target.value;
    console.log(this.values);
    this.codeInput = '';
  }


}
