import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponent } from './async/async.component';
import { DetectorComponent } from './detector/detector.component';
import { ParentComponent } from './parent/parent.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  {
    path: 'detector',
    component: DetectorComponent
  },
  {
    path: 'family',
    component: ParentComponent
  },
  {
    path: 'async',
    component: AsyncComponent
  },
  {
    path: 'subscribe',
    component: SubscribeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangerRoutingModule {}
