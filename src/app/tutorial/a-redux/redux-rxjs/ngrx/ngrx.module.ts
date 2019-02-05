import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../../../environments/environment';
import { ItemsContainerComponent } from './items-container/items-container.component';
import { NgRxRoutingModule } from './ngrx-routing.module';
import { metaReducers, rootReducers } from './store/root';
import { ItemsEffects } from './store/root/items/items.effects';

@NgModule({
  declarations: [ItemsContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgRxRoutingModule,
    StoreModule.forRoot(rootReducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([ItemsEffects])
  ]
})
export class NgRxModule {}
