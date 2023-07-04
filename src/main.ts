import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic([{provide:'HELLO',useValue :'platform'}])
.bootstrapModule(AppModule)
  .catch(err => console.error(err));
