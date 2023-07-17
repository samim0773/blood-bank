import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  donorData: any = FormGroup;

  ngOnInit() {
    this.donorData = new FormGroup({
      name: new FormControl(null),
      genter: new FormControl(),
      mobile: new FormControl(null),
      dob: new FormControl(null),
      image: new FormControl(null),
      bloodGroup: new FormControl(null),
      accountStatus: new FormControl(null),
      address: new FormControl(null),
      city: new FormControl(null),
      postalCode: new FormControl(null),
      state: new FormControl(null),
      conutry: new FormControl(null),
      hosName: new FormControl(null),
      hosAddress: new FormControl(null),
      hosCity: new FormControl(null),
      hosPostalCode: new FormControl(null),
      hosState: new FormControl(null),
      hosCountry: new FormControl(null),
      password: new FormControl(null),
    });

  }

  onSubmit(){
    console.log(this.donorData);
  }

}
