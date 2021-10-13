import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, switchMap, tap, delay,filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {

  constructor(private Http: HttpClient) { }

  signin (formValue) {
    console.log(this)
    return this.Http.post("http://localhost:5000/api/user/signin", formValue);
  }

  signup (formValue) {
    return this.Http.post("http://localhost:5000/api/user/signup", formValue);
  }

  editUser (formValue) {
    this.Http.put("http://localhost:5000/api/user/edituser", formValue);
  }

  getUser(){
    return this.Http.get("http://localhost:5000/api/user/getuser");
  }

  getSingleEmployee (id) {
    return this.Http.get("http://localhost:5000/api/user/getuser/"+id);
  }

  deleteUser (formValue) {
    return this.Http.delete("http://localhost:5000/api/user/deleteuser/"+formValue);
  }
  
}
