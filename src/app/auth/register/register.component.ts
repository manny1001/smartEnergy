import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  selectionMade: boolean = true;
  selectionType: string = 'IPP';
  constructor() {}

  ngOnInit() {}

  registerAs(type: string) {
    console.log({type});
    this.selectionMade = true;

    if (type === 'IPP') {
      this.selectionType = 'IPP';
    }
    if (type === 'Sponsor') {
      this.selectionType = 'Sponsor';
    }
  }
}
