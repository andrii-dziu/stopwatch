import { Component, Inject } from '@angular/core';
import { timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hours: any = '0' + 0;
  minutes: any = '0' + 0;
  seconds: any = '0' + 0;
  timer: any;

  startTimer : any
  running:boolean = false

  start():void {
    if(!this.running) {
      this.running = true
      this.startTimer = setInterval(() => {
        this.seconds++
        this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
        if(this.seconds === 60) {
          this.minutes++
          this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
          this.seconds = '0' + 0;

        } if(this.minutes === 60) {
          this.hours++
          this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
          this.minutes = '0' + 0;

      } 
      }
     , 1000)
    } else {
      this.stop()
      this.onReset()
    }
  }

  onReset() {
    clearInterval(this.startTimer);
    this.running = false; 
    this.hours = this.minutes = this.seconds = '0' + 0;
  }
  
  stop():void {
    clearInterval(this.startTimer);
    this.running = false; 
  }


  reset(): void {
    clearInterval(this.startTimer);
    this.running = false; 
    this.hours = this.minutes = this.seconds = '0' + 0;
    this.start()

  }
}
