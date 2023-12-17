import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {EditSecComponent} from "./arm/arm-sec/edit-sec/edit-sec.component";
import {ViewSecComponent} from "./arm/arm-sec/view-sec/view-sec.component";
import {ArmSecComponent} from "./arm/arm-sec/main/arm-sec.component";
import {IndexComponent} from "./app/index/index.component";
import {CreateSecComponent} from "./arm/arm-sec/create-sec/create-sec.component";
import {ArmBuhComponent} from "./arm/arm-buh/main/arm-buh.component";
import {CreateBuhComponent} from "./arm/arm-buh/create-buh/create-buh.component";
import {EditBuhComponent} from "./arm/arm-buh/edit-buh/edit-buh.component";
import {CrtConfComponent} from "./arm/crt-conf/main/crt-conf.component";
import {CreateComponent} from "./arm/crt-conf/create/create.component";
import {ViewComponent} from "./arm/crt-conf/view/view.component";
import {PtsComponent} from "./car/main/pts/pts.component";
import {MainCarComponent} from "./car/main/main-car/main-car.component";
import {AgreementComponent} from "./car/main/agreement/agreement.component";
import {ActComponent} from "./car/main/act/act.component";
import {CarComponent} from "./car/main/car/car.component";
import {PaymentComponent} from "./car/main/payment/payment.component";

export const routes: Routes = [
  {
    path: "", component: IndexComponent
  },
  {
    path: "arm-sec", component: ArmSecComponent,
    children: [
      {
        path: "view", component: ViewSecComponent
      },
      {
        path: "edit/:id", component: EditSecComponent
      },
      {
        path: "create", component: CreateSecComponent
      },
      {
        path: "", component: CreateSecComponent
      }
    ]
  },
  {
    path: "arm-buh", component: ArmBuhComponent,
    children: [
      {
        path: "view", component: ViewSecComponent
      },
      {
        path: "edit/:id", component: EditBuhComponent
      },
      {
        path: "create", component: CreateBuhComponent
      },
      {
        path: "", component: CreateBuhComponent
      }
    ]
  },

  {
    path: "arm-cnf", component: CrtConfComponent,
    children: [
      {
        path: "view", component: ViewSecComponent
      },
      {
        path: "edit/:id", component: ViewComponent
      },
      {
        path: "create", component: CreateComponent
      },
      {
        path: "", component: CreateComponent
      }
    ]
  },
  {
    path: "car", component: MainCarComponent,
    children: [
      {
        path: "agr", component: AgreementComponent
      },
      {
        path: "act", component: ActComponent
      },
      {
        path: "car", component: CarComponent
      },

      {
        path: "create", component: PtsComponent
      },
      {
        path: "pay", component: PaymentComponent
      },
      {
        path: "", component: PtsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {

}
