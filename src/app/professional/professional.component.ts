import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'who-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  panel1OpenState = false;
  panel2OpenState = false;
  panel3OpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
