import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContractorsService {

  constructor(private http: HttpClient, private router: Router) { }

  addContractor(data): any {
    this.http.post('http://localhost:3000/contractors', data)
      .subscribe(res => {
        this.router.navigate(['/contractors']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  getContractors(): Observable<any> {
      return this.http.get('http://localhost:3000/contractors');
  }

  getContractor(id): Promise<any> {
    return this.http.get('http://localhost:3000/contractors/' + id).toPromise()
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  editContractor(id, data) {
    return this.http.put('http://localhost:3000/contractors/' + id, data)
      .subscribe(res => {
          const contractorId = res['_id'];
          this.router.navigate(['/contractor', contractorId]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  deleteContractor(id) {
    return this.http.delete('http://localhost:3000/contractors/' + id);
  }
}
