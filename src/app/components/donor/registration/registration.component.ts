import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  donorData: any = FormGroup;

  ngOnInit() {
    this.donorData = new FormGroup({
      personalDetails: new FormGroup({ // formGrouping 
        name: new FormControl(null, Validators.required),
        mobile: new FormControl(null,Validators.required),
        gender: new FormControl(null,Validators.required),
        dob: new FormControl(null,Validators.required),
        bloodGroup: new FormControl(null,Validators.required),
      }),
      residentialDetails: new FormGroup({
        address: new FormControl(null,Validators.required),
        city: new FormControl(null,Validators.required),
        postalCode: new FormControl(null,Validators.required),
        state: new FormControl(null,Validators.required),
        conutry: new FormControl(null,Validators.required),
      }),
      hospitalDetails: new FormGroup({
        hosName: new FormControl(null,Validators.required),
        hosAddress: new FormControl(null,Validators.required),
        hosCity: new FormControl(null,Validators.required),
        hosPostalCode: new FormControl(null,Validators.required),
        hosState: new FormControl(null,Validators.required),
        hosCountry: new FormControl(null,Validators.required),
      }),
      accountDetails: new FormGroup({
        accountStatus: new FormControl(null,Validators.required),
        password: new FormControl(null,Validators.required),
      }),
    });

  }



  onSubmit() {
    this.submitted =true;
    if(this.donorData.invalid){
      return
    }
    alert("scces")
    console.log(this.donorData);
    console.log(this.donorData.value);
  }

}
