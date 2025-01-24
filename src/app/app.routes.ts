import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component'),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing.component'),
  },
  {
    path: '**',
    redirectTo: () => {
      return 'about';
    },
  },
];
