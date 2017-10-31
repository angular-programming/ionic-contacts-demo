import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { ManagePage } from '../pages/manage/manage';
import { contactService } from '../services/contact.service';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    ManagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    ManagePage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, contactService]
})
export class AppModule { }
