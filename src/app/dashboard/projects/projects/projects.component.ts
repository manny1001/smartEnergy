import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../_modal';
@Component({
  selector: 'app-create-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectComponent implements OnInit {
  selectionMade: boolean = false;
  selectionType: string = ' ';
  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.modalService.open('createproject')
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  registerAs(type: string) {
    console.log({ type });
    this.selectionMade = true;

    if (type === 'IPP') {
      this.selectionType = 'IPP';
    }
    if (type === 'Sponsor') {
      this.selectionType = 'Sponsor';
    }
  }
}
