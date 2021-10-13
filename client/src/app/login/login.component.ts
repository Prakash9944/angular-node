import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { BackendserviceService } from '../backendservice.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  constructor(private apiService: BackendserviceService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
     });

  }

  submit() {
    // console.log(this.loginForm.value)
  
    this.apiService.signin(this.loginForm.value).subscribe((res) => {
      console.log("res.................", res)
        this.router.navigateByUrl('/dashboard')
        
        
    });

  }

}
