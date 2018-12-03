import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell-footer',
  templateUrl: './shell-footer.component.html',
  styles: []
})
export class ShellFooterComponent implements OnInit {
  @Input() public message: string;
  constructor() {}

  ngOnInit() {}
}
