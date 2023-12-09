import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PushNOtificationComponent } from './push-notification.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PushNOtificationComponent }
	])],
	exports: [RouterModule]
})
export class PushNotificationRoutingModule { }
