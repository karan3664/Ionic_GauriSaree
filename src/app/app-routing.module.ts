import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    
  },
  
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'all-categories',
    loadChildren: () => import('./pages/all-categories/all-categories.module').then(m => m.AllCategoriesPageModule)
  },

  {
    path: 'category-product',
    loadChildren: () => import('./pages/category-product/category-product.module').then(m => m.CategoryProductPageModule)
  },
  {
    path: 'product-details/:id',
    loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },


  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'shipping-address',
    loadChildren: () => import('./pages/shipping-address/shipping-address.module').then(m => m.ShippingAddressPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./pages/add-address/add-address.module').then(m => m.AddAddressPageModule)
  },

  {
    path: 'wish-list',
    loadChildren: () => import('./pages/wish-list/wish-list.module').then(m => m.WishListPageModule)
  },

  {
    path: 'my-order/:price',
    loadChildren: () => import('./pages/my-order/my-order.module').then(m => m.MyOrderPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'edit-address',
    loadChildren: () => import('./pages/edit-address/edit-address.module').then(m => m.EditAddressPageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },

  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./pages/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsPageModule)
  },
  {
    path: 'write-review',
    loadChildren: () => import('./pages/write-review/write-review.module').then(m => m.WriteReviewPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule)
  },
  {
    path: 'view-invoice',
    loadChildren: () => import('./pages/view-invoice/view-invoice.module').then(m => m.ViewInvoicePageModule)
  },

  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'manage-address',
    loadChildren: () => import('./pages/manage-address/manage-address.module').then(m => m.ManageAddressPageModule)
  },

  {
    path: 'coupon',
    loadChildren: () => import('./pages/coupon/coupon.module').then(m => m.CouponPageModule)
  },
 
  {
    path: 'verificationcode',
    loadChildren: () => import('./pages/verificationcode/verificationcode.module').then(m => m.VerificationcodePageModule)
  },
 
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
