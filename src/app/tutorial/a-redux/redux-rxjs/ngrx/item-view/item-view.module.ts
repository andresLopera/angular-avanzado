import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ItemRoutingModule } from './item-view-routing.module';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemEffects } from './store/item.effects';
import { itemReducer } from './store/item.reducer';

@NgModule({
  declarations: [ItemViewComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    StoreModule.forFeature('item', itemReducer),
    EffectsModule.forFeature([ItemEffects])
  ]
})
export class ItemViewModule {}
