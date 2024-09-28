import { Component, OnInit } from '@angular/core';
import { Owner } from '../../_models/owner';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent implements OnInit{
  owners: Owner[];

  constructor(private sharedService:SharedService) {
    this.owners = [];
  }

  ngOnInit(): void {
    this.sharedService.currentOwners.subscribe((owners: Owner[]) => {
      this.owners = owners;
    });
  }

}
