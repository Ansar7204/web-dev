import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Company {
  id?: number;
  name: string;
  description: string;
  city: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://localhost:8000/api/companies/';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.BASE_URL);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}${id}/`);
  }

  addCompany(company: Partial<Company>): Observable<Company> {
    return this.http.post<Company>(this.BASE_URL, company);
  }

  getCompanyVacancies(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}${id}/vacancies/`);
  }
}
