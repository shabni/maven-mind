import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {
  studentForm!: FormGroup;
  displayValidation = true
  statuses = [
    { id: 1, name: 'Active' },
    { id: 2, name: 'Inactive' }
  ];

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nationality: ['', Validators.required],
      phone_no: ['', Validators.required],
      date_of_birth: [''],
      gender: ['', Validators.required],
      passport: [''],
      status_id: ['1', Validators.required],
      address: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      county: [''],
      post_code: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Form Submitted', this.studentForm.value);
    }
  }

  closeForm(){

  }

  ngOnInit(): void {
  }

}
