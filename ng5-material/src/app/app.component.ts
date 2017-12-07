import { Component } from '@angular/core';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answer: string = '';
  showSpinner: boolean = false;
  answerDisplay: boolean = false;

  showAnswer(){
    this.showSpinner = true;
    setTimeout(() => {
      this.answerDisplay = true;
      this.showSpinner = false;
    }, 1000)
  }
}
