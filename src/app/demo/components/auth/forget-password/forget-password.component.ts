import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-forget-password',
    templateUrl: './forget-password.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class ForgetPasswordComponent implements OnInit {

    authForm: UntypedFormGroup;
    codeDialog : boolean = false ;
    verifyForm: UntypedFormGroup;

    constructor(public layoutService: LayoutService , private router: Router , private formBuilder: UntypedFormBuilder) { }
   
   
    ngOnInit(): void {
        this.authForm = this.formBuilder.group({
            username: [ "admin@software.com", Validators.required],
          });
    }

    createVerifyForm(): UntypedFormGroup {
      return this.formBuilder.group({
        email: [this.authForm.controls['username'].value, Validators.email],
        verificationCode: ['', [Validators.maxLength(6), Validators.minLength(6), Validators.required]]
      })
    }

    onSubmit() {
        
        if (this.authForm.invalid) {

          return;
        } else {
          this.verifyForm = this.createVerifyForm()
          this.codeDialog = true
        }
      }


      sendcode(){
        this.codeDialog = false
        this.router.navigate(["/auth/set-password"]);
      }
}
