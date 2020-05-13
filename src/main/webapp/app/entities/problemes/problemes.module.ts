import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProblemeSharedModule } from 'app/shared/shared.module';
import { ProblemesComponent } from './problemes.component';
import { ProblemesDetailComponent } from './problemes-detail.component';
import { ProblemesUpdateComponent } from './problemes-update.component';
import { ProblemesDeleteDialogComponent } from './problemes-delete-dialog.component';
import { problemesRoute } from './problemes.route';

@NgModule({
  imports: [ProblemeSharedModule, RouterModule.forChild(problemesRoute)],
  declarations: [ProblemesComponent, ProblemesDetailComponent, ProblemesUpdateComponent, ProblemesDeleteDialogComponent],
  entryComponents: [ProblemesDeleteDialogComponent]
})
export class ProblemeProblemesModule {}
