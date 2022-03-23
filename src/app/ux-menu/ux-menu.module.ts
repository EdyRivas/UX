import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UxMenuPageRoutingModule } from './ux-menu-routing.module';

import { UxMenuPage } from './ux-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UxMenuPageRoutingModule
  ],
  declarations: [UxMenuPage]
})
export class UxMenuPageModule {}
