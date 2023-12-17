import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DefService} from "../../../services/def.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pts',
  templateUrl: './pts.component.html',
  styleUrl: './pts.component.css'
})
export class PtsComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  brands: any
  models: any

  constructor(private formBuilder: FormBuilder,
              private defService: DefService,
              private router: Router) {

    this.brands = defService.getAllCarBrands()

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      number: ['', Validators.required],
      manufacturer: [''],
      color: [''],
      year: ['', Validators.required],
      enginePower: ['', Validators.required],
      vin: [''],
      axisNumber: [''],
      registrationDate: [''],
      registrationAuthority: [''],
      engineNumber: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // You can access the form values using this.form.value
      let obj = this.form.value
      obj.brand = {brand: obj.brand}
      obj.model = {model: obj.model, carBrand: obj.brand}
      console.log(obj);
      this.defService.createPts(obj).subscribe(value => {
        console.log(value)
        this.router.navigate(['/car/agr'], {
          queryParams: {
            ptsId: value,
            model: obj.brand.brand + " " + obj.model.model,
            numberEngine: this.form.value.engineNumber
          }
        })
      })
      // Perform your form submission logic here
    }
  }

  navigateMain() {
    // Perform navigation logic here
  }

  getModels(brand: any) {
    this.models = this.defService.getModelsByCarBrand(brand)

  }
}
