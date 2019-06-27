import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/services/workers.service';
import { HttpResponseModel, WorkerModel } from 'src/app/utils/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  workers: WorkerModel[];
  config = [
    { key: 'name', type: 'text' },
    { key: 'phone', type: 'input' },
    { key: 'id', type: 'button', header: 'remove' }
  ]

  filters$: BehaviorSubject<any> = new BehaviorSubject({
    name: 5,
    phone: 1
  })
  constructor(private workersService: WorkersService) {
    this.fetchWorkers();
    this.filters$.subscribe((resp) => {
      console.log(resp)
    })

  }

  ngOnInit() {
  }

  private fetchWorkers() {
    this.workersService.fetch().subscribe((resp: HttpResponseModel) => {
      console.log(resp);
      this.workers = resp.data;
    });
  }

  onAction(event){
    this.workersService.remove(event.id)
    .subscribe((resp) => {
      console.log(resp)
       this.fetchWorkers();
    } )
  }
}
