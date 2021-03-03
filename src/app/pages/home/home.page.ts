import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  sliderConfigProduct = {
    slidesPerView: 2.5,
    spaceBetween: 0,
    autoplay: false,
  }
  dummy = Array(10);
  segmentModel: any;
  FeaturedProducts: any;
  Categories: any;
  total_cart = '';
  randomNumber: Number;
  rad: Number;
  user_id: any;
  constructor(private authService: AuthService,
    private loader: LoaderService,
    private router: Router,
    public menuCtrl: MenuController,
    private storageService: StorageService,
    private toastService: ToastService) {
    this.getFeaturedProducts();
    this.getAllCategory();
  }
  ngOnInit() {
  }


  getFeaturedProducts() {
    // this.loader.loadingPresent();
    const data = {
      user_id: '1'
    }
    this.authService.GlobalCollecionItem(data).subscribe(
      (res: any) => {
        console.log(res);
        this.FeaturedProducts = res.result_GlobalCollecionItem;
        this.dummy = [];


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
  }

  getAllCategory() {
    // this.loader.loadingPresent();
    const data = {
      user_id: '1'
    }
    this.authService.AllCategories(data).subscribe(
      (res: any) => {
        console.log(res);
        this.Categories = res.result_AllCategories;
        this.dummy = [];


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
  }
  AllCategories() {
    this.router.navigateByUrl('all-categories');
  }

  OpenCategoryProduct(id, name) {
    localStorage.setItem('catId', id);
    localStorage.setItem('catName', name);
    this.router.navigateByUrl('category-product');

  }
  OpenDetailPage(id) {
    this.router.navigateByUrl('product-details/' + id);
  }
  goToCartPage() {
    this.router.navigateByUrl("/tabs/cart");
  }
  AllProducts(){
    this.router.navigateByUrl('products');
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'menu1');
    this.menuCtrl.enable(false, 'menuAdmin');
  }
}