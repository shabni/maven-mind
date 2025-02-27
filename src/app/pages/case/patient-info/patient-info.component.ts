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
      englishTest: ['', Validators.required],
      englishExemptionReason: [{ value: '', disabled: true }],
      englishQualification: [{ value: '', disabled: true }],
      lastCourseCompleted: [{ value: '', disabled: true }],
      courseCompletionYear: [{ value: '', disabled: true }, [Validators.min(1900), Validators.max(2099)]],
      travellingWithDependants: ['', Validators.required],
      numberOfDependants: [{ value: null, disabled: true }],
      additionalVisaUpload: [null],
      courseLevelComparison: ['', Validators.required],
      dependantFinancialApproval: ['', Validators.required],
      complianceFlag: [{ value: '', disabled: true }],
      travelOutsideHomeCountry: ['', Validators.required],
      travelFrequency: [{ value: '', disabled: true }],
      ukTravelHistory: ['', Validators.required],
      ukTravelFrequency: [{ value: '', disabled: true }],
      previousUkStudy: [''],
      ukStudentVisa: [{ value: '', disabled: true }],
      ukStudentVisaUpload: [{ value: null, disabled: true }],
      ukVisaRefusal: ['']
    });

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

    // Handle Dependants Logic
    this.agentForm.get('travellingWithDependants')?.valueChanges.subscribe((value) => {
      if (value === 'Yes') {
        this.agentForm.get('numberOfDependants')?.enable();
      } else {
        this.agentForm.get('numberOfDependants')?.disable();
      }
    });

    // Handle Financial Approval Logic
    this.agentForm.get('dependantFinancialApproval')?.valueChanges.subscribe((value) => {
      if (value === 'No') {
        this.agentForm.get('complianceFlag')?.enable();
      } else {
        this.agentForm.get('complianceFlag')?.disable();
      }
    });

    // Handle Travel Outside Home Country Logic
    this.agentForm.get('travelOutsideHomeCountry')?.valueChanges.subscribe((value) => {
      if (value === 'Yes') {
        this.agentForm.get('travelFrequency')?.enable();
      } else {
        this.agentForm.get('travelFrequency')?.disable();
      }
    });

    // Handle UK Travel History Logic
    this.agentForm.get('ukTravelHistory')?.valueChanges.subscribe((value) => {
      if (value === 'Yes') {
        this.agentForm.get('ukTravelFrequency')?.enable();
      } else {
        this.agentForm.get('ukTravelFrequency')?.disable();
      }
    });

    // Handle Previous UK Study Logic
    this.agentForm.get('previousUkStudy')?.valueChanges.subscribe((value) => {
      if (value === 'Yes') {
        this.agentForm.get('ukStudentVisa')?.enable();
      } else {
        this.agentForm.get('ukStudentVisa')?.disable();
      }
    });

    // Handle UK Student Visa Upload Logic
    this.agentForm.get('ukStudentVisa')?.valueChanges.subscribe((value) => {
      if (value === 'Yes') {
        this.agentForm.get('ukStudentVisaUpload')?.enable();
      } else {
        this.agentForm.get('ukStudentVisaUpload')?.disable();
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
