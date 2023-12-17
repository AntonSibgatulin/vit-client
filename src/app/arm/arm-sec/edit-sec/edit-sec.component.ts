import {Component, ElementRef, OnInit} from '@angular/core';
import {ArmSecService} from "../../../services/arm.sec.service";
import {DefService} from "../../../services/def.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-sec',

  templateUrl: './edit-sec.component.html',
  styleUrl: './edit-sec.component.css'
})
export class EditSecComponent implements OnInit {

  // @ts-ignore
  typeOfOwner: any
  bank: any;
  location: any
  // @ts-ignore
  object: Observable<any>

  id = 0;

  constructor(private armSecService: ArmSecService,
              private defService: DefService,
              private router: Router,
              private route: ActivatedRoute,
              private elementRef: ElementRef) {
    var sup = this;
    // this.typeOfOwner = this.defService.getTypesOfOwnerShip()
    // this.bank = this.defService.getAllBanks();

    /*
        this.route.params.subscribe(value => {
          this.id = value['id']
          if (this.id == null) {
            this.id = Number(prompt("ID поставщика") || 0)
          }


          var sup = this;
          //setTimeout(function () {
          sup.object = sup.armSecService.getProvider(sup.id)
          //}, 500)


        })

     */

    this.typeOfOwner = defService.getTypesOfOwnerShip();
    this.bank = defService.getAllBanks();
    this.location = defService.getAllLocation();
    this.object = this.armSecService.getProvider(2);


  }

  ngOnInit(): void {

  }

  onSubmit() {
    /*
        const buyerDto = {
          bank: this.form.value.bank,
          inn: this.form.value.inn,
          name: this.form.value.name,
          typeOfOwner: this.form.value.typeOfOwner,
          kpp: this.form.value.kpp,
          kscore: this.form.value.kscore,
          rscore: this.form.value.rscore
        };
        console.log(buyerDto)
        this.armSecService.createProvider(buyerDto).subscribe(value => {
          console.log(value)
        }, error => {
          console.log(error.error)
        })


     */
  }

  navigateMain() {
    this.router.navigate(['/'])
  }

  deleteHere(id: any) {
    this.armSecService.deleteProvider(id)
  }
}
