import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'add-college-form',
  templateUrl: './add-college-form.component.html',
  styleUrls: ['./add-college-form.component.scss'],
})
export class AddCollegeFormComponent {
  userForm!: any;
  loading: boolean = false;
  selectedMarket: any = 'Select Market Name';
  selectedSuppLang: any = 'Select Supported Language';
  selectedDefLang: any = 'Select Default Language';
  countries: any;
  currency: any;
  cities: City[] | undefined;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    this.createForm();
  }
  createForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      est: ['', [Validators.required]],
      aff: ['', [Validators.required]],
      ownership: ['', [Validators.required]],
      feestr: ['', [Validators.required]],
      website: ['', [Validators.required]],
      add: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pin: ['', [Validators.required]],
      district: ['', [Validators.required]],
      email: ['', [Validators.required]],
      number: ['', [Validators.required]],
      altNumber: ['', [Validators.required]],
      appFee: ['', [Validators.required]],
      img: ['', [Validators.required]],
      documentId: ['', [Validators.required]],
      feeRangeMin: ['', [Validators.required]],
      feeRangeMax: ['', [Validators.required]],
      nirfRanking: ['', [Validators.required]],
      stateRanking: ['', [Validators.required]],
      brochureUrl: ['', [Validators.required]],
      admissionCriteria: ['', [Validators.required]],
      admissionProcess: ['', [Validators.required]],
      placementDetails: ['', [Validators.required]],
      heighestPackage: ['', [Validators.required]],
      libraryFacility: ['', [Validators.required]],
      hostelFacility: ['', [Validators.required]],
      transportFacility: ['', [Validators.required]],
      sportsFacility: ['', [Validators.required]],
      otherFacilities: ['', [Validators.required]],
      certifications: ['', [Validators.required]],
      importatantDates: ['', [Validators.required]],
      reviews: ['', [Validators.required]],
      achivements: ['', [Validators.required]],
      events: ['', [Validators.required]],
      courses: ['', [Validators.required]],
      departments: ['', [Validators.required]],
      labs: ['', [Validators.required]],
    });
  }
  onSubmit() {}
  goBack() {}
}
