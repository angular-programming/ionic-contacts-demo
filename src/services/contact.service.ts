
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class contactService {
    public favorateContacts = [];  // 收藏列表
    public dialList = [];  // 拨打记录列表

    constructor(
        private platform: Platform,
        public storage: Storage
    ) {
    }

    async initData() {
        await this.storage.ready();
        this.favorateContacts = await this.storage.get('favorateList') || [];
        this.dialList = await this.storage.get('dialList') || [];
    }
}