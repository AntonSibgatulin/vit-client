import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({providedIn: "root"})
export class DefService {

  constructor(private httpClient: HttpClient) {

  }


  getTypesOfOwnerShip(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getTypesOfOwnerShip")
  }


  getAllModels(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getAllModels")
  }


  getAllCarBrands(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getAllCarBrands")
  }

  getAllConfidant(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getAllConfidant")

  }

  getAllBanks(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getAllBanks")
  }

  getAllLocation(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getAllLocation")
  }

  getModelsByCarBrand(carBrand: any): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getModels/" + carBrand);
  }

  createPts(obj: any): Observable<any> {
    return this.httpClient.post("http://localhost:8080/createPts", obj)
  }

  createAct(obj: any): Observable<any> {
    return this.httpClient.post("http://localhost:8080/createAct", obj)
  }

  createAgr(obj: any): Observable<any> {
    return this.httpClient.post("http://localhost:8080/createAgreement", obj)
  }

  getAllProviders(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getAllProviders")
  }


  getAllBuyers(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getAllBuyers")
  }

  getAllTransmission(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getAllTransmission")
  }

  createCar(obj: any): Observable<any> {
    return this.httpClient.post("http://localhost:8080/createCar", obj)
  }

  createPayment(value: any):Observable<any> {
    return this.httpClient.post("http://localhost:8080/createPaymentOrder",value)
  }
}
