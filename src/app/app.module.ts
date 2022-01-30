import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { WebsiteHeaderComponent } from './components/website-header/website-header.component';
import { WebsiteFooterComponent } from './components/website-footer/website-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WebsiteHeaderComponent,
    WebsiteFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
