import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import { ContractsService } from './contracts.service';

@Injectable()
export class GetContractResolve implements Resolve<any> {
    constructor(private contractorsService: ContractsService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Promise<any> | boolean {
        const id = route.params['id'];
        return this.contractorsService.getContract(id).then(contractor => {
            if (contractor) {
                return contractor;
            } else {
                this.router.navigate(['/contracts']);
                return false;
            }
        });
    }
}
