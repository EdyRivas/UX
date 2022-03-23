import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSinglePage } from './user-single.page';

const routes: Routes = [
  {
    path: '',
    component: UserSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSinglePageRoutingModule {}
