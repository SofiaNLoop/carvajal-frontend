import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Form Reactive
  loginForm : FormGroup;



  constructor( private fb: FormBuilder,
              private logServ: LoginService,
              private router: Router ) {

    this.loginForm = this.fb.group({

      email: ['', Validators.required],
      password: ['', Validators.required],

    });


  }

  ngOnInit(): void {
  }

  login(){
    this.logServ.login( this.loginForm.value )
      .subscribe( data => {

        this.router.navigateByUrl('/catalogue');

      }, (err)=>{
        Swal.fire('Error', err.error.msg, 'error');
      });

  };





}
