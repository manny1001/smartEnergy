import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectComponent implements OnInit {
  selectionMade: boolean = false;
  selectionType: string = ' ';
  constructor() {}

  ngOnInit() {}
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
