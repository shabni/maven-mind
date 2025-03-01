import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reenrollment',
  templateUrl: './reenrollment.component.html',
  styleUrls: ['./reenrollment.component.scss']
})
export class ReenrollmentComponent implements OnInit {
  enrolmentStatusForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.enrolmentStatusForm = this.fb.group({
      enrolmentOfficer: ['', Validators.required],
      studentName: ['', Validators.required],
      course: ['', Validators.required],
      intake: ['', Validators.required],
      hasEnrolledNextYear: ['No', Validators.required],
      visaType: [''],
      isSameVisa: ['No', Validators.required],
      isSameCourse: ['No', Validators.required],
      courseChangeApproved: ['No'],
      courseChangeApprovalUpload: [null],
      addressUK: [''],
      mobileNumber: [''],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.enrolmentStatusForm.valid) {
      console.log('Form Data:', this.enrolmentStatusForm.value);
      // Add API call or processing logic here
    } else {
      console.log('Form is invalid');
    }
  }

  closeForm(): void {
    this.enrolmentStatusForm.reset();
  }
}
