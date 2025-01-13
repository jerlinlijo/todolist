import { Component } from '@angular/core';
import { CONSTANTS } from './enums/global-constants.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = CONSTANTS.appName;
}
