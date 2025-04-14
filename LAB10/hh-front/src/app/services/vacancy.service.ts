import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company.service';

export interface Vacancy {
  id?: number;
  name: string;
  description: string;
  salary: number;
  company: number | Company;
}

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://localhost:8000/api/vacancies/';

  constructor(private http: HttpClient) {}

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.BASE_URL);
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.BASE_URL}${id}/`);
  }

  addVacancy(vacancy: Vacancy): Observable<Vacancy> {
    return this.http.post<Vacancy>(this.BASE_URL, vacancy);
  }

  getTopTen(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}top_ten/`);
  }
}
