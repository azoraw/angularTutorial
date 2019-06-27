import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { HttpResponseModel, ItemModel } from 'src/app/utils/models';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: ItemModel[];
  total: number;
  newItem: Subject<any> = new Subject();

  config = [
    { key: 'title', type: 'text' },
    { key: 'price', type: 'input' },
    { key: 'imgSrc', type: 'image', header: 'obrazek' },
    { key: 'id', type: 'button', header: 'remove' },
    { key: 'id', type: 'button', header: 'more' }

  ]

  filters$: BehaviorSubject<any> = new BehaviorSubject({
    itemsPerPage: 5,
    currentPage: 1
  })

  constructor(
    private itemService: ItemsService,
    private router: Router
    ) {
  
    this.filters$.subscribe((value) => {
      this.fetchItems();
    })

    this.newItem.subscribe((value) => {
      this.itemService.add(value).subscribe((resp) => {
        this.fetchItems();
      })
    })
  }

  ngOnInit() {
  }

  onAction({type, id}) {
    this[type](id)
  }

  remove(id) {
    this.itemService.remove(id)
    .subscribe((resp) => {
      this.fetchItems();
    })
  }

  private fetchItems() {
    this.itemService.fetch(this.filters$.value)
      .subscribe((resp: HttpResponseModel) => {
        this.items = resp.data;
        this.total = resp.total
      });
  }

  more(id) {
    this.router.navigate(['/items', id]);
  }

  updateFilters(key, value) {
    this.filters$.next({
      ...this.filters$.value, 
      [key]: value
    })
  }
}
