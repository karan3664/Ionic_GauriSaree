import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.page.html',
  styleUrls: ['./category-product.page.scss'],
})
export class CategoryProductPage implements OnInit {
  dummy = Array(10);
  segmentModel: any;
  FeaturedProducts: any;
  Categories: any;
  total_cart = '';
  randomNumber: Number;
  rad: Number;
  user_id: any;
  catid: any;
  brdnid: any;
  actionSheet: any;
  filtermonthwise: '';
  CategoryName: any;
  // public itemsHome: any = [];//home list
  public itemsCategory: any = [];//category list
  visibleCategory = false;//for category expand
  catId: any = [];
  pricemin: any;
  pricemax: any;
  sortby: any;
  cat_id = '';
  constructor(private authService: AuthService,
    private loader: LoaderService,
    private router: Router,
    public menuCtrl: MenuController,
    private toastService: ToastService) {
    this.CategoryName = localStorage.getItem('catName');
    this.getCategoryProducts();
  }

  ngOnInit() {
  }
  getCategoryProducts() {
    this.loader.loadingPresent();
    var toke = localStorage.getItem('catId');
    var brnd = localStorage.getItem('BrandId');
    var pmin = localStorage.getItem('price_min');
    var pmax = localStorage.getItem('price_max');

    console.log('cattoken => ' + toke);
    console.log('brnd => ' + brnd);
    console.log('pmin => ' + pmin);
    console.log('pmax => ' + pmax);

    if (this.catid != '') {
      this.catid = toke;
    }
    else {
      this.catid = this.cat_id;
    }

    if (this.brdnid != '') {
      this.brdnid = brnd;
    }
    else {
      this.brdnid = '';
    }

    if (this.pricemin != '') {
      this.pricemin = pmin
    }
    else {
      this.pricemin = ''
    }
    if (this.pricemax != '') {
      this.pricemax = pmax
    }
    else {
      this.pricemax = ''
    }
    const params = {
      page: '',
      sortBy: '',
      MinPrice: this.pricemin,
      MaxPrice: this.pricemax,
      CategoryIds: this.catid,
      BrandId: this.brdnid,
      Text: '',
      limit: '10000',
      discounted_products: '',
      user_id: this.user_id



    }

    console.log('Params =>  ' + JSON.stringify(params));
    this.authService.Products(params).subscribe(
      (res: any) => {
        this.loader.loadingDismiss();
        console.log(res);
        this.Categories = res.result_products.products.data;
        this.dummy = [];
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
  OpenDetailPage(id) {
    this.router.navigateByUrl('product-details/' + id);
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false, 'menu1');
    this.menuCtrl.enable(false, 'menuAdmin');
  }
}
