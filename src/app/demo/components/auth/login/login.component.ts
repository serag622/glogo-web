import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/demo/service/auth.service';
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
export class LoginComponent implements OnInit, OnDestroy {

  authForm: UntypedFormGroup;
  $subject = new Subject;
  isSubmit : boolean = false;
  isLoged : boolean = false

  constructor(public layoutService: LayoutService, private router: Router, private formBuilder: UntypedFormBuilder, private authService: AuthService) { }

  ngOnDestroy(): void {
    this.$subject.next(1);
    this.$subject.complete();
  }


  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      userName: ["admin@glogo.com", Validators.required],
      password: ["P@ssw0rd@123", Validators.required],
    });
  }

  isDisabled: boolean = false;

  onSubmit() {
    this.isSubmit = true
    this.isLoged = false
    if (!this.isDisabled) this.isDisabled = true
    else return

    if (this.authForm.invalid) {
      Object.values(this.authForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          this.isDisabled = false;
          this.isSubmit = false;
          this.isLoged =false
        }
      });
      return;
    } else {

      this.authService.Login(this.authForm.getRawValue()).pipe(takeUntil(this.$subject.asObservable())).subscribe((res: any) => {
        localStorage.setItem('token', res?.content?.data?.token)
        localStorage.setItem('userName', res?.content?.data?.userName)
        this.isDisabled = false;
        setTimeout(() => {
          this.isLoged = true
          this.isSubmit = false
          this.router.navigate(["/"]);
        }, 200)
      },(error)=>{
        this.isDisabled= false
        this.isSubmit= false
        this.isLoged= false
      })
    }
  }
}
