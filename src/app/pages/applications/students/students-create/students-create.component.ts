import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students-create',
  templateUrl: './students-create.component.html',
  styleUrls: ['./students-create.component.scss']
})
export class StudentsCreateComponent implements OnInit {

  studentForm: FormGroup;
  displayValidation = true;


  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(25)]],
      year: ['', Validators.required],
      month: ['', Validators.required],
      date: ['', Validators.required],
      origin: ['', Validators.required],
      location: ['', Validators.required],
      agent: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Form Submitted:', this.studentForm.value);
    }
  }

  closeForm() {
    this.studentForm.reset();
  }

}
