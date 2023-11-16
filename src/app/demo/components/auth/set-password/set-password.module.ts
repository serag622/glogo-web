import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetPasswordComponent } from './set-password.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { SetPasswordRoutingModule } from './set-password-routing.module';
@NgModule({
    imports: [
        CommonModule,
        SetPasswordRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule ,
        ReactiveFormsModule
    ],
    declarations: [SetPasswordComponent]
})
export class SetPasswordModule { }
