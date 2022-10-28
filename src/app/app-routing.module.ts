import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './home/layout/layout.component';
import {CandidatComponent} from './candidat/candidat.component';
import {LoginComponent} from './login/login.component';
import {EntrepriseComponent} from './entreprise/entreprise.component';
import {ProfilComponent} from './profil/profil.component';
import {DomaineComponent} from './domaine/domaine.component';
import {OffreComponent} from './offre/offre.component';
import {SpecialiteComponent} from './specialite/specialite.component';
import {CompetenceComponent} from './competence/competence.component';
import {TestComponent} from './test/test.component';
import {DetailtestComponent} from './detailtest/detailtest.component';


const routes: Routes = [{path: '', component: LoginComponent},
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', component: LayoutComponent},
      {path: 'candidat', component: CandidatComponent},
      {path: 'entreprise', component: EntrepriseComponent},
      {path: 'profile/:id', component: ProfilComponent},
      {path: 'domaine', component: DomaineComponent},
      {path: 'offre', component: OffreComponent},
      {path: 'specialite', component: SpecialiteComponent},
      {path: 'competence', component: CompetenceComponent},
      {path: 'test', component: TestComponent},
      {path: 'detailtest/:id', component: DetailtestComponent},

    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
