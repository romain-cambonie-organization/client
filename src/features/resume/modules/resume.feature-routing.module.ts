import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumePage } from '../pages';

const ROUTES: Routes = [
  {
    component: ResumePage,
    path: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(ROUTES)]
})
export class ResumeFeatureRoutingModule {}
