import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agent-form',
  templateUrl: './agent-form.component.html',
  styleUrls: ['./agent-form.component.scss']
})
export class AgentFormComponent implements OnInit {

  agentForm!: FormGroup;

  displayValidation = true

  ukInstitutions = [
    { id: 1, name: 'University of London' },
    { id: 2, name: 'Oxford University' },
    { id: 3, name: 'Imperial College London' },
    // Add more UK institutions here
  ];

  // List of institutions outside the UK
  outsideUkInstitutions = [
    { id: 1, name: 'Harvard University' },
    { id: 2, name: 'Stanford University' },
    { id: 3, name: 'University of Sydney' },
    // Add more outside UK institutions here
  ];

  // Selected values for UK institutions
  selectedUkInstitutions: number[] = [];

  // Selected values for institutions outside the UK
  selectedOutsideUkInstitutions: number[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.agentForm = this.fb.group({
      agentName: ['', Validators.required],
      registrationDate: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      vatRegistrationNumber: ['', Validators.required],
      ukAddress: ['', Validators.required],
      nonUkAddress: [''],
      email: ['', [Validators.required, Validators.email]],
      complianceCheck: ['', Validators.required],
      restrictedCountries: ['', Validators.required],
      dbsCheckFile: [null, Validators.required],
      agentListFile: [null, Validators.required],
      institutionsUK: [[]],
      institutionsOutsideUK: [[]]
    });
  }

  onFileChange(event: any, field: string) {
    if (event.target.files.length > 0) {
      this.agentForm.patchValue({ [field]: event.target.files[0] });
    }
  }

  onSubmit() {
    if (this.agentForm.valid) {
      console.log('Form Submitted:', this.agentForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  closeForm(){}

}
