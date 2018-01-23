import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';

import { routing } from './routing/routing';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedInComponent } from './auth/logged-in/logged-in.component';
import { LoggedOutComponent } from './auth/logged-out/logged-out.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContractsComponent } from './contracts/contracts.component';
import { ContractDetailComponent } from './contracts/contract-detail/contract-detail.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { ContractorDetailsComponent } from './contractors/contractor-details/contractor-details.component';
import { AddContractorComponent } from './contractors/add-contractor/add-contractor.component';
import { AddContractComponent } from './contracts/add-contract/add-contract.component';
import { ContractorsService } from './services/contractors.service';
import { ContractsService } from './services/contracts.service';
import { EditContractorComponent } from './contractors/edit-contractor/edit-contractor.component';
import { GetContractorResolve } from './services/get-contractor-resolve';
import { GetContractResolve } from './services/get-contract-resolve';
import { EditContractComponent } from './contracts/edit-contract/edit-contract.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ExperienceYearsPipe } from './pipes/experience-years.pipe';
import { RangeFilterPipe } from './pipes/range-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoggedInComponent,
    LoggedOutComponent,
    NavigationComponent,
    ContractsComponent,
    ContractDetailComponent,
    ContractorsComponent,
    ContractorDetailsComponent,
    AddContractorComponent,
    AddContractComponent,
    EditContractorComponent,
    EditContractComponent,
    SearchFilterPipe,
    ExperienceYearsPipe,
    RangeFilterPipe,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routing,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    ContractorsService,
    ContractsService,
    GetContractorResolve,
    GetContractResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
