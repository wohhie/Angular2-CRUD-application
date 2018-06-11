import { EmpService } from './../emp.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  employee: Employee;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmpService
  ) { }

  ngOnInit() {
    this.getSingleEmployee();
  }

  getSingleEmployee() {
    var id = this.route.snapshot.params['id'];
    this.empService
      .getEmployee(id)
      .subscribe(employee => {
        this.employee = employee[0];
      });
  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
