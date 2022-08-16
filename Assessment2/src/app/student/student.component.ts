import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  student:any[]=[
    {studentid:1,firstname:"Ed",middlename:" H",lastname:" Sheeran", gender:"Male",class:"X", rollNo:23, maths:20, english:97, hindi:27, science:27, drawing:67},
    {studentid:2,firstname:"Peter",middlename:" K",lastname:" Jackson", gender:"Male",class:"X", rollNo:43, maths:40, english:37, hindi:77, science:97, drawing:97},
    {studentid:3,firstname:"Harry",middlename:" J",lastname:" Potter", gender:"Male",class:"XI", rollNo:32, maths:90, english:87, hindi:97, science:97, drawing:99},
    {studentid:4,firstname:"Taylor",middlename:" W",lastname:" Swift", gender:"Female",class:"XII", rollNo:65, maths:10, english:77, hindi:57, science:27, drawing:87},
    {studentid:5,firstname:"Salena",middlename:" Z",lastname:" Gomez", gender:"Female",class:"IX", rollNo:43, maths:20, english:27, hindi:27, science:27, drawing:67},
    {studentid:6,firstname:"Katy",middlename:" J",lastname:" Perry", gender:"Female",class:"V", rollNo:65, maths:40, english:67, hindi:77, science:87, drawing:99},
    {studentid:7,firstname:"Bruno",middlename:" A",lastname:" Mars", gender:"Male",class:"XII", rollNo:13, maths:60, english:77, hindi:27, science:27, drawing:67},
    {studentid:8,firstname:"David",middlename:" J",lastname:" Guetta", gender:"Male",class:"X", rollNo:63, maths:90, english:87, hindi:97, science:87, drawing:97},
    {studentid:9,firstname:"Tom",middlename:"And",lastname:"Jerry", gender:"Male",class:"VI", rollNo:23, maths:20, english:27, hindi:27, science:27, drawing:67},
    {studentid:10,firstname:"Rihana",middlename:" L",lastname:" Parker", gender:"Female",class:"X", rollNo:23, maths:20, english:27, hindi:27, science:27, drawing:67},
]  

}
