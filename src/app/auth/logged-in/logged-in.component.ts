import { NavigationComponent } from './../../navigation/navigation.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-in',
  template: `
    <div class="ui container">
      <div class="ui grid">
        <div class="four wide column">
          <app-navigation></app-navigation>
        </div>
        <div class="twelve wide column">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
