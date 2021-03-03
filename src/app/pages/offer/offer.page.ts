import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {

  OfferedProduct: any;
  user_id: any;
  total_cart = '';
  randomNumber: Number;
  rad: Number;
  constructor(private authService: AuthService,
    private loader: LoaderService,
    private router: Router,
    public menuCtrl: MenuController,
    private toastService: ToastService) { 

      this.OfferedProductItem();
    }

  ngOnInit() {
  }


  OfferedProductItem() {
    const data = {
      user_id: this.user_id
    }
    // this.loader.loadingPresent();
    this.authService.DiscountedProductsHome(data).subscribe(
      (res: any) => {
        console.log(res);
        if (res.error === false) {
          // this.loader.loadingDismiss();
          this.OfferedProduct = res.result_DiscountedProductsHome;
          // this.newestItems = res.result_BestSellingItemsHome;
          for (let i = 0; i < this.OfferedProduct.data.length; i++) {
            // this.product_packages_OFFER = this.OfferedProduct.data[i].product_packages;
            // console.log('Product Offer => ' + JSON.stringify(this.product_packages_OFFER));

          }
        }
        else {
          // this.loader.loadingDismiss();
          this.toastService.presentToast(res.msg);
        }

      },
      (error: any) => {
        // this.loader.loadingDismiss();
        if (JSON.stringify(error.error.errors) != null) {
          this.toastService.presentToast(JSON.stringify(error.error.errors));
        }
        else {
          this.toastService.presentToast("Network Issue...");
        }
      }
    );
    // this.postData.Suppliers = JSON.stringify(this.data['to_name']);
  }

  OpenDetailPage(id) {
    this.router.navigateByUrl('product-details/' + id);
  }
}
