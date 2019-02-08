import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SearchComponent } from './search/search.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [RxjsComponent, SearchComponent, MapsComponent],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
