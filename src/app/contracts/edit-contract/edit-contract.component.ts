import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contract } from '../../models/contract';
import { ContractsService } from '../../services/contracts.service';

@Component({
  selector: 'app-edit-contract',
  templateUrl: '../add-contract/add-contract.component.html',
  styleUrls: ['./edit-contract.component.css']
})
export class EditContractComponent implements OnInit {
  contract: Contract;
  contractForm: FormGroup;
  showErrors = false;
  buttonDisable = false;
  editMode = true;

  constructor(private contractsService: ContractsService, private formBuilder: FormBuilder, private route: ActivatedRoute) {}

  formData = {};

  ngOnInit() {
    this.route.data
      .subscribe((data: { contract: any }) => {
        this.contract = data.contract;
        this.createForm();
      });
  }

  createForm() {
    this.contractForm = this.formBuilder.group({
      with: [this.contract.with, Validators.required],
      signed: [this.contract.signed],
      md: [this.contract.md, Validators.required],
      clientMd: [this.contract.clientMd, Validators.required],
      role: [this.contract.role, Validators.required],
      from: [this.contract.from, Validators.required],
      to: [this.contract.to, Validators.required],
      payDate: [this.contract.payDate, Validators.required],
      client: [this.contract.client, Validators.required],
    });
  }

  editContract() {
    this.showErrors = false;
    this.buttonDisable = true;
    if (this.contractForm.status === 'VALID') {
      this.contractsService.editContract(this.contract._id, this.contractForm.value);
    } else {
      this.showErrors = true;
      this.buttonDisable = false;
    }
  }
}
