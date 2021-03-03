import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private loadingController: LoadingController) { }

  async loadingPresent(message: string = null, duration: number = null) {
    const loading = await this.loadingController.create({
      message, duration,
      translucent: true,
      backdropDismiss: true,
      spinner: 'dots',
      mode: 'ios',
      cssClass: 'custom-loading'
    });
    return await loading.present();
  }

  async loadingDismiss() {
    setTimeout(() => {
      return this.loadingController.dismiss();
    }, 1000);
  }
}
