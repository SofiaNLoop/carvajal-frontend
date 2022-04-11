import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { LogHistoryComponent } from './components/log-history/log-history.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { NavbarComponent } from './components/main-page/navbar/navbar.component';
import { MainContentComponent } from './components/main-page/main-content/main-content.component';
import { NavComponent } from './components/catalogue/nav/nav.component';
import { ContentComponent } from './components/catalogue/content/content.component';
import { WishcontentComponent } from './components/wish-list/wishcontent/wishcontent.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CatalogueComponent,
    LogHistoryComponent,
    WishListComponent,
    NavbarComponent,
    MainContentComponent,
    NavComponent,
    ContentComponent,
    WishcontentComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
