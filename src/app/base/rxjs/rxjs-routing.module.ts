import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule {}
