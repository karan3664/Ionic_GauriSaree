import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPage } from '../register/register.page';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { VerificationcodePage } from '../verificationcode/verificationcode.page';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  postData = {
    username: '',
    password: ''
  };
  token: any;
  randomNumber: Number;
  rad: Number;
  constructor(private router: Router,
    private modalController: ModalController,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService,
    private loader: LoaderService,

    public alertController: AlertController,
  ) {

    setTimeout(() => {
      this.storageService.getRandomNumber().then((val) => {
        if (val) {
          this.rad = val;
        }
        else {
          // this.rad = this.randomNumber;
          // this.storageService.setRandomNumber(this.randomNumber);

        }

      });

    }, 500);
  }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  validateInputs() {
    const username = this.postData.username.trim();
    // const password = this.postData.password.trim();
    return (
      this.postData.username &&
      // this.postData.password &&
      username.length > 0 
      // password.length > 0
    );
  }

  async Login() {

    // if (this.validateInputs()) {
    
    // } else {
    //   this.loader.loadingDismiss();
    //   this.toastService.presentToast('Please enter username or password.');
    // }
    this.loader.loadingPresent();
    console.log(this.postData);


    const value = {
      phone: this.postData.username,
      password: '123',
      old_session: this.rad
    };
    console.log(JSON.stringify(value));
    // this.loader.loadingPresent();
    this.authService.FrontLogin(value).subscribe(
      async (res: any) => {
        console.log('Login Data =>' + JSON.stringify(res));
        if (res.error === false) {
          this.loader.loadingDismiss();
          // Storing the User data.
          // this.storageService.store(AuthConstants.AUTH, res.logindata);

          this.storageService.setData(res);
          this.randomNumber = Math.random();
          // this.rad = this.randomNumber;
          this.storageService.setRandomNumber(this.randomNumber);
          localStorage.setItem('token', res.result_FrontLogin.id);

         
          const modal = await this.modalController.create({
            component: VerificationcodePage,
            componentProps: {
              'mobile': this.postData.username,
              // 'dc_id': '',
              // 'to_user_id': ''
            }
          });
          modal.onDidDismiss()
            .then((data) => {
      
              const user = data['data']; // Here's your selected user!
              // console.log("Token =>" + user);
              // this.toke = user;
              // this.router.navigateByUrl('/tabs/home');
              window.location.reload();
      
            });
          // this.modalController.dismiss();
          return await modal.present();




        } else {
          this.loader.loadingDismiss();
          this.toastService.presentToast(res['msg']);
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
    
    // this.router.navigateByUrl('/verificationcode');
  }
  
  formLogin() {
  
  }


  async Register() {
    const modal = await this.modalController.create({
      component: RegisterPage,
      componentProps: {
        'home': 'home',
        // 'dc_id': '',
        // 'to_user_id': ''
      }
    });
    modal.onDidDismiss()
      .then((data) => {

        const user = data['data']; // Here's your selected user!
        // console.log("Token =>" + user);
        // this.toke = user;
        // window.location.reload();
      });
    return await modal.present();
  }
}
