import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
  
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m=> m.HomePageModule)
      },
      {
        path: 'offer',
        loadChildren: () => import('../pages/offer/offer.module').then(m => m.OfferPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../pages/cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../pages/search/search.module').then(m => m.SearchPageModule)
      },

      {
        path: 'my-account',
        loadChildren: () => import('../pages/my-account/my-account.module').then(m => m.MyAccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
