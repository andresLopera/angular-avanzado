import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  @ViewChild('source') source: ElementRef;
  keys$: Observable<any>;
  debounce$: Observable<any>;
  distinct$: Observable<any>;
  launches$: Observable<any[]>;
  numberOfLaunches$: Observable<number>;

  private url = 'https://launchlibrary.net/1.4/launch/';
  private params = '?limit=200&mode=list';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const el = this.source.nativeElement;
    this.keys$ = fromEvent(el, 'keyup').pipe(map(() => el.value));
    this.debounce$ = this.keys$.pipe(debounceTime(400));
    this.distinct$ = this.debounce$.pipe(distinctUntilChanged());
    this.launches$ = this.distinct$.pipe(
      switchMap(term =>
        this.http
          .get<any>(`${this.url}${term}${this.params}`)
          .pipe(map(result => result.launches))
      )
    );
    this.numberOfLaunches$ = this.launches$.pipe(map(v => v.length));
  }
  // To Do: get after 404
  // share
  // take(1)
}
