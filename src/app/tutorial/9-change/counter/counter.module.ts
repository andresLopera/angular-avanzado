import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsyncComponent } from './change-container/async/async.component';
import { ChangeContainerComponent } from './change-container/change-container.component';
import { DetectorComponent } from './change-container/detector/detector.component';
import { ChildComponent } from './change-container/parent/child/child.component';
import { ParentComponent } from './change-container/parent/parent.component';
import { SubscribeComponent } from './change-container/subscribe/subscribe.component';
import { CounterRoutingModule } from './counter-routing.module';

@NgModule({
  declarations: [
    ParentComponent,
    DetectorComponent,
    ChildComponent,
    AsyncComponent,
    SubscribeComponent,
    ChangeContainerComponent
  ],
  imports: [CommonModule, CounterRoutingModule]
})
export class CounterModule {}
