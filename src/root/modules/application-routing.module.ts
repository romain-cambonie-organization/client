import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicFeatureModule } from '@features/public';
import { MainLayout } from '../layouts';

const ROUTES: Routes = [
  {
    loadChildren: async (): Promise<typeof PublicFeatureModule> => (await import('@features/public')).PublicFeatureModule,
    component: MainLayout,
    path: ''
  },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot([...ROUTES])]
})
export class ApplicationRoutingModule {}
