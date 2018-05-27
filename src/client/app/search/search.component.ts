import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() currentSearchString: string;
  @Output() onValueChanged: EventEmitter<any> = new EventEmitter<any>();
  public searchFor;

  refine_title_search = (event: any) => {
    let newVal = event.target.value;
    
    setTimeout(() => {
      if (newVal === this.currentSearchString) return;
      console.log(newVal);
      this.onValueChanged.emit(newVal);
    }, 1000)    
  }

  constructor() {
    this.searchFor = '';
  }

  ngOnInit() {
  }

}
