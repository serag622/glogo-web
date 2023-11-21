import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'all-users', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
