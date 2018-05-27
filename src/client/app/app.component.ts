import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
class AppComponent {
  title = 'Turner Title Search';
  returnedTitles: any;
  modalRef: BsModalRef; 

  constructor(private modalService: BsModalService, private http: HttpClient) {} 

  public openModal(data: object) {
    let initialState = data;
    console.log(initialState);
    this.modalRef = this.modalService.show(ModalContentComponent, {initialState});
  }

  public closeModal = () => this.modalRef.hide();

  public requestTitles = (title) => {
    this.http.get('/title/' + title).subscribe(data => {
      this.returnedTitles = data;
    });
  }

  ngOnInit() {
    this.http.get('/title/').subscribe(data => {
      this.returnedTitles = data;
    });
  }
}

@Component({
  selector: 'modal-content',
  templateUrl: '/modal/modal-component.html'
})

class ModalContentComponent implements OnInit {
  title: string;
  Storylines: any[] = [];
  Participants: any[] = [];
  Awards: any[] = [];
  particpiantsIsCollapsed = true;
  awardsIsCollapsed = true;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {}
}

export { AppComponent, ModalContentComponent }