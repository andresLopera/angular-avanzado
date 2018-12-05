import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemsContainerComponent } from './items-container/items-container.component';
import { ReduxNgrxRoutingModule } from './redux-ngrx-routing.module';

@NgModule({
  declarations: [ItemsContainerComponent],
  imports: [CommonModule, ReduxNgrxRoutingModule]
})
export class ReduxNgrxModule {}
