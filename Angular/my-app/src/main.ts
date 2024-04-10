import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// class MobilePhone {
//   constructor () {

//   }
// }

//   class Person {
//     constructor(phone) {
//       this.phone = phone;
//     }
//   }

//   const phone = new MobilePhone();
//   const ivan = new Person(phone);