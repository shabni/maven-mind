import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
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
export class StudentsListComponent implements OnInit {

  page ={
    perPage:25,
    page:1,
    total:100
  }
  perPageOptions = [10, 25, 50, 100];

  isCollapsed = true;
  filterForm!: FormGroup;

  columns = [
    { prop: 'id', name: 'ID' },
    { prop: 'name', name: 'Name' },
    { prop: 'year', name: 'Year' },
    { prop: 'month', name: 'Month' },
    { prop: 'date', name: 'Date' },
    { prop: 'origin', name: 'Origin' },
    { prop: 'location', name: 'Location' },
    { prop: 'agent', name: 'Agent' }
  ];

  rows = [
    { id: 1, name: 'John Doe', year: 2024, month: 'January', date: '2024-01-15', origin: 'USA', location: 'New York', agent: 'Agent A' },
    { id: 2, name: 'Alice Smith', year: 2023, month: 'March', date: '2023-03-10', origin: 'Canada', location: 'Toronto', agent: 'Agent B' },
    { id: 3, name: 'Michael Brown', year: 2024, month: 'February', date: '2024-02-05', origin: 'UK', location: 'London', agent: 'Agent C' },
    { id: 4, name: 'Sophia Wilson', year: 2023, month: 'July', date: '2023-07-21', origin: 'Australia', location: 'Sydney', agent: 'Agent A' },
  ];

  constructor(private router: Router,private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(){
    this.filterForm = this.fb.group({
      ssn: [''],
      agent_name: [''],
      date_of_birth: [''],
      created_at: [''],
      updated_at: [''],
      created_by: [''],
      updated_by: [''],
      agent_id: [''],
      email: [''],
      cell_phone_no: [''],
      address: [''],
      ssn3: ['', [Validators.minLength(3), Validators.maxLength(3)]],
      ssn2: ['', [Validators.minLength(2), Validators.maxLength(2)]],
      ssn4: ['', [Validators.minLength(4), Validators.maxLength(4)]],
    });
  }

  editAgent(row: any): void {
    console.log('Edit Agent:', row);
    this.router.navigateByUrl(`/applications/students/edit/${row.id}`);
    // Implement edit logic (e.g., open a modal, navigate to edit page)
  }

  deleteAgent(row: any): void {
    if (confirm('Are you sure you want to delete this agent?')) {
      console.log('Delete Agent:', row);
      // Implement delete logic (e.g., call API to remove the agent)
    }
  }

  onSelectFilters(){

  }

  addNewStudent(){
    this.router.navigateByUrl(`/applications/students/add`);
  }

  onResetFilters(){

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

}
