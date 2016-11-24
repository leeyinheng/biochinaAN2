import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <img src='app/Services/Model/Photos/logo.jpg'/> 
  <h1> {{title}}</h1>
  <router-outlet></router-outlet>
`,

})
export class AppComponent {
  title = '中華生物科技 購物車';
}
