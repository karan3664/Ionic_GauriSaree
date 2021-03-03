import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { MenuController } from '@ionic/angular';
import { interval } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  showBtnLogin = false;
  total_cart = '';
  constructor(public ngZone: NgZone,
    private authService: AuthService,
    public menuCtrl: MenuController,
    public storageService: StorageService,) {
    interval(100).subscribe(x => {
      this.storageService.getCartCount().then((val) => {
        if (val) {
          this.total_cart = val;
        }
        else {
          this.total_cart = '0';

        }

      });
    });
  }

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    this.ngZone.run(() => {
      this.storageService.getData().then(val => {
        // this.authUser = val;


        // console.log(val);
        if (!val) {
          // console.log(res);
          this.showBtnLogin = false;

        } else {


          this.showBtnLogin = true;

          // this.userService.user_id = val.id;

        }
      })
    });

  }
  ionViewWillEnter() {
    // this.menuCtrl.enable(true, 'menu1');
    // this.menuCtrl.enable(false, 'menuAdmin');
    this.menuCtrl.enable(true, 'menu1');
    this.menuCtrl.enable(false, 'menuAdmin');

  }
}
