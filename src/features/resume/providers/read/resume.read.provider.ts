import { FactoryProvider } from '@angular/core';
import { Observable } from 'rxjs';
import { ResumePresentation } from '../../presentation';

export const RESUME_READ: 'resume.read' = 'resume.read' as const;

export type ResumeRead = () => Observable<ResumePresentation>;

export const resumeReadProvider = <TDependencies>(
  useFactory: (...providers: never[]) => ResumeRead,
  deps: TDependencies[] = []
): FactoryProvider => ({
  provide: RESUME_READ,
  useFactory,
  deps
});
