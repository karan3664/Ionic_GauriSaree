import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteReviewPageRoutingModule } from './write-review-routing.module';

import { WriteReviewPage } from './write-review.page';
// Import ionic-rating module
import { IonicRatingModule } from "ionic4-rating";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    WriteReviewPageRoutingModule
  ],
  declarations: [WriteReviewPage]
})
export class WriteReviewPageModule {}
