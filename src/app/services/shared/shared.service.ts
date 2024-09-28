import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Owner } from '../../_models/owner';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private ownersSource = new BehaviorSubject<Owner[]>([]);
  currentOwners = this.ownersSource.asObservable();

  constructor() { }
  setOwners(owners: Owner[]) {
    this.ownersSource.next(owners);
  }
}
