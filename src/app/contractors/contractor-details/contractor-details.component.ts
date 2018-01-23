import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractorsService } from '../../services/contractors.service';

@Component({
  selector: 'app-contractor-details',
  templateUrl: './contractor-details.component.html',
  styleUrls: ['./contractor-details.component.css']
})
export class ContractorDetailsComponent implements OnInit {
  contractor: any = [];
  id = this.route.snapshot.params['id'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contractorsService: ContractorsService) {
  }

  ngOnInit() {
    this.getContractor();
  }

  getContractor(): void {
    this.contractorsService.getContractor(this.id)
    .then(contractor => {
      this.contractor = contractor;
    });
  }

  deleteContractor(): void {
    this.contractorsService.deleteContractor(this.id)
    .subscribe(res => {
      this.router.navigate(['/contractors']);
    });
  }

}
