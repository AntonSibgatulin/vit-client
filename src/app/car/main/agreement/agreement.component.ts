import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DefService} from "../../../services/def.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrl: './agreement.component.css'
})
export class AgreementComponent implements OnInit {
  //@ts-ignore
  form: FormGroup;
  providers: Observable<any>
  buyers: Observable<any>

  ptsId: any

  numberEngine: any
  model: any

  constructor(private formBuilder: FormBuilder,
              private defService: DefService,
              private router: Router,
              private route: ActivatedRoute) {
    this.providers = defService.getAllProviders();
    this.buyers = defService.getAllBuyers();
    this.ptsId = route.snapshot.queryParams['ptsId']
    this.numberEngine = route.snapshot.queryParams['numberEngine']
    this.model = route.snapshot.queryParams['model']
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      date: ['', Validators.required],
      number: ['', Validators.required],
      providerName: ['', Validators.required],
      buyerName: ['', Validators.required],
      numberPayment: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // You can access the form values using this.form.value
      console.log(this.form.value);
      this.defService.createAgr(this.form.value).subscribe(value => {
        console.log(value)
        this.router.navigate(['/car/act'], {
          queryParams: {
            ptsId: this.ptsId,
            agrId: value,
            model: this.model,
            numberEngine: this.numberEngine
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
