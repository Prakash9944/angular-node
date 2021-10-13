import { Component, OnInit, Input} from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup
  constructor(private backendCall: BackendserviceService, private router: Router) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      education: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      occupation: new FormControl('', Validators.required)
     });

  }

  submit() {
    this.backendCall.signup(this.signupForm.value).subscribe(res => {
      // console.log("this.router.navigateByUrl('/empoyee-list')", res)
        this.router.navigateByUrl('/login')
    });
  }

}
