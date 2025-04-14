import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list-component/company-list/company-list.component';
import { CompanyDetailComponent } from '../app/company-detail-component/company-detail/company-detail.component';
import { VacancyListComponent } from './vacancy-list-component/vacancy-list/vacancy-list.component';

export const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'companies/:id', component: CompanyDetailComponent },
  { path: 'vacancies', component: VacancyListComponent }
];
