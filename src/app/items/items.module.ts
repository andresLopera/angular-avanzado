import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsContainerComponent } from './items-container/items-container.component';
import { ItemsNewComponent } from './items-container/items-new/items-new.component';
import { ItemsListComponent } from './items-container/items-list/items-list.component';

@NgModule({
  declarations: [ItemsContainerComponent, ItemsNewComponent, ItemsListComponent],
  imports: [
    CommonModule
  ]
})
export class ItemsModule { }
