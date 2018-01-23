import { Component, OnInit } from '@angular/core';
import { ContractorsService } from '../../services/contractors.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contractor',
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.css']
})
export class AddContractorComponent implements OnInit {
  contractorForm: FormGroup;
  showErrors = false;
  buttonDisable = false;

  constructor(private contractorsService: ContractorsService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  formData = {};

  ngOnInit() {
  }

  createForm() {
    this.contractorForm = this.formBuilder.group({
      name: ['', Validators.required],
      md: ['', Validators.required],
      role: ['', Validators.required],
      freeFrom: ['', Validators.required],
      firstExperience: ['', Validators.required],
    });
  }

  addContractor() {
    this.showErrors = false;
    this.buttonDisable = true;
    if (this.contractorForm.status === 'VALID') {
      this.contractorsService.addContractor(this.contractorForm.value);
    } else {
      this.showErrors = true;
      this.buttonDisable = false;
    }
  }
}
