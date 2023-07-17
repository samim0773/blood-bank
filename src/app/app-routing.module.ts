import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/donor/registration/registration.component';
import { MainSectionComponent } from './components/home/main-section/main-section.component';

const routes: Routes = [
  {path:'',component:MainSectionComponent},
  {path:'home',component:MainSectionComponent},
  { path: 'donate-blood', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
