import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  constructor(private router: Router) {
  }

  navigateEditSec() {
    this.router.navigate(['arm-sec'])
  }

  navigateEditBuh() {
    this.router.navigate(['arm-buh'])
  }

  navigateCreateConf() {
    this.router.navigate(['arm-cnf'])
  }

  navigateCreateCar() {
    this.router.navigate(['/car'])
  }
}
