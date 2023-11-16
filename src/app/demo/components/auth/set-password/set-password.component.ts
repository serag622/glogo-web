import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-set-password',
    templateUrl: './set-password.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class SetPasswordComponent implements OnInit {

    authForm: UntypedFormGroup;


    constructor(public layoutService: LayoutService , private router: Router , private formBuilder: UntypedFormBuilder) { }
   
   
    ngOnInit(): void {
        this.authForm = this.formBuilder.group({
            password: [ "admin@123", Validators.required],
            confirmPassword: [ "admin@123", Validators.required],
          });
    }


    onSubmit() {
        
        if (this.authForm.invalid) {

          return;
        } else {
    
          this.router.navigate(['auth/login'])
        
        }
      }
}
