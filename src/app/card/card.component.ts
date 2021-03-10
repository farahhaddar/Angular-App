import { Component, OnInit } from '@angular/core';
import { faCarAlt,faSpa,faCoffee,faConciergeBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  faCarAlt=faCarAlt;
  faSpa=faSpa;
  faCoffee=faCoffee;
  faConciergeBell=faConciergeBell;

}
