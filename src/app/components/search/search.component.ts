import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  submitted = false;
  searchData: any = FormGroup;

  ngOnInit(): void {
    this.searchData = new FormGroup({
      country: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      pin: new FormControl(null, Validators.required),
      hospital: new FormControl(null, Validators.required),
      blood: new FormControl(null, Validators.required)
    })

    // valueChanges for FormControl
    this.searchData.get('country').valueChanges.subscribe((value: any) => {
      console.log('value is:', value);
    });

    // valueChanges for FromGroup
    this.searchData.valueChanges.subscribe((value: any) => {
      console.log('FormGroup valueChanges:', value)
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.searchData.invalid) {
      return
    }
    alert("scces")
    console.log(this.searchData)
  }
}
