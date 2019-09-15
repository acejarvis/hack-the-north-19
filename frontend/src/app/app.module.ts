import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AgmCoreModule } from '@agm/core'

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { EnterpriseComponent } from './enterprise/enterprise.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    MapComponent,
    EnterpriseComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtAOLte63fvHQd8HqVFEfi0eLek_MvuNg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
