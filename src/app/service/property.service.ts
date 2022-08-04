import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  inserturl="https://test-part1.herokuapp.com/property/add";
  listurl="https://test-part1.herokuapp.com/property/list";
  deleteurl="https://test-part1.herokuapp.com/property/delete"
  constructor(private http:HttpClient) { }


       addRecord(data:any):Observable<any>
       {
        return this.http.post(this.inserturl,data)
       }

       allRecord():Observable<any>
         {
          return this.http.get(this.listurl);
         }

         deleteRecord(id:any):Observable<any>
         {
          return this.http.delete(this.deleteurl+ '/'+id)
         }
}
