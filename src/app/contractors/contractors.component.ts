import { Component, OnInit } from '@angular/core';
import { ContractorsService } from '../services/contractors.service';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.css']
})
export class ContractorsComponent implements OnInit {
  contractors: any = [];
  filter = {
    mdFrom: '',
    mdTo: ''
  };

  constructor(private contractorsService: ContractorsService) { }

  ngOnInit() {
    this.getContractors();
  }

  getContractors(): void {
    this.contractorsService.getContractors()
    .subscribe(contractors => this.contractors = contractors);
  }

}
