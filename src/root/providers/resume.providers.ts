import { HttpClient } from '@angular/common/http';
import { FactoryProvider } from '@angular/core';
import { resumeRead$ } from '@features/resume/reads/resume/resume.read';
import { resumeReadProvider } from '@features/resume/providers';

export const RESUME_PROVIDERS: FactoryProvider[] = [resumeReadProvider(resumeRead$, [HttpClient])];
