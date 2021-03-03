import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-verificationcode',
  templateUrl: './verificationcode.page.html',
  styleUrls: ['./verificationcode.page.scss'],
})
export class VerificationcodePage implements OnInit {
  OTP: string = '';
  constructor(
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
  Verify() {
    this.modalController.dismiss();
    // this.router.navigateByUrl('/tabs/home');
  }
}
