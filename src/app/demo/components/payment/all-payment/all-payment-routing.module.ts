import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllPaymentComponent } from './all-payment.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AllPaymentComponent }
	])],
	exports: [RouterModule]
})
export class AllPaymentRoutingModule { }
