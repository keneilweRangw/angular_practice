import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { InfoComponent } from './pages/info/info.component';

export const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'countries', component: HomePageComponent },
  { path: 'countries/:countryName', component: InfoComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
