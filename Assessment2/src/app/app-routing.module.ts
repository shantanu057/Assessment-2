import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'app-employee',component:PersonComponent},
  {path:'app-employee-details',component:StudentComponent},
  {path:'',component:PersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
