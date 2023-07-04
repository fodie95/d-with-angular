import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ChatAppModule } from './app/chat-app/chat-app.module';

const platformRef = platformBrowserDynamic()

platformRef.bootstrapModule(AppModule)
  .catch(err => console.error(err));

platformRef.bootstrapModule(ChatAppModule)
        .catch(err => console.error(err))

