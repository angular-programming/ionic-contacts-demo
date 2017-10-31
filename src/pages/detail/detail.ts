import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';
//import { Observable } from "rxjs/Observable";
import { contactService } from "../../services/contact.service";

/*
  Generated class for the Detail page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage implements OnInit {
  public item: any;
  //private favorateContacts = [];
  private initial: boolean;
  async ngOnInit() {
    this.item = this.navParams.get("item");
    this.item.favorate = false;
    // await this.storage.ready();
    // this.favorateContacts = await this.storage.get('favorateList') || [];
    // this.favorateContacts.map(item=> item.id == this.item.id && (this.item.favorate=true));
    this.contactService.favorateContacts.map(item => { item.id == this.item.id && (this.item.favorate = true); return item; });

    this.initial = this.item.favorate;
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public domSanitizer: DomSanitizer,
    public contactService: contactService
  ) {
  }

  favorate() {
    this.item.favorate = !this.item.favorate;
  }

  ionViewWillLeave() {
    if (this.initial != this.item.favorate) {
      if (this.item.favorate) {
        this.contactService.favorateContacts.push(this.item);
      } else {
        this.contactService.favorateContacts = this.contactService.favorateContacts.filter(item => item.id != this.item.id);
      }
      this.storage.set('favorateList', this.contactService.favorateContacts);
    }
  }
}
