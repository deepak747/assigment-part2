import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  addRecord(data: any): Observable<any> {
    return this.http.post(environment.inserturl, data)
  }

  allRecord(): Observable<any> {
    return this.http.get(environment.listurl);
  }

  deleteRecord(id: any): Observable<any> {
    return this.http.delete(environment.deleteurl + '/' + id)
  }
}
