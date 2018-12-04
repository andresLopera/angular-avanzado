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
    path: 'change',
    loadChildren: './change/change.module#ChangeModule'
  },
  {
    path: 'contacts',
    loadChildren: './reactive/contacts/contacts.module#ContactsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
