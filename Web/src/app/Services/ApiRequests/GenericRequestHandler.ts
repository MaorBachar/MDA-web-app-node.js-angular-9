import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class GenericRequestHandler {
    
    constructor(private http: HttpClient) {}

    public genericGet(url: string, headers: HttpHeaders): Promise<any> {
        return this.http.get(url, {headers}).toPromise();
    }
    public genericDelete(url: string, headers: HttpHeaders): Promise<any> {
        return this.http.delete(url, {headers}).toPromise();
    }
    public genericPost(url: string, body: any, headers: HttpHeaders): Promise<any> {
        return this.http.post(url, body,  {headers}).toPromise();
    }
    public genericPut(url: string, body: any, headers: HttpHeaders): Promise<any> {
        return this.http.put(url, body, {headers}).toPromise();
    }
}
