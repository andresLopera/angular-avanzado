import { Component, OnInit } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Component({
  selector: 'app-pwa-container',
  templateUrl: './pwa-container.component.html',
  styles: []
})
export class PwaContainerComponent implements OnInit {
  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
      const appData = event.available.appData;
      const versionMessage = appData
        ? appData['versionMessage']
        : 'New version is available!';
      const msg = `${versionMessage} Do you want to update?`;
      if (confirm(msg)) {
        window.location.reload();
      }
    });
  }
}
