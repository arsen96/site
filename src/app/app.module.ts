import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { RouteReuseStrategy } from "@angular/router";
import { EditApprenantComponent } from './edit-apprenant/edit-apprenant.component';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { GestionApprenantsComponent } from './gestion-apprenants/gestion-apprenants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './components/counter/counter.component';
import { OurPaternshipsComponent } from './components/our-paternships/our-paternships.component';
import { ContactComponent } from './contact/contact.component';
import { RulesComponent } from './components/rules/rules.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OurActivitiesComponent } from './our-activities/our-activities.component';
const routes: Routes = [
  { path: '', component: AccueilComponent },
  {
      path: 'accueil',
      component:AccueilComponent,
      data: { breadcrumb: `Accueil` },
      children: [
        {
          path: 'rules',
          component: RulesComponent,
          data: { breadcrumb: 'Rules' }, 
        },
      ],
  },
  { path: 'missions', component: OurActivitiesComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CarousselComponent,
    HeaderComponent,
    EditApprenantComponent,
    AddApprenantComponent,
    GestionApprenantsComponent,
    FooterComponent,
    CounterComponent,
    OurPaternshipsComponent,
    ContactComponent,
    RulesComponent,
    OurActivitiesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatExpansionModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
