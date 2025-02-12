import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-nav-bar',
  templateUrl: './case-nav-bar.component.html',
  styleUrls: ['./case-nav-bar.component.scss']
})
export class CaseNavBarComponent implements OnInit {

  links = [
    { value: 'info', label: 'Case',},
    { value: 'patient-info', label: 'Patient Info',},
    { value: 'dependants', label: 'Dependants',},
    { value: 'previous-info', label: 'Previous Info',},
    { value: 'referrer', label: 'Referrer',},
    { value: 'docs', label: 'Docs',},
    { value: 'verifier', label: 'Verifier',},
    { value: 'view-all', label: 'View All',},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  OnNavigate(link: any): void {
    // Ensure link.value exists, then navigate
    if (link && link.value !== undefined) {
      let url = '/case/' + link.value
      this.router.navigateByUrl(url);
    }
  }
}
