import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'promo-code', loadChildren: () => import('./promo-code/promo-code.module').then(m => m.PromoCodeModule) },
        { path: 'push-notification', loadChildren: () => import('./push-notification/push-notification.module').then(m => m.PushNotificationModule) }
    ])],
    exports: [RouterModule]
})
export class SettingRoutingModule { }
