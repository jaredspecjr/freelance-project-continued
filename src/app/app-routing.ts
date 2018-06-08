import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LocationsComponent } from './locations/locations.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
