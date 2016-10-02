/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'tvn-app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
