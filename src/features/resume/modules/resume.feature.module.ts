import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PAGES } from '../pages';
import { ResumeFeatureRoutingModule } from './resume.feature-routing.module';

@NgModule({
  declarations: [...PAGES],
  imports: [CommonModule, ResumeFeatureRoutingModule]
})
export class ResumeFeatureModule {}
