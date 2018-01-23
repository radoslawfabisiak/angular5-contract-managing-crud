import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractsService } from '../../services/contracts.service';
import { ContractorsService } from './../../services/contractors.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {
  contractForm: FormGroup;
  contractors: any;
  showErrors = false;
  buttonDisable = false;

  constructor(
    private contractsService: ContractsService,
    private contractorsService: ContractorsService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  formData = {};

  ngOnInit() {
    this.getContractors();
    this.createForm();
  }

  getContractors(): void {
    this.contractorsService.getContractors()
    .subscribe(contractors => this.contractors = contractors);
  }

  createForm() {
    this.contractForm = this.formBuilder.group({
      with: ['', Validators.required],
      signed: [''],
      md: ['', Validators.required],
      clientMd: ['', Validators.required],
      role: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      payDate: ['', Validators.required],
      client: ['', Validators.required],
    });
  }

  addContract() {
    this.showErrors = false;
    this.buttonDisable = true;
    if (this.contractForm.status === 'VALID') {
      this.contractsService.addContract(this.contractForm.value);
    } else {
      this.showErrors = true;
      this.buttonDisable = false;
    }
  }
}
