import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { Home } from './core/home/home';
import { NotFound } from './core/not-found/not-found';

// Dashboard routing with layout
export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Home,
        title: 'Home',
      },
      // Add your dashboard routes here
    ],
  },
  {
    path: '**',
    component: NotFound,
    title: '404 - Not Found',
  },
];
