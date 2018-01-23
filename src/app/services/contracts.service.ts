import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContractsService {

  constructor(private http: HttpClient, private router: Router) { }

  addContract(data): any {
    data.with = {
      name: data.with.name,
      _id: data.with._id
    };
    this.http.post('http://localhost:3000/contracts', data)
      .subscribe(res => {
        this.router.navigate(['/contracts']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  getContracts(): Observable<any> {
      return this.http.get('http://localhost:3000/contracts');
  }

  getContract(id): Promise<any> {
    return this.http.get('http://localhost:3000/contracts/' + id).toPromise()
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  editContract(id, data) {
    return this.http.put('http://localhost:3000/contracts/' + id, data)
      .subscribe(res => {
          const contractId = res['_id'];
          this.router.navigate(['/contract', contractId]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  deleteContract(id) {
    return this.http.delete('http://localhost:3000/contracts/' + id);
  }
}
