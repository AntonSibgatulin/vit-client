import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {DefService} from "../../../services/def.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-act',

  templateUrl: './act.component.html',
  styleUrl: './act.component.css'
})
export class ActComponent implements OnInit {
  //@ts-ignore
  form: FormGroup;
  // @ts-ignore
  confid: Observable<any>
  // @ts-ignore
  location: Observable<any>
  ptsId: any
  agrId: any
  numberEngine: any
  model: any

  constructor(private formBuilder: FormBuilder,
              private defService: DefService,
              private router: Router,
              private route: ActivatedRoute) {
    this.confid = this.defService.getAllConfidant()
    this.location = this.defService.getAllTransmission()

    this.ptsId = Number(route.snapshot.queryParams['ptsId'])
    this.agrId = Number(route.snapshot.queryParams['agrId'])
    this.numberEngine = route.snapshot.queryParams['numberEngine']
    this.model = route.snapshot.queryParams['model']


    console.log(this.ptsId)
    console.log(this.agrId)

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      number: ['', Validators.required],
      transmissionPoint: ['', Validators.required],
      dateTransmission: ['', Validators.required],
      confidant: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // You can access the form values using this.form.value
      let obj = this.form.value;
      obj.agreement = this.agrId;
      console.log(obj);
      this.defService.createAct(obj).subscribe(value => {
        console.log(value)
        this.router.navigate(['/car/car'], {
          queryParams: {
            model: this.model,
            numberEngine: this.numberEngine,
            ptsId: this.ptsId,
            actId: value
          }
        })
      })
      // Perform your form submission logic here
    }
  }

  navigateMain() {
    this.router.navigate(['/'])
  }
}
