import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordRoutingModule } from './forget-password-routing.module';
import { ForgetPasswordComponent } from './forget-password.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
    imports: [
        CommonModule,
        ForgetPasswordRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule ,
        ReactiveFormsModule,
        DialogModule ,
        InputNumberModule
    ],
    declarations: [ForgetPasswordComponent]
})
export class ForgetPasswordModule { }
