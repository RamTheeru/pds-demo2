import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,FormArray,Validators} from '@angular/forms';

import {PdsApiService} from '../pds-api.service';
import {SweetService} from '../sweet.service';
import {UserType} from '../models/usertype';
import {Employee} from '../models/employee';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[SweetService]
})
export class RegisterComponent implements OnInit {
 emp : Employee = new Employee();
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
  constructor(private _fb:FormBuilder,private api:PdsApiService,private _swServ:SweetService) {
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
     this.emp.FirstName = this.empForm.value['firstName'];
     this.emp.LastName = this.empForm.value['lastName'];
     this.emp.MiddleName = this.empForm.value['middleName'];
     this.emp.Phone = this.empForm.value['phone'];
     this.emp.Day = this.empForm.value['day'];
     this.emp.Month = this.empForm.value['month'];
     this.emp.Year = this.empForm.value['year'];
     this.emp.Age = this.empForm.value['age'];
     this.emp.BloodGroup = this.empForm.value['bg'];
     this.emp.Gender = this.empForm.value['gender'];
     if(selectedmaritals.length>0)
     {
      this.emp.Marital = selectedmaritals[0];
      if(this.emp.Marital == "Married"){
        this.emp.MaritalStatus = true;
      }
      else{this.emp.MaritalStatus= false;}
     }
     else{this.emp.MaritalStatus= false;}

     if(selectempTypes.length>0)
     {
      this.emp.Employeetype = selectempTypes[0];
        if(this.emp.Employeetype == "Permanent"){
        this.emp.IsPermanent = true;
      }
      else{this.emp.IsPermanent= false;}
     }
     else
     {this.emp.MaritalStatus= false;}

      this.emp.Address1 = this.empForm.value['ad1'];
       this.emp.Adress2 = this.empForm.value['ad2'];
        this.emp.Place = this.empForm.value['place'];
         this.emp.State = this.empForm.value['state'];
          this.emp.PostalCode = this.empForm.value['postal'];
           this.emp.AAdharNumber = this.empForm.value['aad'];
            this.emp.PAN = this.empForm.value['pan'];
             this.emp.Guard_FirstName = this.empForm.value['gfirstName'];
     this.emp.Guard_LastName = this.empForm.value['glastName'];
     this.emp.Guard_MiddleName = this.empForm.value['gmiddleName'];
      this.emp.Guard_Phone = this.empForm.value['gphone'];
           this.emp.Day2 = this.empForm.value['day2'];
     this.emp.Month2 = this.empForm.value['month2'];
     this.emp.Year2 = this.empForm.value['year2'];
      this.emp.LoginType = this.empForm.value['ut'];
       this.emp.Designation = this.empForm.value['desg'];
        this.emp.StationCode = this.empForm.value['station'];
         this.emp.LocationName = this.empForm.value['location'];

         console.log('on submit.....');
         
         console.log(this.emp);



  }

  
}