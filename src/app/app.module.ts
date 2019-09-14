import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MasterDetailModule } from './app-shell/master-detail/master-detail.module';
import { ListModule } from './app-shell/list/list.module';
import { GridModule } from './app-shell/grid/grid.module';
import { HomeModule } from './app-shell/home/home.module';
import { NavBarComponent } from './app-shell/nav-bar/nav-bar.component';
import { FooterComponent } from './app-shell/footer/footer.component';;
import { MapComponent } from './map/map.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent
,
    MapComponent  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MasterDetailModule,
    ListModule,
    GridModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
