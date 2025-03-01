import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {

  enrolmentForm!: FormGroup;
  displayValidation = true; // Add this property

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrolmentForm = this.fb.group({
      enrolmentOfficer: ['', Validators.required],
      studentName: ['', Validators.required],
      course: ['', Validators.required],
      intake: ['', Validators.required],
      hasArrived: ['No', Validators.required],
      visaType: ['', Validators.required],
      addressUK: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      dateOfArrival: ['', Validators.required],
      evidenceOfEntry: [null, Validators.required],
      passportSeen: ['No', Validators.required],
      outstandingFees: ['No', Validators.required],
      amountOutstanding: [0, [Validators.required, Validators.min(0)]],
      amountPaid: [0, [Validators.required, Validators.min(0)]],
      paymentPlan: ['No', Validators.required],
      vignetteSeenStamped: ['No', Validators.required],
      shareCode: [null],
      travelledBeforeVignette: ['No', Validators.required],
      complianceReferral: ['No'],
      brpCorrectUpload:[null],
      brpReceived: [null],
      isBrpCorrect: ['No', Validators.required],
      evisaUpload: [null],
      immigrationStatusDocs: [null]
    });
  }

  onSubmit() {
    if (this.enrolmentForm.valid) {
      console.log('Form Submitted:', this.enrolmentForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  closeForm() {}
}
