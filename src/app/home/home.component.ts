import { Component, OnInit } from '@angular/core';
import { faCoffee, faLayerGroup, faSplotch, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faCoffee = faCoffee;
  faLayerGroup = faLayerGroup;
  faSplotch = faSplotch;
  faBars = faBars;
  constructor() { }

  ngOnInit(): void {
  }

}
