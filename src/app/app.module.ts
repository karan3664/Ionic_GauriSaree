import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { IonicStorageModule } from '@ionic/storage';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { IonicRatingModule } from 'ionic4-rating';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { EditAddressPage } from './pages/edit-address/edit-address.page';
import { AddAddressPage } from './pages/add-address/add-address.page';
import { VerificationcodePage } from './pages/verificationcode/verificationcode.page';
import { WriteReviewPage } from './pages/write-review/write-review.page';
import { ForgotpasswordPage } from './pages/forgotpassword/forgotpassword.page';
import { LoginPageModule } from './pages/login/login.module';
import { RegisterPageModule } from './pages/register/register.module';
import { EditAddressPageModule } from './pages/edit-address/edit-address.module';
import { AddAddressPageModule } from './pages/add-address/add-address.module';
import { WriteReviewPageModule } from './pages/write-review/write-review.module';
import { VerificationcodePageModule } from './pages/verificationcode/verificationcode.module';
import { ForgotpasswordPageModule } from './pages/forgotpassword/forgotpassword.module';
import { TabsPage } from './tabs/tabs.page';
import { TabsPageModule } from './tabs/tabs.module';


@NgModule({
  declarations: [AppComponent, MenuComponentComponent],
  entryComponents: [TabsPage, LoginPage, RegisterPage, EditAddressPage, 
    AddAddressPage, VerificationcodePage, WriteReviewPage, ForgotpasswordPage],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    ComponentsModule,
    IonicStorageModule.forRoot(),
    IonicRatingModule,
    LoginPageModule,
    RegisterPageModule,
    EditAddressPageModule,
    AddAddressPageModule,
    WriteReviewPageModule,
    TabsPageModule,
    VerificationcodePageModule,
    ForgotpasswordPageModule,
    AppRoutingModule],

  providers: [
    StatusBar,
    SplashScreen,
    PhotoViewer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
