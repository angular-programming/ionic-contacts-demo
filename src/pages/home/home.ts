import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { NavController, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { contactService } from "../../services/contact.service";
import { ManagePage } from '../manage/manage';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public deviceContactsObs: any;
  public deviceContacts = [];
  type = "contact";
  ngOnInit() {
    this.deviceContactsObs = new Observable(observer => {
      this.platform.ready().then(() => {
        navigator['contacts'] && navigator['contacts']
          .find([navigator['contacts'].fieldType.displayName],
          (list) => {
            observer.next(list);
            this.chRef.detectChanges();
          },
          this.errorHandler);
      });
    });
  }

  constructor(public navCtrl: NavController,
    public domSanitizer: DomSanitizer,
    public chRef: ChangeDetectorRef,
    private storage: Storage,
    public contactService: contactService,
    private platform: Platform) {
  }

  errorHandler() {
  }

  showPhone(item) {
    return item.phoneNumbers ? item.phoneNumbers[0].value : 'no record';
  }

  showAvator(item) {
    return item.photos ? this.domSanitizer.bypassSecurityTrustUrl(item.photos[0].value) : './assets/contact.jpg';
  }

  call(item) {
    if (item.phoneNumbers && item.phoneNumbers[0].value) {
      item.timestamp = + new Date();
      this.contactService.dialList.splice(0, 0, item);
      this.contactService.storage.set('dialList', this.contactService.dialList);
      window.open(`tel:${item.phoneNumbers[0].value}`, '_system');
    }
  }

  toDetail(item, events) {
    events.stopPropagation();
    this.navCtrl.push(DetailPage, { item: item });
  }

  toManage() {
    this.navCtrl.push(ManagePage);
  }

  getRandomColor(i) {
    return ['#0092c7', '#9fe0f6', '#f3e59a', '#f3b59b', '#f29c9c', '#f8e400', 'f26378', 'f13dbad', '#ff7d48', '#a2ef57',][i % 9];
  }
}
