import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { BackendserviceService } from '../backendservice.service';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {
  
  editForm: FormGroup;
  constructor(private apiService: BackendserviceService, private fb: FormBuilder, private actRoute:  ActivatedRoute) {
    // this.getEmployee();
   }

  ngOnInit() {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);

    // this.editForm = this.fb.group({
    //   name: ['', [Validators.required]],
    //   email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    //   address: ['', [Validators.required]],
    //   password: ['', [Validators.required]]
    // });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEmployee(id) {
    this.apiService.getSingleEmployee(id).subscribe(res => {
      // this.editForm.setValue({
      //   name: res['firstName'],
      //   email: res['email'],
      //   address: res['address'],
      //   password: res['password'],
      // });

      console.log("response...", res)
    })
  }

}
