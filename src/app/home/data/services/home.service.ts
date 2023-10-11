import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  updateVehicle(body: any): Observable<any> {
    return this.httpClient.patch(`${environment.BASE_URL}/visit/evt.SHEQN5yEwG/lnk.142`, body)
  }
}
