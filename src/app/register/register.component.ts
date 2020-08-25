import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,FormArray,Validators} from '@angular/forms';

import {PdsApiService} from '../pds-api.service';
import {UserType} from '../models/usertype';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
dates =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
userTypes : UserType[];
empForm : FormGroup;
  maritals = [
    { id: 0, name: 'Married' },
    { id: 1, name: 'Un Married' }

  ];
    empTypes = [
    { id: 0, name: 'Permanent' },
    { id: 1, name: 'Contract' }

  ];
  constructor(private _fb:FormBuilder,private api:PdsApiService) {
     this.initForm();
    this.addCheckboxes();
    this.addCheckboxes_t();
   }

   ngOnInit() {
     
  //  this.api.getUserTypes().subscribe(
  //    (data)=>{
  //         this.userTypes = data.usersTypes;
  //    }
  //  )
  //  console.log('UserTypes :'+this.empTypes );
    //this.addCheckboxes();
  }

initForm(){
  this.empForm = this._fb.group({
    firstName: new FormControl(),
    lastName: new FormControl(),
    middleName: new FormControl(),
     day: new FormControl(),
      month: new FormControl(''),
       year: new FormControl(),
        age: new FormControl(),
        bg: new FormControl(),
         gender: new FormControl(''),
      mars:new FormArray([]),
       ad1: new FormControl(),
        ad2: new FormControl(),
         place: new FormControl(),
          state: new FormControl(),
           postal: new FormControl(),
            aad: new FormControl(),
        pan: new FormControl(),
        typs : new FormArray([]),
            gfirstName: new FormControl(),
    glastName: new FormControl(),
    gmiddleName: new FormControl(),
    gphone : new FormControl(),
         day2: new FormControl(),
      month2: new FormControl(''),
       year2: new FormControl(),
        ut: new FormControl(''),
         desg: new FormControl(''),
          station: new FormControl(),
           location: new FormControl()
        
    });
}
 get maritalsFormArray() {
    return this.empForm.controls.mars as FormArray;
  }
 private addCheckboxes() {
    this.maritals.forEach(() => this.maritalsFormArray.push(new FormControl(false)));
  }
   private addCheckboxes_t() {
    this.empTypes.forEach(() => this.typsFormArray.push(new FormControl(false)));
  }
   get typsFormArray() {
    return this.empForm.controls.typs as FormArray;
  }
  onSubmit(){
    const selectedmaritals = this.empForm.value.mars
      .map((checked, i) => checked ? this.maritals[i].name : null)
      .filter(v => v !== null);
      console.log('checkboxes')
    console.log(selectedmaritals);

      const selectempTypes = this.empForm.value.typs
      .map((checked, i) => checked ? this.empTypes[i].name : null)
      .filter(v => v !== null);
      console.log('checkboxes')
    console.log(selectempTypes);
  }

  
}