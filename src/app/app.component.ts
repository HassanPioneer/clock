import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';
  second_rotate = 0
  minute_rotate = 0
  hour_rotate = 0
  ngOnInit(): void {
    //second manipulation
    setInterval(() =>
    {
      this.second_rotate += 6
    },1000)
    setInterval(() =>
    {
      this.minute_rotate += 6
    },60000)
    setInterval(() =>
    {
      this.hour_rotate += 6
    },540000)
  }
}
