import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RESUME_READ, ResumeRead } from '../../providers';
import { Observable } from 'rxjs';
import { ResumePresentation } from '../../presentation';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resume.page.html'
})
export class ResumePage {
  public constructor(@Inject(RESUME_READ) private readonly _resumeRead$: ResumeRead) {}

  public readonly resume$: Observable<ResumePresentation> = this._resumeRead$();
}
