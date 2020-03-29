import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';


import { GenericRequestHandler } from './GenericRequestHandler';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable()
export class RequestService {
    //
    // ─── MEMBERS ────────────────────────────────────────────────────────────────────
    //

    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private baseUrl: string;


    //
    // ─── CONSTRUCTOR ────────────────────────────────────────────────────────────────
    //
    constructor(private genericRequest: GenericRequestHandler) {
        this.baseUrl = environment.baseUrl;
    }

    //
    // ─── GET METHODS ─────────────────────────────────────────────────────────────
    //


    getAllMessages(): Promise<any> {
        return this.genericRequest.genericGet(this.baseUrl + 'v1/messages',
            httpOptions.headers);
    }


    //
    // ─── POST METHODS ────────────────────────────────────────────────────────────
    //



    registerUser(data: any): Promise<any> {
        // TODO: CHANGE THE localUrl TO baseUrl.
        return this.genericRequest.genericPost(this.baseUrl + 'v1/register', data, httpOptions.headers).then(response => {
            return response;
        }).catch(error => {
            throw error;
        });
    }
    loginUser(data: any): Promise<any> {
        // TODO: CHANGE THE localUrl TO baseUrl.
        return this.genericRequest.genericPost(this.baseUrl + 'v1/login', data, httpOptions.headers).then(response => {
            return response;
        }).catch(error => {
            throw error;
        });
    }

    addPushSubscriber(data: any): Promise<any> {
        return this.genericRequest.genericPost(this.baseUrl + 'v1/subscribe', data, httpOptions.headers).then(response => {
            return response;
        }).catch(error => {
            throw error;
        });


    }


    //
    // ─── PUT MEHTODS ────────────────────────────────────────────────────────────────
    //




}

