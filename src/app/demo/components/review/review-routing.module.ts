import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'all-reviews', loadChildren: () => import('./all-review/all-review.module').then(m => m.AllReviewModule) },
    ])],
    exports: [RouterModule]
})
export class ReviewRoutingModule { }
