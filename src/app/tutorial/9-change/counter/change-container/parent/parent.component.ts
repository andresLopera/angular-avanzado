import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent implements OnInit, OnDestroy {
  public changingMethod = 0;
  public counter = 0;
  public item = { name: '', value: 0 };
  private interval;
  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => this.change(), 3000);
  }

  public onClick() {
    this.change();
  }

  private change() {
    switch (this.changingMethod) {
      case 0:
        this.changeRef();
        break;
      case 1:
        this.changeValue();
        break;
      case 2:
        this.changeClone();
        break;
      default:
        break;
    }
  }

  private changeRef() {
    this.counter++;
    this.setItem(this.counter);
    console.log('parent.changeRef', this.item);
  }

  private changeValue() {
    const counter = this.item.value + 1;
    this.setItem(counter);
    console.log('parent.changeValue', this.item);
  }

  private changeClone() {
    const counter = this.item.value + 1;
    this.setItem(counter);
    this.item = { ...this.item };
    console.log('parent.changeClone', this.item);
  }

  private setItem(counter) {
    this.item.name = '#'.repeat(counter);
    this.item.value = counter;
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
