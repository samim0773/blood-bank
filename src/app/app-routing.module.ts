import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/donor/registration/registration.component';
import { MainSectionComponent } from './components/home/main-section/main-section.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: MainSectionComponent },
  { path: 'home', component: MainSectionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent },
  { path: 'donate-blood', component: RegistrationComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
