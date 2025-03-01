import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentsComponent } from '../comments/comments.component';
@Component({
  selector: 'app-case-nav-bar',
  templateUrl: './case-nav-bar.component.html',
  styleUrls: ['./case-nav-bar.component.scss']
})
export class CaseNavBarComponent implements OnInit {

  userId: string | null = '';

  links = [
    { value: 'info', label: 'Case',},
    { value: 'patient-info', label: 'Student Info',},
    { value: 'general-docs', label: 'General Docs',},
    { value: 'financial-docs', label: 'Financial Docs',},
    { value: 'creditability-interview', label: 'Creditability Interview',},
    { value: 'enrollment', label: 'Enrolment',},
    { value: 'verifier', label: 'UKVI / Compliance',},
    { value: 'verifier', label: 'Registry',},
    { value: 'view-all', label: 'View All',},
    { value: 'comments', label: 'Comment',},
  ]

  constructor(private router: Router, private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      console.log(this.userId);
    });
  }

  OnNavigate(link: any, event: MouseEvent): void {
  event.preventDefault();
  if (link.value === 'comments') {
    this.openCommentsModal();
  } else {
    const baseUrl = this.userId ? '/case/edit/' : '/case/add/';
    this.router.navigateByUrl(baseUrl + link.value);
  }
}

  openCommentsModal(): void {
    this.modalService.open(CommentsComponent, {
      size: 'lg',
      centered: true,
      backdrop: 'static',
      windowClass: 'custom-modal'
    });
  }
}
