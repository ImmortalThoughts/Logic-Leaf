import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialUIModule } from './material-ui/material-ui.module';
import { MenuComponent } from './components/menu/menu.component';
import { SubmitCVComponent } from './components/submit-cv/submit-cv.component';
import { JobsearchComponent } from './components/jobsearch/jobsearch.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/jobsearch/card/card.component';
import { StaffingserviceComponent } from './components/staffingservice/staffingservice.component';
import { DigitalmarketingComponent } from './components/digitalmarketing/digitalmarketing.component';
import { GraphicsdesigningComponent } from './components/graphicsdesigning/graphicsdesigning.component';
import { AsafreelancerComponent } from './components/asafreelancer/asafreelancer.component';
import { ForthepermanentroleComponent } from './components/forthepermanentrole/forthepermanentrole.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    SubmitCVComponent,
    JobsearchComponent,
    ContactusComponent,
    FooterComponent,
    CardComponent,
    StaffingserviceComponent,
    DigitalmarketingComponent,
    GraphicsdesigningComponent,
    AsafreelancerComponent,
    ForthepermanentroleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
