import { ContractorDetailsComponent } from './../contractor-details/contractor-details.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContractorsService } from '../../services/contractors.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contractor } from '../../models/contractor';

@Component({
  selector: 'app-edit-contractor',
  templateUrl: '../add-contractor/add-contractor.component.html',
  styleUrls: ['./edit-contractor.component.css']
})
export class EditContractorComponent implements OnInit {
  contractor: Contractor;
  contractorForm: FormGroup;
  showErrors = false;
  buttonDisable = false;
  editMode = true;

  constructor(private contractorsService: ContractorsService, private formBuilder: FormBuilder, private route: ActivatedRoute) {}

  formData = {};

  ngOnInit() {
    this.route.data
      .subscribe((data: { contractor: any }) => {
        this.contractor = data.contractor;
        this.createForm();
      });
  }

  createForm() {
    this.contractorForm = this.formBuilder.group({
      name: [this.contractor.name, Validators.required],
      md: [this.contractor.md, Validators.required],
      role: [this.contractor.role, Validators.required],
      freeFrom: [this.contractor.freeFrom, Validators.required],
      firstExperience: [this.contractor.firstExperience, Validators.required],
    });
  }

  editContractor() {
    this.showErrors = false;
    this.buttonDisable = true;
    if (this.contractorForm.status === 'VALID') {
      this.contractorsService.editContractor(this.contractor._id, this.contractorForm.value);
    } else {
      this.showErrors = true;
      this.buttonDisable = false;
    }
  }
}
