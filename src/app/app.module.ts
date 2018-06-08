import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { routing } from './app-routing';
import { CoffeeComponent } from './coffee/coffee.component';
import { WifiComponent } from './wifi/wifi.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PrintingComponent } from './printing/printing.component';
import { WorkSpaceComponent } from './work-space/work-space.component';
import { LocationsComponent } from './locations/locations.component';
import { PlansComponent } from './plans/plans.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CoffeeComponent,
    WifiComponent,
    ActivitiesComponent,
    PrintingComponent,
    WorkSpaceComponent,
    LocationsComponent,
    PlansComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
