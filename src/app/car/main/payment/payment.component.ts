import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Route, Router} from "@angular/router";
import {DefService} from "../../../services/def.service";

@Component({
  selector: 'app-payment',

  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private defService: DefService) {


  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      number: ['', Validators.required],
      date: ['', Validators.required],
      sum: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // You can access the form values using this.form.value
      console.log(this.form.value);
      this.defService.createPayment(this.form.value).subscribe(value => {
        console.log(value)
      })
      // Perform your form submission logic here
    }
  }

  navigateMain() {
    // Perform navigation logic here
  }
}
