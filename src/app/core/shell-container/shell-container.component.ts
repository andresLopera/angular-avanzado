import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-shell-container',
  templateUrl: './shell-container.component.html',
  styles: []
})
export class ShellContainerComponent implements OnInit {
  public message = 'Angular Blocks';
  public message$;
  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    this.globalService.setMessage('Initializing...');
    this.message$ = this.globalService.getMessage$();
  }
}
