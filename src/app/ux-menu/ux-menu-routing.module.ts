import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UxMenuPage } from './ux-menu.page';

const routes: Routes = [
  {
    path: '',
    component: UxMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UxMenuPageRoutingModule {}
