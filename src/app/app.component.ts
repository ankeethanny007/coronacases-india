import { Component } from '@angular/core';
import {HomepageComponent} from './component/homepage/homepage.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid19india';
  favorite = false;

  constructor(){

  }

  toggleFavorite = () => {
    this.favorite = !this.favorite;
  }
}
