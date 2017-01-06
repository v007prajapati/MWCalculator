import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { HistoryViewer } from '../components/histroy_viewer/history_viewer';
import { CssComponent } from '../components/css_component/css_component';
import { Broadcaster } from '../lib/event.service';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    HistoryViewer,
    CssComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      menuType: 'push'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Broadcaster]
})
export class AppModule {}
