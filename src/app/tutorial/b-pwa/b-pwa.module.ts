import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BPwaRoutingModule } from './b-pwa-routing.module';
import { PwaContainerComponent } from './pwa-container/pwa-container.component';

@NgModule({
  declarations: [PwaContainerComponent],
  imports: [
    CommonModule,
    BPwaRoutingModule
  ]
})
export class BPwaModule { }
