import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../_models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = environment.apiUrl;
  }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.url}/api/Category`);
  }
}
