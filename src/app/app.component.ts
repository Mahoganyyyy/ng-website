import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-site';

  LinkedIn(){
    window.open("https://www.linkedin.com/in/scott-kinchlea/", "_blank")
  }
}
