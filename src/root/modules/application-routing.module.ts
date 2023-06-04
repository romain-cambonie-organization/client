import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeFeatureModule } from '@features/resume';
import { MainLayout } from '../layouts';
import { RESUME_PROVIDERS } from '../providers/resume.providers';

const ROUTES: Routes = [
  {
    loadChildren: async (): Promise<typeof ResumeFeatureModule> => (await import('@features/resume')).ResumeFeatureModule,
    component: MainLayout,
    path: '',
    providers: [...RESUME_PROVIDERS]
  },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot([...ROUTES])]
})
export class ApplicationRoutingModule {}
