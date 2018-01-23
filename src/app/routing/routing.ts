import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoggedInComponent } from '../auth/logged-in/logged-in.component';
import { ContractsComponent } from '../contracts/contracts.component';
import { ContractDetailComponent } from '../contracts/contract-detail/contract-detail.component';
import { ContractorsComponent } from '../contractors/contractors.component';
import { ContractorDetailsComponent } from '../contractors/contractor-details/contractor-details.component';
import { AddContractorComponent } from '../contractors/add-contractor/add-contractor.component';
import { AddContractComponent } from '../contracts/add-contract/add-contract.component';
import { EditContractorComponent } from '../contractors/edit-contractor/edit-contractor.component';
import { GetContractorResolve } from '../services/get-contractor-resolve';
import { GetContractResolve } from '../services/get-contract-resolve';
import { EditContractComponent } from '../contracts/edit-contract/edit-contract.component';

export const routing: Routes = [
  { path: '',
    component: LoggedInComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard' }
      },
      {
        path: 'contracts',
        component: ContractsComponent,
        data: { title: 'Contracts' }
      },
      {
        path: 'contract/:id',
        component: ContractDetailComponent,
        resolve: {
          contract: GetContractResolve
        },
      },
      {
        path: 'add-contract',
        component: AddContractComponent,
        data: { title: 'Add contract' }
      },
      {
        path: 'edit-contract/:id',
        component: EditContractComponent,
        resolve: {
          contract: GetContractResolve
        },
      },
      {
        path: 'contractors',
        component: ContractorsComponent,
        data: { title: 'Contractors' }
      },
      {
        path: 'contractor/:id',
        component: ContractorDetailsComponent,
        data: { title: 'Contractor Details' }
      },
      {
        path: 'add-contractor',
        component: AddContractorComponent,
        data: { title: 'Add contractor' }
      },
      {
        path: 'edit-contractor/:id',
        component: EditContractorComponent,
        resolve: {
          contractor: GetContractorResolve
        },
      },
      { path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];
