import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    /* private _input:string ="";
    get input(): string {
        return this._input;
    }
    set input(value: string) {
        this._input = value;
    } */
    constructor(private http: HttpClient) { }

    getData(t :string) {
        let text = t.replaceAll(" ", "%20");
        return this.http.get('https://www.omdbapi.com/?apikey=c6274715&t='+text);
    }
}