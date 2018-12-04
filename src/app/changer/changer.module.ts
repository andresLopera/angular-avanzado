import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsyncComponent } from './async/async.component';
import { ChangerRoutingModule } from './changer-routing.module';
import { DetectorComponent } from './detector/detector.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    ParentComponent,
    DetectorComponent,
    ChildComponent,
    AsyncComponent,
    SubscribeComponent
  ],
  imports: [CommonModule, ChangerRoutingModule]
})
export class ChangeModule {}
