import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  iserror:boolean=false;

  gen: any[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
  ];

  dep: any[] = [
    {value: 'IT', viewValue: 'IT'},
    {value: 'HR', viewValue: 'HR'},
    {value: 'Networking', viewValue: 'Networking'},
    {value: 'Admin', viewValue: 'Admin'},
  ];

  savePerson(form:NgForm){
    console.log(form.control)
}

  onButtonClick()
  {
    alert("Your Details Inserted Successfully")
  }
}
