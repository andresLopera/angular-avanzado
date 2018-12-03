import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellContainerComponent } from './shell-container/shell-container.component';
import { ShellFooterComponent } from './shell-container/shell-footer/shell-footer.component';
import { ShellHeaderComponent } from './shell-container/shell-header/shell-header.component';
import { ShellMainComponent } from './shell-container/shell-main/shell-main.component';

@NgModule({
  declarations: [ShellContainerComponent, ShellHeaderComponent, ShellFooterComponent, ShellMainComponent],
  imports: [CommonModule, RouterModule],
  exports: [ShellContainerComponent]
})
export class CoreModule {}
