import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.css']
})
export class GetusersComponent implements OnInit {

  Employee:any = [];
  constructor(private apiService: BackendserviceService, private router: Router) { 
    this.getEmployee();
  }

  ngOnInit() {}

  getEmployee() {
    this.apiService.getUser().subscribe( (data) => {
      console.log("data", data)
      this.Employee = data;
    });
  }

  removeEmployee (user) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteUser(user._id).subscribe((data) => {
            // this.router.routeReuseStrategy
            this.router.onSameUrlNavigation = 'reload';

          
        this.Employee = data;
      });
    }

  }

}
