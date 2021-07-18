import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MirrorService {
  private serverUrl = "";

  constructor(
    private http: HttpClient
  ) { }

  public post(path: string, options?: {}) {
    return this.http.post(this.serverUrl + path, options).pipe(map(res => {
      return res;
    }));
  }
}
