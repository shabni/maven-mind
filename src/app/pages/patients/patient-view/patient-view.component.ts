import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent {

  columns = [
    { name: 'Patient Id', prop: 'patientId' },
    { name: 'Patient Name', prop: 'patientName' },
    { name: 'Course Applied For', prop: 'courseApplied' },
    { name: 'Intake', prop: 'intake' },
    { name: 'Dependants', prop: 'dependants' },
    { name: 'Traveling Alone', prop: 'travelingAlone' },
    { name: 'Recruitment Agent', prop: 'recruitmentAgent' },
    { name: 'Method Of Contact', prop: 'methodOfContact' },
    { name: 'Verifier', prop: 'verifier' },
    { name: 'Created By', prop: 'createdBy' },
    { name: 'Updated By', prop: 'updatedBy' },
  ];
  rows = [
    {
      patientId: 17,
      patientName: 'Damon Pickett ajmal',
      courseApplied: 'Mphil',
      intake: 'June',
      dependants: '👁️',
      travelingAlone: 'Yes',
      recruitmentAgent: 'Kathleen Cantrell test update',
      methodOfContact: 'indirect',
      verifier: '',
      createdBy: 'Admin 2024-09-19',
      updatedBy: 'Admin 2024-09-19',
    },
  ];


  patientInformation = {
    first_name: 'John',
    middle_name: 'A',
    last_name: 'Doe',
    date_of_birth: new Date(1978, 5, 20), // June 20, 1978
    address: '123 Main St, Apt 4B, Springfield, IL 62704',
    suite_no: 'Apt 4B',
    ssn: '123-45-6789',
    home_phone_no: '5551234567',
    city: 'Springfield',
    state: 'IL',
    zip: '62704',
    cell_phone_no: '5559876543',
    work_phone_no: '5557654321',
    phone_extension: '101',
    email: 'john.doe@example.com',
    emergency_contact: '5551112222'
  };

  // Other basic details
  age: number = 45;
  patientGender: string = 'Male';

  page ={
    perPage:25,
    page:1,
    total:100
  }

  // Dummy case information (used in the "Case Info" section)

  caseLimit: number = 10;
  caseOffset: number = 0;
  caseaActivePage: number = 1;

  // Dummy Employer Info
  employerData = [
    { id: 1, employerName: 'Acme Corp', address: '456 Corporate Blvd' },
    { id: 2, employerName: 'Globex Inc', address: '789 Business Rd' }
  ];
  employerTotal: number = this.employerData.length;
  employerOffset: number = 0;

  // Dummy Adjuster Info
  adjusterData = [
    { id: 1, name: 'Adjuster One', email: 'adjuster.one@example.com' },
    { id: 2, name: 'Adjuster Two', email: 'adjuster.two@example.com' }
  ];
  adjusterTotal: number = this.adjusterData.length;
  adjusterOffset: number = 0;

  // Dummy Insurance Info
  insuranceData = [
    { id: 1, company: 'Insurance Co A', policyNo: 'POL12345' },
    { id: 2, company: 'Insurance Co B', policyNo: 'POL67890' }
  ];
  insuranceTotal: number = this.insuranceData.length;
  insuranceOffset: number = 0;

  // Dummy Accident Info (note: HTML uses "acident" which may be a typo)
  acidientData = [
    { id: 1, accidentDate: new Date(2022, 6, 10), description: 'Minor accident' }
  ];
  acccidentTotal: number = this.acidientData.length;
  accidientOffset: number = 0;

  // Dummy Associated Cases for "Associated Case Info" section
  associatedCases = [
    { id: 1, caseName: 'Associated Case 1' },
    { id: 2, caseName: 'Associated Case 2' }
  ];

  // Dummy Provider Info for "Provider Info" section
  providerData = [
    {
      id: 1,
      office_name: 'Provider One',
      address: '123 Provider St',
      city: 'Metropolis',
      state: 'NY',
      zip: '10001',
      email: 'provider.one@example.com',
      work_phone_no: '5552223333'
    },
    {
      id: 2,
      office_name: 'Provider Two',
      address: '456 Healthcare Ave',
      city: 'Gotham',
      state: 'NJ',
      zip: '07001',
      email: 'provider.two@example.com',
      work_phone_no: '5554445555'
    }
  ];

  // This variable controls which patient info section is displayed.
  // It can be set to values such as 'employer', 'adjuster', 'insurance', 'acident', 'associative', or 'provider'
  patientInfoType: string = 'associative';

  // Dummy variables for the "Add New Case" modal
  dropdownPreviousCaseSettings = {
    singleSelection: true,
    idField: 'id',
    textField: 'name',
    allowSearchFilter: true
  };
  searchedCaseId = [
    { id: 1, name: 'Case 1' },
    { id: 2, name: 'Case 2' },
    { id: 3, name: 'Case 3' }
  ];
  selectedCases: any[] = [];
  selectedCaseId: any = 'new'; // if 'new', a new case is created; if null, a previous case is selected
  isPreviousCaseSelected: boolean = false;
  isButtonDisabled: boolean = false;

  // For demonstration in the modal (if needed)
  inputfile: string = '';

  constructor(private router: Router){}

  // A simple helper function to extract just the street address from a full address string.
  extractStreetAddress(address: any): string {
    if (!address) {
      return 'N/A';
    }
    // Return the part before the first comma
    return address.split(',')[0];
  }

  // Dummy method to open the "Add New Case" modal
  addNewCases(): void {
    console.log('Opening modal to add a new case...');
    // Add your modal open logic here.
  }

  // Dummy method to handle closing the modal
  closedModal(): void {
    console.log('Modal closed.');
  }

  // Dummy cancel method for the modal
  cancel(): void {
    console.log('Modal canceled.');
  }

  // Dummy confirm method for the modal
  confirm(): void {
    console.log('New case confirmed.');
  }

  // Methods to handle selection of new or previous cases in the modal
  onNewCaseSelected(): void {
    console.log('Selected to create a new case.');
    this.isPreviousCaseSelected = false;
  }

  onPreviousCaseSelected(): void {
    console.log('Selected a previous case.');
    this.isPreviousCaseSelected = true;
  }

  onItemSelect(event: any): void {
    console.log('A previous case was selected:', event);
    // Update selectedCases as needed
    this.selectedCases.push(event);
  }

  // Dummy pagination change methods for each list
  casePageChange(event: any): void {
    console.log('Case page changed:', event);
  }

  employerPageChanged(event: any): void {
    console.log('Employer page changed:', event);
  }

  adjusterPageChanged(event: any): void {
    console.log('Adjuster page changed:', event);
  }

  insurancePageChanged(event: any): void {
    console.log('Insurance page changed:', event);
  }

  accidientPageChange(event: any): void {
    console.log('Accident page changed:', event);
  }

  // A method to switch which information is displayed based on a given type.
  getInfo(infoType: string): void {
    this.patientInfoType = infoType;
    console.log('Displaying info for:', infoType);
  }

  addNewCase(){
    let url = '/case/add/info'
    this.router.navigateByUrl(url);
  }

  onEditCaseClick(id : string){
    let url = `/case/edit/${id}/info`
    this.router.navigateByUrl(url);
  }


  setPage(pageInfo: any) {
    this.page.page = pageInfo.offset + 1;
  }
}
