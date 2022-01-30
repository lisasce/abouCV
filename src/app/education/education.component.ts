import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'who-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  panel1OpenState = false;
  panel2OpenState = false;
  panel3OpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
