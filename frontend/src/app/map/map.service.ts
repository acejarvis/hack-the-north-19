import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {


  
  constructor( private http: HttpClient) { }
  getCurrentPosition(): Observable<Position> {
    return Observable.create((observer: Observer<Position>) => {
      // Invokes getCurrentPosition method of Geolocation API.
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          observer.next(position);
          observer.complete();
        },
        (error: PositionError) => {
          console.log('Geolocation service: ' + error.message);
          observer.error(error);
        }
      );
    });
  }

  getHeatPoints(): Observable<any[]> {

    var url = 'http://lngmgtest.azurewebsites.net/api/users/';

    //return this.http.get<any[]>('${url}+${customerId}');
    return this.http.get<any[]>('http://lngmgtest.azurewebsites.net/api/users/cad31095-cae1-49f4-bea8-78c42e2d92b7');
  }

}
