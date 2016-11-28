import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  
  <span><img src='app/Services/Model/Photos/logo.jpg'/></span> 
  <h1 class="lead"> {{title}}</h1>

  <router-outlet></router-outlet>
`,

})
export class AppComponent {
  title = '中華生物科技 購物車';
}
