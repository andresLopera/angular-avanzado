import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemsContainerComponent } from './items-container/items-container.component';
import { ItemsListComponent } from './items-container/items-list/items-list.component';
import { ItemsNewComponent } from './items-container/items-new/items-new.component';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  declarations: [ItemsContainerComponent, ItemsNewComponent, ItemsListComponent],
  imports: [CommonModule, ItemsRoutingModule]
})
export class ItemsModule {}
