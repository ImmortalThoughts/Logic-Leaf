import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { SubmitCVComponent } from './components/submit-cv/submit-cv.component';
import { JobsearchComponent } from './components/jobsearch/jobsearch.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { StaffingserviceComponent } from './components/staffingservice/staffingservice.component';
import { DigitalmarketingComponent } from './components/digitalmarketing/digitalmarketing.component';
import { GraphicsdesigningComponent } from './components/graphicsdesigning/graphicsdesigning.component';
import { AsafreelancerComponent } from './components/asafreelancer/asafreelancer.component';
import { ForthepermanentroleComponent } from './components/forthepermanentrole/forthepermanentrole.component';

const routes: Routes = [
  {path:'',component:MenuComponent},
  {path:'submitCV',component:SubmitCVComponent},
  {path:'jobsearch',component:JobsearchComponent},
  {path:'staffingservice',component:StaffingserviceComponent},
  {path:'digitalmarketing',component:DigitalmarketingComponent},
  {path:'graphicsdesigning',component:GraphicsdesigningComponent},
  {path:'asafreelancer',component:AsafreelancerComponent},
  {path:'forthepermanentrole',component:ForthepermanentroleComponent},
  {path:'contactus',component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
