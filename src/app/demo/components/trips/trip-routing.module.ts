import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'all-Trips', loadChildren: () => import('./all-trips/all-trips.module').then(m => m.AllTripsModule) },
    ])],
    exports: [RouterModule]
})
export class TripsRoutingModule { }
