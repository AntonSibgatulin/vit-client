import {Component} from '@angular/core';
import {ArmSecService} from "../../../services/arm.sec.service";

@Component({
  selector: 'app-view-sec',

  templateUrl: './view-sec.component.html',
  styleUrl: './view-sec.component.css'
})
export class ViewSecComponent {


  // providers
  // @ts-ignore
  objects: any

  constructor(private armSecService: ArmSecService) {
    this.objects = armSecService.getProviders();
  }







}
