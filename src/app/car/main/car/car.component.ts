import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DefService} from "../../../services/def.service";

@Component({
  selector: 'app-car',

  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;

  numberEngine: any
  model: any
  ptsId: any
  actId: any


  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private defService: DefService,
              private router:Router) {


    this.ptsId = Number(route.snapshot.queryParams['ptsId'])
    this.actId = Number(route.snapshot.queryParams['actId'])
    this.numberEngine = route.snapshot.queryParams['numberEngine']
    this.model = route.snapshot.queryParams['model']

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      price: ['', Validators.required],

    });
  }

  onSubmit() {
    if (this.form.valid) {
      // You can access the form values using this.form.value

      let obj = this.form.value;

      obj.numberEngine = this.numberEngine;
      obj.ptsId = this.ptsId;
      obj.actNumber = this.actId;
      obj.models = this.model
      console.log(obj);
      this.defService.createCar(obj).subscribe(value => {
        console.log(value)
      })

      // Perform your form submission logic here
    }
  }

  navigateMain() {
    this.router.navigate(['/'])
  }
}
