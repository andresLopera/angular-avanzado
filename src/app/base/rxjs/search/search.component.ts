import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  take
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  @ViewChild('source') public source: ElementRef;
  public keys$: Observable<any>;
  public debounce$: Observable<any>;
  public distinct$: Observable<any>;
  public launches$: Observable<any[]>;
  public clickLaunches$: Observable<any[]>;

  private url = 'https://launchlibrary.net/1.4/launch/';
  private params = '?limit=2000&mode=list';

  constructor(private http: HttpClient) {}

  public ngOnInit() {
    const el = this.source.nativeElement;
    this.getNewSearchTerms(el);
    this.searchTerm();
    // this.getTermAndSearch(el);
  }

  public search(searchTerm: string) {
    this.clickLaunches$ = this.callGet(searchTerm);
  }

  private getNewSearchTerms(el: any) {
    this.keys$ = fromEvent(el, 'keyup').pipe(map(() => el.value));
    this.debounce$ = this.keys$.pipe(debounceTime(400));
    this.distinct$ = this.debounce$.pipe(distinctUntilChanged());
  }

  private searchTerm() {
    this.launches$ = this.distinct$.pipe(switchMap(this.callGet));
  }

  private getTermAndSearch(el: any) {
    this.launches$ = fromEvent(el, 'keyup').pipe(
      map(() => el.value),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(this.callGet)
    );
  }

  private callGet = (searchTerm: string) =>
    this.http.get<any>(`${this.url}${searchTerm}${this.params}`).pipe(
      take(1),
      map(result => result.launches),
      catchError(() => of([]))
    );
}
