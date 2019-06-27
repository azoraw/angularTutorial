import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Input() newItem: Subject<any>
  modal: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  
  open(content) {
    this.modal = this.modalService.open(content);
  }

  sendForm(value) {
    this.newItem.next(value)
    this.modal.close()
  }
}
