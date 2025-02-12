import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  constructor(private router: Router) {}

  isActiveRoute(route: string): boolean {
    return this.router.url.includes(route);
  }

  toggleMenu() {
    console.log("Toggle menu clicked");
  }

}
