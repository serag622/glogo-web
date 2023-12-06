import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'all-users', loadChildren: () => import('./all-users/all-users.module').then(m => m.AllUsersModule) },
        { path: 'user-request', loadChildren: () => import('./user-request/user-request.module').then(m => m.UserRequestModule) }
    ])],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
