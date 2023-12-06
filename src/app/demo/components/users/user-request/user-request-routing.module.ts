import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserRequestComponent } from './user-request.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: UserRequestComponent }
	])],
	exports: [RouterModule]
})
export class UserRequestRoutingModule { }
