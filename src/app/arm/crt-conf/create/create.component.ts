import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ArmSecService} from "../../../services/arm.sec.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  // @ts-ignore
  form: FormGroup

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private armSecService: ArmSecService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      surname: ['', Validators.required],
      name: ['', Validators.required],
      patronymic: [''],
      numberConfidant: ['', Validators.required],
      confidant: ['', Validators.required],
      seriaPassport: ['', Validators.required],
      numberPassport: ['', Validators.required],
      dataOutput: ['', Validators.required],
      whoOutput: ['', Validators.required]
    });
  }


  navigateMain() {

  }

  onSubmit() {
    // if (this.form.valid) {
    // You can access the form values using this.form.value
    console.log(this.form.value);
    this.armSecService.createConf(this.form.value).subscribe(value => {
      console.log(value)
    })
    // Perform your form submission logic here
    // }
  }

}
