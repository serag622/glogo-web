import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit {

    authForm: UntypedFormGroup;


    constructor(public layoutService: LayoutService , private router: Router , private formBuilder: UntypedFormBuilder) { }
   
   
    ngOnInit(): void {
        this.authForm = this.formBuilder.group({
            username: [ "admin@software.com", Validators.required],
            password: [ "admin@123", Validators.required],
          });
    }


    onSubmit() {
        
        if (this.authForm.invalid) {

          return;
        } else {
    
          localStorage.setItem('token','Admin')
          this.router.navigate(["/"]);
        
        }
      }
}
