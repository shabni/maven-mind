import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applications-create',
  templateUrl: './applications-create.component.html',
  styleUrls: ['./applications-create.component.scss']
})
export class ApplicationsCreateComponent implements OnInit {

  applicationForm!: FormGroup;
  displayValidation = true;

  courses: string[] = [
    'Computer Science',
    'Business Administration',
    'Mechanical Engineering',
    'Electrical Engineering',
    'Medicine',
    'Law',
    'Psychology',
    'Architecture',
    'Finance',
    'Marketing'
  ];

  constructor(private fb: FormBuilder) {
    this.applicationForm = this.fb.group({
      agentName: ['', Validators.required],
      studentName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      courseChoice: ['', Validators.required],
      intakeYear: ['', [Validators.required, Validators.min(2000), Validators.max(new Date().getFullYear() + 10)]],
      nationality: ['', Validators.required],
      countryOfBirth: ['', Validators.required],
      passportNumber: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.applicationForm.valid) {
      console.log('Form Submitted:', this.applicationForm.value);
    }
  }

  closeForm() {
    this.applicationForm.reset();
  }


}
