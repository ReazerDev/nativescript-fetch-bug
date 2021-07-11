import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MirrorService {
  private serverUrl = "http://mirror.reazer.net/api/";

  constructor(
    private http: HttpClient
  ) { }

  public toggleScreen() {
    return this.http.post(this.serverUrl + 'toggle', {}).pipe(map(res => {
      return res;
    }));
  }

  public customeQuote(quote: string, author: string) {
    return this.http.post(this.serverUrl + 'quote/self-made', { quote: quote, author: author }).pipe(map(res => {
      return res;
    }));
  }

  public randomQuote() {
    return this.http.post(this.serverUrl + 'quote/random', {}).pipe(map(res => {
      return res;
    }));
  }
}
