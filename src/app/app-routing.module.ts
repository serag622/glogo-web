import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthGuard } from './core/guard/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                canActivate: [AuthGuard],
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path : 'home' , redirectTo : ''} ,
                    { path: 'admin', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) } ,
                    { path: 'users', loadChildren: () => import('./demo/components/users/users.module').then(m => m.UsersModule) } ,
                    { path: 'trips', loadChildren: () => import('./demo/components/trips/trip.module').then(m => m.TripsModule) } ,
                    { path: 'review', loadChildren: () => import('./demo/components/review/review.module').then(m => m.ReviewsModule) },
                    { path: 'payment', loadChildren: () => import('./demo/components/payment/payment.module').then(m => m.PaymentModule) },
                    { path: 'setting', loadChildren: () => import('./demo/components/setting/setting.module').then(m => m.SettingModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
        ],
       { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
