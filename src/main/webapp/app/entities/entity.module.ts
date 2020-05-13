import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'problemes',
        loadChildren: () => import('./problemes/problemes.module').then(m => m.ProblemeProblemesModule)
      },
      {
        path: 'agence',
        loadChildren: () => import('./agence/agence.module').then(m => m.ProblemeAgenceModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class ProblemeEntityModule {}
