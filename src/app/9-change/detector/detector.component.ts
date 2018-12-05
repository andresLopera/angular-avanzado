import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-detector',
  templateUrl: './detector.component.html',
  styleUrls: ['./detector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectorComponent implements OnInit, OnDestroy {
  public counter = 0;
  public item = { name: '', value: 0 };
  private interval;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.interval = setInterval(() => this.change(), 5000);
  }

  public onClick() {
    this.change();
  }

  private change() {
    this.counter++;
    this.item.name = 'ex: ' + this.counter.toExponential();
    this.item.value = this.counter;
    this.ref.detectChanges();
    console.log('change', this.item);
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
