import { Component } from '@angular/core';
import { helloService } from './services';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  name: string;
  
  updateName(newName) {
    this.name = newName;
  }

  constructor() {
    console.log(helloService(this.name));
  }
}
