import { EmpService } from './../emp.service';
import { Component, OnInit , NgModule} from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  model = new Employee();
  constructor(
    private empService: EmpService,
    private router: Router) { }

  ngOnInit() {
  }


  addEmployee() {
    this.empService
      .addEmployee(this.model)
      .subscribe(() => this.goBack());
  }


  goBack(): any {
    this.router.navigate(['/home']);
  }

}
