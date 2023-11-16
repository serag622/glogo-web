import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: 'forget-password', loadChildren: () => import('./forget-password/forget-password.module').then(m => m.ForgetPasswordModule) },
        { path: 'set-password', loadChildren: () => import('./set-password/set-password.module').then(m => m.SetPasswordModule) },

    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
