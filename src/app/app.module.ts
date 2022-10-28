import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SidbarComponent} from './home/sidbar/sidbar.component';
import {NavbarComponent} from './home/navbar/navbar.component';
import {LayoutComponent} from './home/layout/layout.component';
import {FooterComponent} from './home/footer/footer.component';
import {CandidatComponent} from './candidat/candidat.component';

import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ProfilComponent } from './profil/profil.component';
import { CandidatPipe } from './recherche/candidat.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { EntreprisePipe } from './recherche/entreprise.pipe';
import { DomaineComponent } from './domaine/domaine.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap/modal';
import { OffreComponent } from './offre/offre.component';
import { EntrepriseofferComponent } from './offre/entrepriseoffer/entrepriseoffer.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { CompetenceComponent } from './competence/competence.component';
import { TestComponent } from './test/test.component';
import { DetailtestComponent } from './detailtest/detailtest.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OncreateDirective } from './detailtest/oncreate.directive';
import { QuestionPipe } from './recherche/question.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidbarComponent,
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    CandidatComponent,
    LoginComponent,
    EntrepriseComponent,
    ProfilComponent,
    CandidatPipe,
    EntreprisePipe,
    DomaineComponent,
    OffreComponent,
    EntrepriseofferComponent,
    SpecialiteComponent,
    CompetenceComponent,
    TestComponent,
    DetailtestComponent,
    OncreateDirective,
    QuestionPipe
  ],
  imports: [NgxPaginationModule,ModalModule.forRoot(),

    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule,NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
