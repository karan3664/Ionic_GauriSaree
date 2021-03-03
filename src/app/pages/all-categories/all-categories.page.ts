import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.page.html',
  styleUrls: ['./all-categories.page.scss'],
})
export class AllCategoriesPage implements OnInit {
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
    private toastService: ToastService,
    public menuCtrl: MenuController,
    public router: Router) {
      this.getAllCategory();
     }

  ngOnInit() {
  }
  getAllCategory() {
    this.loader.loadingPresent();
    const data = {
      user_id: '1'
    }
    this.authService.AllCategories(data).subscribe(
      (res: any) => {
        this.loader.loadingDismiss();
        console.log(res);
        this.Categories = res.result_AllCategories;
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

  OpenCategoryProduct(id, name) {
    localStorage.setItem('catId', id);
    localStorage.setItem('catName', name);
    this.router.navigateByUrl('category-product');

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false, 'menu1');
    this.menuCtrl.enable(false, 'menuAdmin');
  }
}
