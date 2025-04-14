import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyService, Vacancy } from '../../services/vacancy.service';
import { CompanyService, Company } from '../../services/company.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vacancy-list',
  imports: [CommonModule,FormsModule],
  standalone: true,
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];
  topVacancies: Vacancy[] = [];
  companies: Company[] = [];

  newVacancy: Vacancy = {
    name: '',
    description: '',
    salary: 0,
    company: 0
  };

  constructor(
    private vacancyService: VacancyService,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.loadVacancies();
    this.loadTopTen();
    this.companyService.getCompanies().subscribe(data => this.companies = data);
  }

  loadVacancies() {
    this.vacancyService.getVacancies().subscribe(data => {
      this.vacancies = data;
      this.populateCompanyInfo(this.vacancies);
    });
  }

  loadTopTen() {
    this.vacancyService.getTopTen().subscribe(data => {
      this.topVacancies = data;
      this.populateCompanyInfo(this.topVacancies);
    });
  }

  populateCompanyInfo(vacancies: Vacancy[]) {
    vacancies.forEach(v => {
      if (typeof v.company === 'number') {
        this.companyService.getCompany(v.company).subscribe(comp => {
          v.company = comp;  // Replace ID with full company object
        });
      }
    });
  }

  companyName(company: any): string | null {
    return typeof company === 'object' ? company.name : null;
  }


  addVacancy() {
    this.vacancyService.addVacancy(this.newVacancy).subscribe(vac => {
      this.vacancies.push(vac);
      this.newVacancy = { name: '', description: '', salary: 0, company: 0 };
    });
  }
}
