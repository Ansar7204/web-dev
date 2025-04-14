import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyService, Company } from '../../services/company.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-list',
  imports: [RouterModule, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  newCompany: Partial<Company> = {
    name: '',
    description: '',
    city: '',
    address: ''
  };

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  addCompany() {
    this.companyService.addCompany(this.newCompany).subscribe(company => {
      this.companies.push(company); // instantly update UI
      this.newCompany = { name: '', description: '', city: '', address: '' }; // reset form
    });
  }
}

