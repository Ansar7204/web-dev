import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompanyService, Company } from '../../services/company.service';
import { VacancyService, Vacancy } from '../../services/vacancy.service';

@Component({
  selector: 'app-company-detail',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent implements OnInit {
  company!: Company;
  vacancies: Vacancy[] = [];
  companyId!: number;

  newVacancy: Vacancy = {
    name: '',
    description: '',
    salary: 0,
    company: 0
  };

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) {}

  ngOnInit() {
    this.companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getCompany(this.companyId).subscribe(data => this.company = data);
    this.companyService.getCompanyVacancies(this.companyId).subscribe(data => this.vacancies = data);
  }

  addVacancy() {
    this.newVacancy.company = this.companyId;
    this.vacancyService.addVacancy(this.newVacancy).subscribe(v => {
      this.vacancies.push(v);
      this.newVacancy = { name: '', description: '', salary: 0, company: this.companyId };
    });
  }
}
