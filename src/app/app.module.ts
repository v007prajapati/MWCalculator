import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { SettingPage } from '../pages/SettingPage/SettingPage';
import { HistoryPage } from '../pages/HistoryPage/HistoryPage';
import { HistoryViewer } from '../components/histroy_viewer/history_viewer';
import { CssComponent } from '../components/css_component/css_component';
import { Broadcaster } from '../lib/event.service';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    HistoryPage,
    HistoryViewer,
    SettingPage,
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
    HistoryPage,
    SettingPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Broadcaster]
})
export class AppModule {}
