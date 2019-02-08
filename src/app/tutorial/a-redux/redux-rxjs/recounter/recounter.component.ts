import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Add, Substract } from '../store/counter.actions';
import { CounterService } from '../store/counter.service';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-recounter',
  templateUrl: './recounter.component.html',
  styleUrls: ['./recounter.component.css']
})
export class RecounterComponent implements OnInit {
  public value$: Observable<CounterState>;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.value$ = this.counterService.select$();
  }

  onAddClick() {
    this.counterService.dispatch(new Add(1));
  }
  onSubstractClick() {
    this.counterService.dispatch(new Substract(1));
  }
}
