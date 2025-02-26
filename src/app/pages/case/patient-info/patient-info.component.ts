import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {

  agentForm!: FormGroup;
  displayValidation = true; // Add this property

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.agentForm = this.fb.group({
      givenName: ['', Validators.required],
      surname: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      countryOfBirth: [''],
      nationality: [''],
      passportStartDate: [''],
      passportExpiryDate: [''],
      passportStatus: ['current'],
      englishTest: [''],
      englishExemptionReason: [{ value: '', disabled: true }],
      englishQualification: [{ value: '', disabled: true }],
      lastCourseCompleted: [{ value: '', disabled: true }],
      courseCompletionYear: [{ value: '', disabled: true }, [Validators.min(1900), Validators.max(2099)]],
      travellingWithDependants: [''],
      numberOfDependants: [{ value: null, disabled: true }],
      additionalVisaUpload: [null],
      courseLevelComparison: ['', Validators.required]
    });

    // Enable/Disable previous qualification fields based on English test result
    this.agentForm.get('englishTest')?.valueChanges.subscribe((value) => {
      if (value === 'No') {
        this.agentForm.get('englishExemptionReason')?.enable();
        this.agentForm.get('englishQualification')?.enable();
        this.agentForm.get('lastCourseCompleted')?.enable();
        this.agentForm.get('courseCompletionYear')?.enable();
      } else {
        this.agentForm.get('englishExemptionReason')?.disable();
        this.agentForm.get('englishQualification')?.disable();
        this.agentForm.get('lastCourseCompleted')?.disable();
        this.agentForm.get('courseCompletionYear')?.disable();
      }
    });

    // Enable/Disable 'number of dependants' field based on travelling with dependants
    this.agentForm.get('travellingWithDependants')?.valueChanges.subscribe((value) => {
      if (value === 'Yes') {
        this.agentForm.get('numberOfDependants')?.enable();
      } else {
        this.agentForm.get('numberOfDependants')?.disable();
      }
    });
  }

  onSubmit() {
    if (this.agentForm.valid) {
      console.log('Form Submitted:', this.agentForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  closeForm() {}
}
