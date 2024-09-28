import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from '../../_models/owner';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  url: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  GetAllOwners(): Observable<Owner[]>{
    return this.httpClient.get<Owner[]>(`${this.url}/api/Owner`);
  }

  getOwnersByName(name:string): Observable<Owner[]>{
    return this.httpClient.get<Owner[]>(
      `${this.url}/api/Owner/owners-by-name?name=${name}`
    );
  }
}
