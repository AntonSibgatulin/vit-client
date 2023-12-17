import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class ArmSecService {

  constructor(private httpClient: HttpClient) {
  }

  getProviders(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getAllProviders")
  }

  getBuyers(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getAllBuyers")
  }

  createProvider(dto: any): Observable<any> {
    return this.httpClient.post("http://localhost:8080/createProvider", dto)
  }

  createBuyer(dto: any): Observable<any> {
    return this.httpClient.post("http://localhost:8080/createBuyer", dto);
  }

  getProvider(id: number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getProvider/" + id);
  }

  getBuyer(id: number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getBuyer/" + id);
  }

  deleteProvider(id: any): Observable<any> {
    return this.httpClient.get("http://localhost:8080/deleteProvider/" + id)
  }

  deleteBuyer(id: any): Observable<any> {
    return this.httpClient.get("http://localhost:8080/deleteBuyer/" + id)
  }

  createConf(obj: any): Observable<any> {
    return this.httpClient.post("http://localhost:8080/createConfidant", obj)
  }

  getConf(valueElement: any): Observable<any> {
    return this.httpClient.get("http://localhost:8080/getConf/" + valueElement)

  }
}
