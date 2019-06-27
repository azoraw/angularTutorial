import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  data$: Observable<any>;

  constructor(private route: ActivatedRoute,
    private itemService: ItemsService) {
    route.params.subscribe(({ id }) => {
      this.data$ = itemService
        .get(id)
        .pipe(map((resp) => resp.data))

    })
  }

  ngOnInit() {
  }

}
