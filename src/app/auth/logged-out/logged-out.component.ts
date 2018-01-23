import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-out',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class LoggedOutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
