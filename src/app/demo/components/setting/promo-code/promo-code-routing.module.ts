import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PromoCodeComponent } from './promo-code.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PromoCodeComponent }
	])],
	exports: [RouterModule]
})
export class PromoCodeRoutingModule { }
