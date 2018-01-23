import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../../services/contracts.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  contract: any = [];
  id = this.route.snapshot.params['id'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contractsService: ContractsService) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { contract: any }) => {
        this.contract = data.contract;
      });
  }

  deleteContractor(): void {
    this.contractsService.deleteContract(this.id)
    .subscribe(res => {
      this.router.navigate(['/contracts']);
    });
  }

}
