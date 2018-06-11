import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpService {

  employees = [];

  constructor(private _http: Http) { }
  checkMe: any;
  getEmployees() {
    return this._http.get('http://localhost/api/select.php/')
      .map(res => {
        this.checkMe = res;

        if (this.checkMe._body !== '0') {
          return res.json();
        }
      });
  }

  addEmployee(arg0) {
    console.log(arg0);
    return this._http.post('http://localhost/api/insert.php', arg0)
        .map(() => '');
  }


  getEmployee(id) {
    return this._http.post('http://localhost/api/selectOne.php', {'id': id})
    .map(res => res.json());
  }

  updateEmployee(info) {
    return this._http.post('http://localhost/api/update.php', info)
    .map(() => '');
  }

  deleteEmployee(id) {
    return this._http.post('http://localhost/api/delete.php/', {'id': id})
      .map(() => this.getEmployees());
  }

}
