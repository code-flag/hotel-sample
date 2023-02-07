import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconFontComponent } from './components/font/font.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    IconFontComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    IconFontComponent,
    ButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
