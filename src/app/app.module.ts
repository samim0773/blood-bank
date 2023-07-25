import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminSearchComponent } from './components/admin/admin-search/admin-search.component';
import { ProfileComponent } from './components/donor/profile/profile.component';
import { RegistrationComponent } from './components/donor/registration/registration.component';
import { HeaderComponent } from './components/home/header/header.component';
import { MainSectionComponent } from './components/home/main-section/main-section.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReportComponent } from './components/donor/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminSearchComponent,
    ProfileComponent,
    RegistrationComponent,
    HeaderComponent,
    MainSectionComponent,
    FooterComponent,
    AboutComponent,
    SearchComponent,
    ContactComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
