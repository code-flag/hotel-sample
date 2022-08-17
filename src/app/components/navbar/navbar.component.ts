import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee, faLayerGroup, faSplotch, faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faCoffee = faCoffee;
  faLayerGroup = faLayerGroup;
  faSplotch = faSplotch;
  faBars = faBars;
  sideNavWidth: boolean = false;

  @Input() currentLinkNumber: any = 0;

  constructor(private router: Router) { }

  public openNav() {
    this.sideNavWidth = true;
  }

  public closeNav() {
    this.sideNavWidth = false;
  }

  ngOnInit(): void {
  }

  navigate(name: any): void{
    this.router.navigate(["/"+ name])
  }
}
