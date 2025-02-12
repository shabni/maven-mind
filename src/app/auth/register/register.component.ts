import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', [Validators.required]]
    });
  }

  get f() {
    return this.registerForm.controls as { [key: string]: any };
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      // Call API to submit form data
    }
  }
  ngOnInit(): void {
  }

}
