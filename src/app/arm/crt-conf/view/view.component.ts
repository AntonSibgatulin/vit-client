import {Component} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ArmSecService} from "../../../services/arm.sec.service";
import {async, Observable} from "rxjs";

@Component({
  selector: 'app-view',

  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  // @ts-ignore
  object: Observable<any>

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private armSecService: ArmSecService) {
    this.route.params.subscribe(value => {
      this.object = armSecService.getConf(value['id'])
    })
  }

  navigateMain() {
this.router.navigate(['/'])
  }

  protected readonly async = async;
}
