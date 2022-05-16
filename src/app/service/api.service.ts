import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  getData() {
    return this.http.get<any[]>(this.baseUrl);
  }

//   getData(): Observable<any[]> {
//     return Observable.create(() => {
//         this.http.get('https://jsonplaceholder.typicode.com/photos').map(response => response.json();
//     })
// }

}
