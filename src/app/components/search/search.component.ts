import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounce, debounceTime, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {


  @Input() controls: any[];
  @Input() filters: BehaviorSubject<any>;
  @ViewChild('f', { static: true }) form: NgForm;
  subscr$: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscr$ = this.form.valueChanges
      .pipe(debounceTime(1000),
        filter((value) => {
          if (JSON.stringify(value).includes('@')) {
            alert('b ł ą d')
            return false
          }
          return true;
        }),
        map((resp) => {
        return { ...resp/*, lastModification: Date.now()*/ }
        }))
      .subscribe((value) => {
        this.filters.next({
          ...this.filters.value,
          ...value
        })
      })
  }
  
  ngOnDestroy(): void {
    this.subscr$.unsubscribe();
  }

}
