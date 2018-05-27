import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() titleArray: any[];
  @Output() onValueChanged: EventEmitter<any> = new EventEmitter<any>();
  searchFor;
  movieTitle: string;

  refine_title_search = () => {
    let newVal = this.movieTitle;
    this.onValueChanged.emit(newVal);
  }

  constructor() {
    this.searchFor = '';
  }

  ngOnInit() {
  }

}
