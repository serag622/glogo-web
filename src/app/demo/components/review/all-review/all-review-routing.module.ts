import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllReviewComponent } from './all-review.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AllReviewComponent }
	])],
	exports: [RouterModule]
})
export class AllReviewRoutingModule { }
