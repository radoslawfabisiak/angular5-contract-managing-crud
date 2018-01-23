import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import { ContractorsService } from './contractors.service';

@Injectable()
export class GetContractorResolve implements Resolve<any> {
    constructor(private contractorsService: ContractorsService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Promise<any> | boolean {
        const id = route.params['id'];
        return this.contractorsService.getContractor(id).then(contractor => {
            if (contractor) {
                return contractor;
            } else {
                this.router.navigate(['/contractors']);
                return false;
            }
        });
    }
}
