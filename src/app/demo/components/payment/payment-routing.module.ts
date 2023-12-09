import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'all-payment', loadChildren: () => import('./all-payment/all-payment.module').then(m => m.AllPaymentModule) },
    ])],
    exports: [RouterModule]
})
export class PaymentRoutingModule { }
