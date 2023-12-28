import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewViewComponent implements OnInit {


  //@ts-ignore
  dataForm: Observable<any>


  constructor(private httpClient: HttpClient) {
  }

  data() {
    this.dataForm = this.getData();
  }

  getData(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/view")
  }

  ngOnInit(): void {
    this.data()
  }


  protected readonly Date = Date;

  date(dateTransmission: any): string {
    const date = new Date(dateTransmission);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // months are zero-based
    const year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
  }
}
