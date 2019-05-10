import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
      path: 'dashboard',
      loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  } ,
  {
      path: 'address',
      loadChildren: './modules/address/address.module#AddressModule'
  },
  {
    path: '404',
    loadChildren: './modules/not-found/not-found.module#NotFoundModule'
  },
  {path: '**', redirectTo: '/404'},
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

