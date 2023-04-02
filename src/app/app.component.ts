import { Component } from '@angular/core';

@Component({ // its a decorator function accepts an argument object this decorator function converts plain ts to angular component
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'angular_lc';
}
