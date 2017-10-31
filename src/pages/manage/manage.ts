import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

/*
  Generated class for the Manage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html'
})
export class ManagePage implements OnInit {

  private item;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.item = this.navParams.get("item");
    if (!this.item) {
      this.item = {
        displayName: '',
        phoneNumbers: [{ value: '' }]
      }
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagePage');
  }

  save() {
    let toast = this.toastCtrl.create({
      message: 'just for demo',
      duration: 3000
    });
    toast.present();
  }

}
