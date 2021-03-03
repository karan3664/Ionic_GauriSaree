import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.page.html',
  styleUrls: ['./coupon.page.scss'],
})
export class CouponPage implements OnInit {
  user_id: '';
  coupon: ''
  constructor(  private authService: AuthService,
    private loader: LoaderService,
    private toastService: ToastService,
    private modalController: ModalController,
    // private socialSharing: SocialSharing,
    private storageService: StorageService) { 
      this.storageService.getData().then((val) => {
        if (val) {
          this.user_id = val.id;
          
        }
        else {
          this.user_id = '';
          // this.storageService.setRandomNumber(this.randomNumber);

        }

      });
    }

  ngOnInit() {
  }

  async isCoupon() {

    if (this.user_id != '') {
      const data = {

        user_id: this.user_id,
        coupon: this.coupon
        // selling_price_id: sp_id
      }

      this.loader.loadingPresent();

      this.authService.ApplyCoupon(data).subscribe(
        (res: any) => {
          console.log('My Coupon => ' + JSON.stringify(res));
          if (res.error === false) {
            this.loader.loadingDismiss();

            this.toastService.presentToast(res.msg);
            

          }
          else {
            this.loader.loadingDismiss();
            this.toastService.presentToast(res.msg);
          }

        },
        (error: any) => {
          this.loader.loadingDismiss();
          if (JSON.stringify(error.error.errors) != null) {
            this.toastService.presentToast(JSON.stringify(error.error.errors));
          }
          else {
            this.toastService.presentToast("Network Issue...");
          }
        }
      );

    }
   
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
