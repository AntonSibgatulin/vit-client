import {Component, ElementRef, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


// @ts-ignore
import * as anychart from "anychart";

@Component({
  selector: 'app-diagram1',
  templateUrl: './diagram1.component.html',
  styleUrl: './diagram1.component.css'
})
export class Diagram1Component implements OnInit {


  constructor(private httpClient: HttpClient,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.getDiagram()
  }


  getDiagramData(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/diagram1")
  }

  getDiagram() {
    this.getDiagramData().subscribe(value => {

      var data = [];

      for (let i = 0; i < value.length; i++) {
        data.push({x: value[i].name, value: value[i].count})
      }

      const container = this.elementRef.nativeElement.querySelector('#graph');
// create a pie chart and set the data
      const chart = anychart.pie(data);
      chart.animation(true);
      chart.labels().position("outside");
      chart.labels().fontSize(24);
      console.log(chart)



      anychart.onDocumentReady(() => {
        chart.container(container);
        chart.draw();
      });


    })
  }
}
