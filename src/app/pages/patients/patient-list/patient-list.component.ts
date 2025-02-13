import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
  animations: [
    trigger('collapseAnimation', [
      state('collapsed', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        margin: '0',
      })),
      state('expanded', style({
        height: '*',
        opacity: '1',
        margin: '*',
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-out')
      ]),
    ])
  ]
})
export class PatientListComponent implements OnInit {

  page ={
    perPage:25,
    page:1,
    total:100
  }
  perPageOptions = [10, 25, 50, 100];

  isCollapsed = true;
  filterForm!: FormGroup;


  columns = [
    { name: 'Patient ID', prop: 'id' },
    { name: 'Patient Name', prop: 'name' },
    { name: 'Patient Email Address', prop: 'email' },
    { name: 'Preferred Contact Details', prop: 'contact' },
    { name: 'Status', prop: 'status' },
    { name: 'Created By', prop: 'createdBy' },
    { name: 'Created Date', prop: 'createdDate' },
    { name: 'Updated By', prop: 'updatedBy' },
    { name: 'Updated Date', prop: 'updatedDate' }
  ];

  rows = [
    { id: 17, name: 'Damon Pickett ajmal', email: 'winafywem@mailinator.com', contact: '+1 (485) 392-4323', status: 'Awaiting compliance approval to move to next stage', createdBy: 'Admin', createdDate: '2024-09-19', updatedBy: 'Admin', updatedDate: '2024-09-19' },
    { id: 16, name: 'Bert Williamson', email: 'gupogo@mailinator.com', contact: '+1 (949) 431-2758', status: 'Awaiting further documentation', createdBy: 'Admin', createdDate: '2024-09-12', updatedBy: 'Admin', updatedDate: '2024-09-17' },
    { id: 15, name: 'Gage Huber', email: 'lafajmal@mailinator.com', contact: '+1 (422) 549-2033', status: 'Other : please state updated', createdBy: 'Admin', createdDate: '2024-09-09', updatedBy: 'Admin', updatedDate: '2024-09-10' },
    { id: 14, name: 'Eric Stewart', email: 'sonuxoduh@mailinator.com', contact: '+1 (974) 772-7681', status: 'Pre cas stage', createdBy: 'Admin', createdDate: '2024-09-09', updatedBy: 'Admin', updatedDate: '2024-09-09' },
    { id: 13, name: 'Colton Tran', email: 'dyki@mailinator.com', contact: '+1 (731) 861-4059', status: 'Pre cas stage', createdBy: 'Admin', createdDate: '2024-09-08', updatedBy: 'Admin', updatedDate: '2024-09-08' },
    { id: 12, name: 'Cameran Bennett', email: 'zidalikih@mailinator.com', contact: '+1 (705) 973-4868', status: 'Awaiting compliance approval to move to next stage', createdBy: 'Admin', createdDate: '2024-09-08', updatedBy: 'Admin', updatedDate: '2024-09-08' },
    { id: 11, name: 'Irma Workman', email: 'tamykov@mailinator.com', contact: '+1 (709) 445-6244', status: 'Awaiting compliance approval to move to next stage', createdBy: 'Admin', createdDate: '2024-09-05', updatedBy: 'Admin', updatedDate: '2024-09-05' },
    { id: 10, name: 'Sopoline Baker update', email: 'timurygy@mailinator.com', contact: '+1 (792) 353-5344', status: 'Pre cas stage', createdBy: 'Admin', createdDate: '2024-08-27', updatedBy: 'Admin', updatedDate: '2024-08-12' },
    { id: 9, name: 'Amal', email: 'cyzolivih@mailinator.com', contact: '+1 (121) 416-6864', status: '', createdBy: 'ajmal', createdDate: '2024-08-12', updatedBy: 'Admin', updatedDate: '2024-08-12' },
    { id: 8, name: 'Merritt update', email: 'lakobebyupdate@mailinator.com', contact: '+1 (729) 274-3054', status: '', createdBy: 'Admin', createdDate: '2024-08-09', updatedBy: 'Admin', updatedDate: '2024-08-12' },
  ];
  constructor(private fb: FormBuilder,
    private router: Router
  ) {
    this.buildForm()
  }

  ngOnInit(): void {

  }

  buildForm(){
    this.filterForm = this.fb.group({
      ssn: [''],
      patient_name: [''],
      date_of_birth: [''],
      created_at: [''],
      updated_at: [''],
      created_by: [''],
      updated_by: [''],
      patient_id: [''],
      email: [''],
      cell_phone_no: [''],
      address: [''],
      ssn3: ['', [Validators.minLength(3), Validators.maxLength(3)]],
      ssn2: ['', [Validators.minLength(2), Validators.maxLength(2)]],
      ssn4: ['', [Validators.minLength(4), Validators.maxLength(4)]],
    });
  }

  setPage(pageInfo: any) {
    this.page.page = pageInfo.offset + 1;
  }

  updatePerPage(event: any) {
    this.page.perPage = event.target.value;
  }

  getTotalPages(): number {
    return Math.ceil(this.page.total / this.page.perPage);
  }

  onSelectFilters(): void {
    // this.pActivePage = 1;
    // this.pOffset = 0;
    // this.pTotal = 0;
    // this.patientRows = [];
    // this.showPatientForm = true;
    // this.filterButtonClicked = true;
    // this.listingApiCalled = true;
    // this.getAllPatients(null);
  }

  resetForm(){}

  onResetFilters(){}

  onPatientNameClick(patientId:any){
    this.router.navigateByUrl(`/patients/view/${patientId}`);
  }
}
