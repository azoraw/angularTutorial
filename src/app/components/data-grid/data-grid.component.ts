import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  @Input() data;
  @Input() config 
  @Output() actionEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onClick(type, id) {
    console.log(type + ' button wcisniety o id: ' + id )
    this.actionEvent.emit({type, id});
  }

}
