import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AllUsersComponent }
	])],
	exports: [RouterModule]
})
export class AllUsersRoutingModule { }
