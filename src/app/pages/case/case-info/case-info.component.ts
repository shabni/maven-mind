import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.scss'],
})
export class CaseInfoComponent implements OnInit {
  caseForm!: FormGroup;
  displayValidation = true;
  userId: string | null = '';

  courses = [
    { id: 1, name: 'Computer Science' },
    { id: 2, name: 'Business Management' },
    { id: 3, name: 'Mechanical Engineering' },
  ];

  selectedCourses: number[] = [];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.caseForm = this.fb.group({
      course_ids: ['', Validators.required],
      session: ['', Validators.required],
      agent_ids: ['', Validators.required],
    });
  }

  onFileChange(event: any, field: string) {
    if (event.target.files.length > 0) {
      this.caseForm.patchValue({ [field]: event.target.files[0] });
    }
  }

  onSubmit() {
    let url = '/case/';
    url += this.userId ? 'edit' : 'add';

    if (this.caseForm.valid) {
      this.router.navigateByUrl(url + '/patient-info');
    } else {
      console.log('Form is invalid');
    }
  }

  closeForm() {}
}
