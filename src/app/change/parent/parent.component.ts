import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent implements OnInit, OnDestroy {
  public counter = 0;
  public item = { name: '', value: 0 };
  private interval;

  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => this.change(), 5000);
  }

  public onClick() {
    this.change();
  }

  private change() {
    // this.changeRef();
    // this.changeValue();
    this.changeClone();
  }

  private changeRef() {
    this.counter++;
    this.item.name = 'ex: ' + this.counter.toExponential();
    this.item.value = this.counter;
    console.log('changeRef', this.item);
  }

  private changeValue() {
    const counter = this.item.value + 1;
    this.item.name = 'ex: ' + counter.toExponential();
    this.item.value = counter;
    console.log('changeValue', this.item);
  }

  private changeClone() {
    const counter = this.item.value + 1;
    this.item.name = 'ex: ' + counter.toExponential();
    this.item.value = counter;
    this.item = { ...this.item };
    console.log('changeClone', this.item);
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
