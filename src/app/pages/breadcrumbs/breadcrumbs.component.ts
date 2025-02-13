import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs: { label: string; url: string }[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.generateBreadcrumbs();
      });

    this.generateBreadcrumbs();
  }

  generateBreadcrumbs(): void {
    this.breadcrumbs = [];
    let url = '';
    let currentRoute = this.route.root;

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
      if (currentRoute.snapshot.url.length) {
        const pathSegment = currentRoute.snapshot.url.map(segment => segment.path).join('/');
        url += `/${pathSegment}`;
        this.breadcrumbs.push({ label: pathSegment, url: url });
      }
    }

  }

  formatBreadcrumb(label: string): string {
    return label
      .split('/')
      .map(word => this.toTitleCase(word))
      .join(' <span style="padding: 0 8px;">/</span> ');
  }

  toTitleCase(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
}
