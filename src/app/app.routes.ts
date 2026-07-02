import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'inscription',
    loadComponent: () => import('./inscription/inscription.page').then( m => m.InscriptionPage)
  },
  {
    path: 'connexion',
    loadComponent: () => import('./connexion/connexion.page').then( m => m.ConnexionPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage) 
  },
{
    path: 'detail_annonces',
    loadComponent: () => import('./detail-annonces/detail-annonces.component').then(m => m.DetailAnnoncesComponent) 
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  },
 
];
