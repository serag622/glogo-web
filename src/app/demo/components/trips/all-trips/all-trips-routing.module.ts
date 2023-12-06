import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllTripsComponent } from './all-trips.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AllTripsComponent }
	])],
	exports: [RouterModule]
})
export class AllTripsRoutingModule { }
