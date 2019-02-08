import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsContainerComponent } from './items-container/items-container.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsContainerComponent
  },
  {
    path: ':id',
    loadChildren: './item-view/item-view.module#ItemViewModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgRxRoutingModule {}
