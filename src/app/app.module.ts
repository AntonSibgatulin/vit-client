import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AsyncPipe, CommonModule, DatePipe} from "@angular/common";
import {AppRoutes} from "./app.routes";
import {EditSecComponent} from "./arm/arm-sec/edit-sec/edit-sec.component";
import {ViewSecComponent} from "./arm/arm-sec/view-sec/view-sec.component";
import {ArmSecComponent} from "./arm/arm-sec/main/arm-sec.component";
import {CreateSecComponent} from "./arm/arm-sec/create-sec/create-sec.component";
import {ArmBuhComponent} from "./arm/arm-buh/main/arm-buh.component";
import {CreateBuhComponent} from "./arm/arm-buh/create-buh/create-buh.component";
import {EditBuhComponent} from "./arm/arm-buh/edit-buh/edit-buh.component";
import {CrtConfComponent} from "./arm/crt-conf/main/crt-conf.component";
import {CreateComponent} from "./arm/crt-conf/create/create.component";
import {ViewComponent} from "./arm/crt-conf/view/view.component";
import {MainCarComponent} from "./car/main/main-car/main-car.component";
import {PtsComponent} from "./car/main/pts/pts.component";
import {AgreementComponent} from "./car/main/agreement/agreement.component";
import {ActComponent} from "./car/main/act/act.component";
import {CarComponent} from "./car/main/car/car.component";
import {PaymentComponent} from "./car/main/payment/payment.component";

@NgModule({
  declarations: [
    AppComponent,
    EditSecComponent,
    ViewSecComponent,
    ArmSecComponent,
    CreateSecComponent,
    ArmBuhComponent,
    CreateBuhComponent,
    EditBuhComponent,
    CrtConfComponent,
    CreateComponent,
    ViewComponent,
    MainCarComponent,
    PtsComponent,
    AgreementComponent,
    ActComponent,
    CarComponent,
    PaymentComponent

  ],
  imports: [

    BrowserModule,
    CommonModule,
    AppRoutes,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
