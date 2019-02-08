import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import {
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  scan,
  switchMap,
  take,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styles: []
})
export class MapsComponent implements OnInit {
  // https://medium.com/@shairez/a-super-ninja-trick-to-learn-rxjss-switchmap-mergemap-concatmap-and-exhaustmap-forever-88e178a75f1b
  private frameworks = ['Backbone', 'React', 'Angular'];
  public frameworks$: Observable<any>;
  public unflat$: Observable<any>;
  public mergeMap$: Observable<any>;
  public switchMap$: Observable<any>;
  public concatMap$: Observable<any>;
  public exhaustMap$: Observable<any>;

  constructor() {}

  ngOnInit() {
    const twitter$ = this.getFrameworks$(this.frameworks);
    this.frameworks$ = twitter$.pipe(
      tap(framework => console.log(`*** ${framework} tweet! ***`)),
      scan(this.accumulate)
    );

    this.unflat$ = twitter$.pipe(
      map(framework => this.getRecruitsObservable(framework)),
      tap(developer => console.log('unflat:' + developer))
    );

    this.mergeMap$ = twitter$.pipe(
      mergeMap(framework => this.getRecruitsObservable(framework)),
      tap(developer => console.log('mergeMap:' + developer)),
      scan(this.accumulate)
    );

    this.switchMap$ = twitter$.pipe(
      switchMap(framework => this.getRecruitsObservable(framework)),
      tap(developer => console.log('switchMap:' + developer)),
      scan(this.accumulate)
    );

    this.concatMap$ = twitter$.pipe(
      concatMap(framework => this.getRecruitsObservable(framework)),
      tap(developer => console.log('concatMap:' + developer)),
      scan(this.accumulate)
    );

    this.exhaustMap$ = twitter$.pipe(
      exhaustMap(framework => this.getRecruitsObservable(framework)),
      tap(developer => console.log('exhaustMap:' + developer)),
      scan(this.accumulate)
    );
  }

  private getFrameworks$(frameworkNames: string[]): Observable<string> {
    return interval(4000).pipe(
      map(index => frameworkNames[index]),
      take(frameworkNames.length)
    );
  }

  private getRecruitsObservable(framework: string) {
    return interval(1500).pipe(
      map(val => this.getMessage(framework, val)),
      take(4)
    );
  }

  private getMessage = (framework: string, val: number) =>
    `${framework} dev ${val + 1}`;

  private accumulate = (accumalated, current) =>
    accumalated.concat(current + ' ');
}
