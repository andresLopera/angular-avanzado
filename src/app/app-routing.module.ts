import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'items',
    loadChildren: './base/items/items.module#ItemsModule'
  },
  {
    path: '8-reactive',
    loadChildren: './8-reactive/contacts/contacts.module#ContactsModule'
  },
  {
    path: '9-change',
    loadChildren: './9-change/change.module#ChangeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
