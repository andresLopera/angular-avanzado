import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-shell-container',
  templateUrl: './shell-container.component.html',
  styles: []
})
export class ShellContainerComponent implements OnInit {
  public message$: Observable<string>;
  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    this.globalService.setMessage('Initializing...');
    this.message$ = this.globalService.getMessage$().pipe();
  }
}
