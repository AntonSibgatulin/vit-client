import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ArmSecService} from "../../../services/arm.sec.service";
import {DefService} from "../../../services/def.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-sec',
  templateUrl: './create-sec.component.html',
  styleUrl: './create-sec.component.css'
})
export class CreateSecComponent implements OnInit {
  // @ts-ignore
  form: FormGroup
  // @ts-ignore
  typeOfOwner: any
  bank: any;
  location: any


  constructor(private armSecService: ArmSecService,
              private defService: DefService,
              private router: Router) {


  }

  ngOnInit(): void {
    this.form = new FormGroup({
      bank: new FormControl(),
      inn: new FormControl(),
      name: new FormControl(),

      typeOfOwner: new FormControl(),
      kpp: new FormControl(),
      kscore: new FormControl(),
      rscore: new FormControl(),
      location: new FormControl()

    });

    this.typeOfOwner = this.defService.getTypesOfOwnerShip()
    this.bank = this.defService.getAllBanks();
    this.location = this.defService.getAllLocation()

  }

  onSubmit() {

    const buyerDto = {
      bank: this.form.value.bank,
      inn: this.form.value.inn,
      name: this.form.value.name,
      typeOfOwner: this.form.value.typeOfOwner,
      kpp: this.form.value.kpp,
      kscore: this.form.value.kscore,
      rscore: this.form.value.rscore,
      location: this.form.value.location
    };
    console.log(buyerDto)
    this.armSecService.createProvider(buyerDto).subscribe(value => {
      console.log(value)
    }, error => {
      console.log(error.error)
    })

  }

  navigateMain() {
    this.router.navigate(['/'])
  }
}
