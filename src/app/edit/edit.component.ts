import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  model = new Employee();
  id = this.route.snapshot.params['id'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmpService
  ) { }

  ngOnInit() {
    this.getSingleEmployee();
  }

  getSingleEmployee() {
    this.empService
      .getEmployee(this.id)
      .subscribe(employee => {
        this.model = employee[0];
      });
  }

  updateEmployee() {
    this.empService
      .updateEmployee(this.model)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
