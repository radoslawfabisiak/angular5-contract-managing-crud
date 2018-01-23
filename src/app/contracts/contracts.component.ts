import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../services/contracts.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  contracts: any = [];
  filter = {
    role: '',
    client: '',
    mdFrom: '',
    mdTo: ''
  };

  constructor(private contractsService: ContractsService) { }

  ngOnInit() {
    this.getContracts();
  }

  getContracts(): void {
    this.contractsService.getContracts()
    .subscribe(contracts => this.contracts = contracts);
  }

}
