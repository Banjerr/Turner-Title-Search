import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']
})
export class TitleListComponent implements OnInit {
  @Input() returnedTitles: any;
  @Output() openModal: EventEmitter<any> = new EventEmitter<any>();
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

  public openTitleModal = (data) => {
    this.openModal.emit(data);
  }

  public closeTitleModal = () => this.closeModal.emit();

  constructor() { }

  ngOnInit() {}

}
