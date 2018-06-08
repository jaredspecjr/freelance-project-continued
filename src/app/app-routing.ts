import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LocationsComponent } from './locations/locations.component';
import { PlansComponent } from './plans/plans.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PrintingComponent } from './printing/printing.component';
import { WifiComponent } from './wifi/wifi.component';
import { WorkSpaceComponent } from './work-space/work-space.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'plans',
    component: PlansComponent
  },
  {
    path: 'coffee',
    component: CoffeeComponent
  },
  {
    path: 'activities',
    component: ActivitiesComponent
  },
  {
    path: 'printing',
    component: PrintingComponent
  },
  {
    path: 'wifi',
    component: WifiComponent
  },
  {
    path: 'work-space',
    component: WorkSpaceComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
