import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public FooterHeads: any = [
    "Follow Us",
    "company",
    "work with us",
    "Discover",
    "For business",
  ];
  footerDetail: any = {
    "Follow Us": ["Facebook", "Instagram", "LinkedIn", "Twitter"],
    "company": ["About", "Courses", "Terms and Condition", "Policy"],
    "work with us": ["Become an instructor", "Blog as guest", "Join us as Developer"],
    "Discover": ["Skillup", "Resources", "Dreams"],
    "For business": ["Corporate training", "Partner with us", "Empowerment program"]
}

  constructor() { }

  ngOnInit(): void {
  }

}
