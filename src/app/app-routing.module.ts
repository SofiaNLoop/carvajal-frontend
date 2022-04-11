import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// My components
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { LogHistoryComponent } from './components/log-history/log-history.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [

  {path: '', component: MainPageComponent},
  {path: 'catalogue', canActivate: [ AuthGuard ] ,component: CatalogueComponent},
  {path: 'history', canActivate: [ AuthGuard ] ,component: LogHistoryComponent},
  {path: 'wishlist', canActivate: [ AuthGuard ] ,component: WishListComponent},
  {path: 'login', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
