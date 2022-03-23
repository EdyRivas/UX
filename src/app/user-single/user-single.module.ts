import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSinglePageRoutingModule } from './user-single-routing.module';

import { UserSinglePage } from './user-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSinglePageRoutingModule
  ],
  declarations: [UserSinglePage]
})
export class UserSinglePageModule {}
