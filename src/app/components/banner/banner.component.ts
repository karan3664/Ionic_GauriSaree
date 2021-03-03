import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  slides: any[];
  dummy = Array(10);
  constructor(public nav: NavController,
    private authService: AuthService,
    private loader: LoaderService,
    private toastService: ToastService) {
    this.GetSlider();

  }
  ngOnInit() { }
  GetSlider() {
    // this.loader.loadingPresent();
    this.authService.GetSlider().subscribe(
      (res: any) => {
        console.log(res);
        this.slides = res.result_AllSliders;
        this.dummy = [];
        console.log(this.slides);
       

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

}
