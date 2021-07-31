import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlacklistRoutingModule } from './blacklist-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListPageComponent, DetailPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    BlacklistRoutingModule
  ]
})
export class BlacklistModule { }
